var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('sass', (cb) => {
  pump([
    gulp.src('./assets/scss/main.scss'),
    sourcemaps.init(),
    sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError),
    autoprefixer(),
    sourcemaps.write('.'),
    gulp.dest('./assets/css'),
  ], cb);
});

gulp.task('js', (cb) => {
  pump([
    gulp.src('./assets/js/src/**/*.js'),
    sourcemaps.init(),
    concat('main.js'),
    uglify(),
    sourcemaps.write('.'),
    gulp.dest('./assets/js/dist'),
  ], cb);
});

gulp.task('sass:watch', () => {
  watch('./assets/scss/**/*.scss', () => gulp.start('sass'));
});

gulp.task('js:watch', () => {
  watch('./assets/js/src/**/*.js', () => gulp.start('js'));
});

gulp.task('default', ['sass', 'js', 'sass:watch', 'js:watch']);
gulp.task('build', ['sass', 'js']);
