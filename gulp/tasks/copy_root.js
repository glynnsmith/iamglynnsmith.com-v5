const gulp = require('gulp');
const mode = require('gulp-mode')({
	modes: ['dev', 'build'],
	default: 'dev',
	verbose: false
});

const config = require('../gulp.config.json');

gulp.task('copy-root', function() {
	return gulp
		.src([`${config.paths.src.rootContents}**/*`], { dot: true })
		.pipe(mode.dev(gulp.dest(`${config.paths.dev.root}`)))
		.pipe(mode.build(gulp.dest(`${config.paths.build.root}`)));
});
