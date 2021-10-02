const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const stylus = require('gulp-stylus');
const rename = require("gulp-rename");

gulp.task('ascendcss', function () {
    return gulp.src('./src/scss/ascendcss.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('./dist/test/'))
});

gulp.task('ascendcss-stylus', function () {
    return gulp.src('./src/stylus/ascendcss.styl')
        .pipe(stylus())
        .pipe(rename('ascendcss-stylus.css'))
        .pipe(gulp.dest('./dist/test/'));
});

gulp.task('dev', function () {
    gulp.watch(['./src/scss/**/*.scss', './src/stylus/**/*.styl'], gulp.series('ascendcss', 'ascendcss-stylus'));
});