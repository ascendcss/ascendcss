var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('ascendcss', function () {
    return gulp.src('./src/scss/ascendcss.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(concat('test.css'))
        .pipe(gulp.dest('./dist/test/'))
}
);

gulp.task('ascendcss-stylus', function () {
    return gulp.src('./src/stylus/ascendcss.styl')
        .pipe(stylus())
        .pipe(concat('test-stylus.css'))
        .pipe(gulp.dest('./dist/test/'));
});

gulp.task('dev', function () {
    gulp.watch(['./src/scss/**/*.scss', './src/stylus/**/*.styl'], gulp.series('ascendcss', 'ascendcss-stylus'));
});