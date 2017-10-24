var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    uglify=require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('default', function() {
  gulp.src('*.css')
    .pipe(concat('main.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist'));
  gulp.src('*.js')
    .pipe(concat('mian.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
  gulp.src('*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist'));
});
