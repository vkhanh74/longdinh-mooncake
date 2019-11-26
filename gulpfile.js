const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const terser = require('gulp-terser');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');

const paths = {
    scss: 'app/assets/sass/**/*.scss',
    html: 'app/*.html',
    js: 'app/assets/js/**/*.js',
    pug: 'app/assets/pug/**/*.pug',
    images: 'app/assets/images/**/*.+(png|jpg|gif|svg)',
    fonts: 'app/assets/webfonts/**/*'
}

function style() {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.stream());
}

function browserSyncF() {
    browserSync.init({
        server: "app"
    });
}

function pugHtml() {
    return gulp.src(paths.pug)
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
}

function browserReload() {
    return browserSync.reload;
}

function watchJs(){
    return gulp.src('app/assets/js/main.js')
        .pipe(browserSync.stream());
}

function wathFiles() {
    gulp.watch(paths.scss, style);
    gulp.watch(paths.pug, pugHtml);
    gulp.watch('app/assets/js/main.js', watchJs);
    gulp.watch(paths.html).on('change', browserReload());
    gulp.watch(paths.js).on('change', browserReload());
}

function minifySoucre() {
    return gulp.src(paths.html)
        .pipe(useref())
        .pipe(gulpIf('*.js', terser()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
}

function minifyImage() {
    return gulp.src(paths.images)
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/assets/images'));
}

function moveFonts() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('dist/assets/webfonts'));
}

function cleanBuild(done) {
    return del.sync('dist', done());
}

const watching = gulp.parallel(wathFiles, browserSyncF);
const build = gulp.series(cleanBuild, style, pugHtml, minifySoucre, minifyImage, moveFonts)

exports.default = watching;
exports.build = build;

//Run gulp build to build production version