'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    gulp.src('./src/scss/ascend.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./_site/css/'))
        .pipe(gulp.dest('./src/css/'))
    gulp.src('./src/scss/ascend.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('ascend.min.css'))
        .pipe(gulp.dest('./src/css/'))
        .pipe(gulp.dest('./_site/css/'));
    gulp.src('./src/scss/web-main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./_site/css/'));
}
);

gulp.task('watch:sass', () => {
    gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});