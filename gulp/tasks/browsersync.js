const gulp = require('gulp');
const mode = require('gulp-mode')({
	modes: ['dev', 'build'],
	default: 'dev',
	verbose: false
});
const browserSync = require('browser-sync').create();

const config = require('../gulp.config.json');

let isModeBuild = mode.build();

gulp.task('browser-sync', function() {
	if (isModeBuild) {
		browserSync.init({
			proxy: config.browsersync.proxyBuild,
			browser: ['google chrome', 'firefox developer edition', 'safari'],
			notify: false,
			ghostMode: {
				clicks: true,
				location: true,
				forms: true,
				scroll: true
			}
		});
	} else {
		browserSync.init({
			proxy: config.browsersync.proxyDev,
			browser: ['google chrome'],
			notify: false,
			ghostMode: {
				clicks: true,
				location: true,
				forms: true,
				scroll: true
			}
		});
	}
});
