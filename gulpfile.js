const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const minHTML = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const sassGlob = require('gulp-sass-glob');
const gcmq = require('gulp-group-css-media-queries');
const bulkSass = require('gulp-sass-glob-use-forward');


async function compilescss() {
    gulp.src('styles/*.scss')
        .pipe(bulkSass())
        .pipe(sassGlob())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gcmq())
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('dist'))
}

async function minifyHTML() {
    return (
        gulp
            .src("*.html")
            .pipe(minHTML({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist'))
    );
}

gulp.task('watch', function () {
    gulp.watch('styles/*.scss', compilescss)
    gulp.watch('*.html', minifyHTML)
});

