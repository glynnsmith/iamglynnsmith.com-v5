const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task(
	'build',
	sequence(
		'copy-root',
		['pages', 'components'],
		'scss',
		['concat-home', 'concat-info', 'concat-top'],
		'images'
	)
);
