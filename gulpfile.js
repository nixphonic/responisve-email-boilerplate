var gulp = require('gulp');
var requireDir = require('require-dir');
var config = require('./gulp/config.js');

requireDir('./gulp/', { recurse: true });

gulp.task('clean', require('del').bind(null, [config.dest + '**/*', '!.*']));

gulp.task('default', ['clean'], function() {
    gulp.start('images', 'views'); //stripped out js and styles because emails do not need these
});

gulp.task('prod', function() {
    config.prod = true;
    gulp.start('default');
});

gulp.task('watch', function() {
    config.watch = true;
    gulp.start('watching');
});
