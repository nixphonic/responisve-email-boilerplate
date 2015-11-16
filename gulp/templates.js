var $ = require('./common.js');
var config = require('./config.js');


var fileinclude = require('gulp-file-include'), inlineCss = require('gulp-inline-css');

$.gulp.task('views', function() {
    
        $.gulp.src([config.src + 'views/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(inlineCss({
          preserveMediaQueries:true
        }))
        .pipe($.gulp.dest(config.dest));
    
});
