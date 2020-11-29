'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('task1', function () {
    return gulp.src('./src/scss/ascend.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./_site/css/'))
        .pipe(gulp.dest('./dist/css/'))
}
);
gulp.task('task2', function () {
    return gulp.src('./src/scss/ascend.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('ascend.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'));
}
);
gulp.task('task3', function () {
    return gulp.src('./src/scss/web-main.scss')
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

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series('task1', 'task2', 'task3'));
});