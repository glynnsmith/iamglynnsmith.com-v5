// plugins
const gulp = require('gulp');
const mode = require('gulp-mode')({
	modes: ['dev', 'build'],
	default: 'dev',
	verbose: false
});
const changed = require('gulp-changed');
const rename = require('gulp-rename');
const sequence = require('gulp-sequence');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const colors = require('ansi-colors');
const log = require('fancy-log');
const beeper = require('beeper');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

const config = require('./gulp/gulp.config.json');

let isModeBuild = mode.build();

// tasks
gulp.task('copy-root', function() {
	return gulp
		.src([`${config.paths.src.rootContents}**/*`], { dot: true })
		.pipe(mode.dev(gulp.dest(`${config.paths.dev.root}`)))
		.pipe(mode.build(gulp.dest(`${config.paths.build.root}`)));
});

gulp.task('templates', function() {
	return gulp
		.src(`${config.paths.src.templates}**/*.php`)
		.pipe(
			plumber({
				errorHandler: function(err) {
					log.error(
						colors.bold(colors.red('[ERROR]')),
						colors.bold('from ' + err.plugin)
					);
					log.error(err.message);
					beeper();
					this.emit('end');
				}
			})
		)
		.pipe(rename({ dirname: '' }))
		.pipe(mode.dev(changed(config.paths.dev.templates)))
		.pipe(mode.build(changed(config.paths.build.templates)))
		.pipe(mode.dev(gulp.dest(config.paths.dev.templates)))
		.pipe(mode.build(gulp.dest(config.paths.build.templates)));
});

gulp.task('components', function() {
	return gulp
		.src(`${config.paths.src.components}**/*.php`)
		.pipe(
			plumber({
				errorHandler: function(err) {
					log.error(
						colors.bold(colors.red('[ERROR]')),
						colors.bold('from ' + err.plugin)
					);
					log.error(err.message);
					beeper();
					this.emit('end');
				}
			})
		)
		.pipe(rename({ dirname: '' }))
		.pipe(mode.dev(changed(config.paths.dev.components)))
		.pipe(mode.build(changed(config.paths.build.components)))
		.pipe(mode.dev(gulp.dest(config.paths.dev.components)))
		.pipe(mode.build(gulp.dest(config.paths.build.components)));
});

gulp.task('sass', function() {
	return gulp
		.src(`${config.paths.src.scss}*.scss`)
		.pipe(
			plumber({
				errorHandler: function(err) {
					log.error(
						colors.bold(colors.red('[ERROR]')),
						colors.bold('from ' + err.plugin)
					);
					log.error(err.message);
					beeper();
					this.emit('end');
				}
			})
		)
		.pipe(mode.dev(changed(config.paths.dev.css)))
		.pipe(mode.build(changed(config.paths.build.css)))
		.pipe(mode.dev(sourcemaps.init()))
		.pipe(sass())
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			})
		)
		.pipe(mode.build(cleanCSS({ compatibility: '*' })))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(mode.dev(sourcemaps.write('.')))
		.pipe(mode.dev(gulp.dest(config.paths.dev.css)))
		.pipe(mode.build(gulp.dest(config.paths.build.css)))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

function concatenate(cfg) {
	return gulp
		.src(cfg.src)
		.pipe(
			plumber({
				errorHandler: function(err) {
					log.error(
						colors.bold(colors.red('[ERROR]')),
						colors.bold('from ' + err.plugin)
					);
					log.error(
						err.fileName +
							(err.loc ? `( ${err.loc.line}, ${err.loc.column} ): ` : ': ')
					);
					log.error(err.codeFrame);
					beeper();
					this.emit('end');
				}
			})
		)
		.pipe(mode.dev(sourcemaps.init()))
		.pipe(concat(cfg.name))
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(mode.build(uglify()))
		.pipe(mode.dev(sourcemaps.write('.')))
		.pipe(mode.dev(gulp.dest(config.paths.dev.js)))
		.pipe(mode.build(gulp.dest(config.paths.build.js)));
}

gulp.task('concat-home', function() {
	concatenate(config.concatPaths.home);
});

gulp.task('concat-info', function() {
	concatenate(config.concatPaths.info);
});

gulp.task('concat-top', function() {
	concatenate(config.concatPaths.top);
});

gulp.task('concat-all', function() {
	sequence(['concat-home', 'concat-info', 'concat-top']);
});

gulp.task('imagemin', () =>
	gulp
		.src(`${config.paths.src.img}**/*`)
		.pipe(
			plumber({
				errorHandler: function(err) {
					log.error(
						colors.bold(colors.red('[ERROR]')),
						colors.bold('from ' + err.plugin)
					);
					log.error(err.message);
					beeper();
					this.emit('end');
				}
			})
		)
		.pipe(mode.dev(changed(config.paths.dev.img)))
		.pipe(mode.build(changed(config.paths.build.img)))
		.pipe(
			imagemin([
				imagemin.svgo({
					plugins: [{ removeViewBox: false }, { removeComments: true }]
				})
			])
		)
		.pipe(mode.dev(gulp.dest(config.paths.dev.img)))
		.pipe(mode.build(gulp.dest(config.paths.build.img)))
);

gulp.task('browser-sync', function() {
	if (isModeBuild) {
		browserSync.init({
			proxy: config.browsersync.proxyBuild,
			browser: ['google chrome', 'firefox developer edition', 'safari'],
			notify: false,
			ghostMode: {
				clicks: true,
				location: true,
				forms: true,
				scroll: true
			}
		});
	} else {
		browserSync.init({
			proxy: config.browsersync.proxyDev,
			browser: ['google chrome', 'firefox developer edition', 'safari'],
			notify: false,
			ghostMode: {
				clicks: true,
				location: true,
				forms: true,
				scroll: true
			}
		});
	}
});

gulp.task(
	'update-files',
	sequence(
		'copy-root',
		['templates', 'components'],
		'sass',
		['concat-home', 'concat-info', 'concat-top'],
		'imagemin'
	)
);

gulp.task('watch', ['browser-sync'], function() {
	gulp
		.watch(`${config.paths.src.templates}**/*.php`, ['templates'])
		.on('change', browserSync.reload);
	gulp
		.watch(`${config.paths.src.components}**/*.php`, ['components'])
		.on('change', browserSync.reload);
	gulp.watch(`${config.paths.src.scss}*.scss`, ['sass']);
	gulp
		.watch(config.concatPaths.home.src, ['concat-home'])
		.on('change', browserSync.reload);
	gulp
		.watch(config.concatPaths.info.src, ['concat-info'])
		.on('change', browserSync.reload);
	gulp
		.watch(config.concatPaths.top.src, ['concat-top'])
		.on('change', browserSync.reload);
	gulp
		.watch(`${config.paths.src.img}*`, ['imagemin'])
		.on('change', browserSync.reload);
});

gulp.task('default', sequence('update-files', 'watch'));
