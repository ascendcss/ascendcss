'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('ascendcss', function () {
    return gulp.src('./src/scss/ascendcss.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('ascendcss.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'))
}
);

gulp.task('flexbox', function () {
    return gulp.src('./src/scss/ascendcss-flexbox.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('ascendcss-flexbox.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'))
}
);

gulp.task('cssgrid', function () {
    return gulp.src('./src/scss/ascendcss-cssgrid.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('ascendcss-cssgrid.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'))
}
);

gulp.task('layout', function () {
    return gulp.src('./src/scss/ascendcss-layout.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('ascendcss-layout.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'))
}
);

gulp.task('button', function () {
    return gulp.src('./src/scss/ascendcss-button.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('ascendcss-button.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'))
}
);

gulp.task('form', function () {
    return gulp.src('./src/scss/ascendcss-form.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('ascendcss-form.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'))
}
);

gulp.task('navbar', function () {
    return gulp.src('./src/scss/ascendcss-navbar.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('ascendcss-navbar.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./_site/css/'))
}
);

gulp.task('doc-style', function () {
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

gulp.task('dev', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series('ascendcss', 'flexbox', 'cssgrid', 'layout', 'button', 'form', 'navbar', 'doc-style'));
});