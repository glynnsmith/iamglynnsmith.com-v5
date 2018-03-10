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
const sequence = require('gulp-sequence');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const config = require('../gulp.config.json');

function javascript(cfg) {
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
	javascript(config.concatPaths.home);
});

gulp.task('concat-info', function() {
	javascript(config.concatPaths.info);
});

gulp.task('concat-top', function() {
	javascript(config.concatPaths.top);
});

gulp.task('concat-all', function() {
	sequence(['concat-home', 'concat-info', 'concat-top']);
});
