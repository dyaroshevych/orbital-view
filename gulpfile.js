const gulp  = require('gulp');

const imageMin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');

const minify = require('gulp-minify');

// image minifier
gulp.task('minify-img', () => {
    return gulp.src('src/img/*')
        .pipe(imageMin([
                pngquant({quality: [0.85, 0.85]}),
                mozjpeg({quality: 85})
            ]))
        .pipe(gulp.dest('dist/img'));
});

// js minifier
gulp.task('minify-js', () => {
    return gulp.src('src/js/*.js')
      .pipe(minify())
      .pipe(gulp.dest('dist/js'));
});

// html copying
gulp.task('copy-html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// css autoprefixes
gulp.task('autoprefixer-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

// css concat
gulp.task('concat-css', () => {
    return gulp.src('dist/css/*.css')
      .pipe(concatCss('style.css'))
      .pipe(gulp.dest('dist/css'));
});

// css minifier
gulp.task('minify-css', () => {
    return gulp.src('dist/css/*.css')
      .pipe(cleanCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
    gulp.watch('src/img/*', gulp.series(['minify-img']));
    gulp.watch('src/css/*', gulp.series(['autoprefixer-css', 'concat-css','minify-css']));
    gulp.watch('src/js/*.js', gulp.series(['minify-js']));
    gulp.watch('src/*.html', gulp.series(['copy-html']));
});

gulp.task('default', gulp.series(['minify-img', 'autoprefixer-css', 'concat-css','minify-css', 'minify-js', 'copy-html']));