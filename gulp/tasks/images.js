const gulp = require('gulp');
const mode = require('gulp-mode')({
	modes: ['dev', 'build'],
	default: 'dev',
	verbose: false
});
const plumber = require('gulp-plumber');
const colors = require('ansi-colors');
const log = require('fancy-log');
const beeper = require('beeper');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

const config = require('../gulp.config.json');

gulp.task('images', () =>
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
