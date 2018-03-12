const gulp = require('gulp');
const mode = require('gulp-mode')({
	modes: ['dev', 'build'],
	default: 'dev',
	verbose: false
});
const log = require('fancy-log');
const browserSync = require('browser-sync').create();
const refresh = browserSync.reload;
const logo = `


    █████████
  █████████████
██████░   ░██████
████░       ░████
████         ████
████░       ░████
██████░   ░██████
  █████████████
    █████████
████         ████
█████       █████
 ███████████████
   ███████████


			`;

const config = require('../gulp.config.json');

let isModeBuild = mode.build();

gulp.task('watch', function() {
	if (isModeBuild) {
		log(logo);
		browserSync.init({
			proxy: {
				target: config.browsersync.proxyBuild
			},
			browser: ['google chrome', 'firefox developer edition', 'safari'],
			files: ['./build/assets/css/*.css']
		});
	} else {
		log(logo);
		browserSync.init({
			proxy: {
				target: config.browsersync.proxyDev
			},
			browser: ['google chrome'],
			files: ['./dev/assets/css/*.css']
		});
	}

	// Watch for changes to source files
	gulp.watch(config.paths.src.php.pages, ['pages']);
	gulp.watch(config.paths.src.php.components, ['components']);
	gulp.watch(config.paths.src.scss, ['scss']);
	gulp.watch(config.concatPaths.home.src, ['concat-home']);
	gulp.watch(config.concatPaths.info.src, ['concat-info']);
	gulp.watch(config.concatPaths.top.src, ['concat-top']);
	gulp.watch(`${config.paths.src.img}*`, ['images']);
	gulp.watch(`${config.paths.src.rootContents}**/*`, ['copy-root']);

	// Watch for changes to dev/build assets and reload browser/s
	if (isModeBuild) {
		gulp.watch(['./build/**/*', '!./build/**/css/*']).on('change', refresh);
	} else {
		gulp.watch(['./dev/**/*', '!./dev/**/css/*']).on('change', refresh);
	}
});
