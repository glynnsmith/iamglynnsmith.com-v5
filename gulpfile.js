// plugins
const gulp = require('gulp');
const changed = require('gulp-changed');
const rename = require('gulp-rename');
const sequence = require('gulp-sequence');
const { phpMinify } = require('@cedx/gulp-php-minify');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const config = require('./gulp/gulp.config.json');

// tasks
gulp.task('templates', function() {
	return gulp
		.src(`${config.paths.srcTemplate}**/*.php`)
		.pipe(rename({ dirname: '' }))
		.pipe(changed(config.paths.destTemplate))
		.pipe(gulp.dest(config.paths.destTemplate));
});

gulp.task('components', function() {
	return gulp
		.src(`${config.paths.srcComponent}**/*.php`)
		.pipe(rename({ dirname: '' }))
		.pipe(changed(config.paths.destComponent))
		.pipe(gulp.dest(config.paths.destComponent));
});

gulp.task('sass', function() {
	return gulp
		.src(`${config.paths.src}scss/*.scss`)
		.pipe(changed(config.paths.destCSS))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			})
		)
		.pipe(cleanCSS({ compatibility: '*' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.destCSS))
		.on('error', sass.logError)
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

function concatenate(cfg) {
	return (
		gulp
			.src(cfg.src)
			.pipe(concat(cfg.name))
			.pipe(babel({ presets: ['es2015'] }))
			.pipe(sourcemaps.init())
			// .pipe(uglify())
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(config.paths.destJS))
	);
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
		.src(`${config.paths.srcImg}*`)
		.pipe(changed(config.paths.destImg))
		.pipe(imagemin())
		.pipe(gulp.dest(config.paths.destImg))
);

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: config.browsersync.proxy
	});
});

gulp.task('build', sequence(['templates', 'components'], 'sass', 'concat-all', 'imagemin'));

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch(`${config.paths.srcTemplate}**/*.php`, ['templates']).on('change', browserSync.reload);
	gulp.watch(`${config.paths.srcComponent}**/*.php`, ['components']).on('change', browserSync.reload);
	gulp.watch(`${config.paths.srcSCSS}*.scss`, ['sass']);
	gulp.watch(config.concatPaths.home.src, ['concat-home']).on('change', browserSync.reload);
	gulp.watch(config.concatPaths.info.src, ['concat-info']).on('change', browserSync.reload);
	gulp.watch(config.concatPaths.top.src, ['concat-top']).on('change', browserSync.reload);
	gulp.watch(`${config.paths.srcImg}*`, ['imagemin']).on('change', browserSync.reload);
});

gulp.task('default', sequence('build', 'watch'));
