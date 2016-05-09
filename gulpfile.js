'use strict';

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    gnf = require('gulp-npm-files'),
    browserSync = require('browser-sync').create();
var config = new Config();


/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
        config.libraryTypeScriptDefinitions]; //reference to library .d.ts files


    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
    var typeScriptGenFiles = [
        config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
        config.tsOutputPath +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
        '!' + config.tsOutputPath + '/lib'
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch([config.allTypeScript], ['ts-lint', 'compile-ts']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('serve', ['ts-lint','compile-ts','watch'], function() {

});

gulp.task('browserSync', function() {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: "./"
        },
        open: false
    })
});


gulp.task('clean', function() {
    return del([config.build]);
});


gulp.task('build', ['compile-ts', 'clean'], function(){
    gulp.src(gnf(), {base:'./'}).pipe(gulp.dest(config.build));
    gulp.src([
            config.tsOutputPath +'/**/*.js',
            config.tsOutputPath +'/**/*.js.map',
            '!' + config.tsOutputPath + '/lib'
        ])
        .pipe(gulp.dest(config.build))
});


gulp.task('default', ['serve']);