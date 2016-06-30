/**
 * FileName gulpfile.js
 * Date 2016-06-16
 * Created by jianglinj
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    var files = [
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['browser-sync']); //定义默认任务