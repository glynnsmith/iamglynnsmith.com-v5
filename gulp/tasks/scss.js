const gulp = require('gulp');
const mode = require('gulp-mode')({
	modes: ['dev', 'build'],
	default: 'dev',
	verbose: false
});
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const colors = require('ansi-colors');
const log = require('fancy-log');
const beeper = require('beeper');
const changed = require('gulp-changed');
const sourcemaps = require('gulp-sourcemaps');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const config = require('../gulp.config.json');

gulp.task('scss', function() {
	return gulp
		.src(config.paths.src.scss)
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
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
		.pipe(mode.build(cleanCSS({ compatibility: '*' })))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(mode.dev(sourcemaps.write('.')))
		.pipe(mode.dev(gulp.dest(config.paths.dev.css)))
		.pipe(mode.build(gulp.dest(config.paths.build.css)));
});
