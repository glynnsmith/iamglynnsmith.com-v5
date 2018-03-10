const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require('../gulp.config.json');

gulp.task('watch', ['browser-sync'], function() {
	gulp
		.watch(`${config.paths.src.php.pages}`, ['pages'])
		.on('change', browserSync.reload);
	gulp
		.watch(
			[`${config.paths.src.php.components}`, `!${config.paths.src.php.pages}`],
			['components']
		)
		.on('change', browserSync.reload);
	gulp.watch(`${config.paths.src.scss.src}`, ['scss']);
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
		.watch(`${config.paths.src.img}*`, ['images'])
		.on('change', browserSync.reload);
});
