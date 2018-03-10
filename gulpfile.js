const gulp = require('gulp');
const requireDir = require('require-dir');
const log = require('fancy-log');

requireDir('./gulp/tasks', { recurse: true });

log('Hullo');
