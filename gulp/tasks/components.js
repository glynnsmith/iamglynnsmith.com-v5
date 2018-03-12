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
const config = require('../gulp.config.json');

gulp.task('components', function() {
	return gulp
		.src(config.paths.src.php.components)
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
