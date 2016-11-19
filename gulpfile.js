var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'js']);

gulp.task('js', function() {
  return gulp.src('./src/js/game.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

