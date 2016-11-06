var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var glob = require('glob');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var ts = require('gulp-typescript');
var paths = {
    pages: ['*.html']
};

gulp.task('copy-html', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    });
});

gulp.task('tsc', ['copy-html'], function() {
    var tsFiles = glob.sync('temp/*.js');
    console.log(tsFiles);
    return browserify({
            basedir: '.',
            debug: true,
            entries: tsFiles,
            cache: {},
            packageCache: {}
        })
        // .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['test', 'tsc', 'browserSync'], function() {
    gulp.watch('src/*.ts', ['tsc']);
    gulp.watch('src/*.html', ['copy-html']);
    gulp.watch('dist/*.js', browserSync.reload);
});


var tsProject = ts.createProject('tsconfig.json');

gulp.task('test', ['copy-html'], function() {
    var tsResult = tsProject.src('src/**/*.ts')
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('dist'));
});