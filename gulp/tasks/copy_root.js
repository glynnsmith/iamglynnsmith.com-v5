const gulp = require('gulp');
const mode = require('gulp-mode')({
	modes: ['dev', 'build'],
	default: 'dev',
	verbose: false
});
const changed = require('gulp-changed');

const config = require('../gulp.config.json');

gulp.task('copy-root', function() {
	return gulp
		.src(`${config.paths.src.rootContents}**/*`, { dot: true })
		.pipe(mode.dev(changed(config.paths.dev.root)))
		.pipe(mode.build(changed(config.paths.build.root)))
		.pipe(mode.dev(gulp.dest(config.paths.dev.root)))
		.pipe(mode.build(gulp.dest(config.paths.build.root)));
});
