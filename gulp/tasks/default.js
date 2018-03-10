const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task('default', sequence('build', 'watch'));
