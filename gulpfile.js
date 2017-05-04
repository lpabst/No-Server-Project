
var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

var paths = {   
    jsSource: ['public/**/*.js'],
    cssSource: ['public/**/*.scss'],
    viewsSource: ['public/**/*.html'],
    imgSource: ['public/img/**/*.*'],
}


gulp.task('js', function(){
    gulp.src(paths.jsSource)
        .pipe(annotate())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist'))

});

gulp.task('css', function(){
    gulp.src(paths.cssSource)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('views', function(){
    gulp.src(paths.viewsSource)
        .pipe(gulp.dest('./dist'))
})

gulp.task('pics', function(){
    gulp.src(paths.imgSource)
        .pipe(gulp.dest('./dist/img'))
})

gulp.task('watch', function(){
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.viewsSource, ['views']);
    gulp.watch(paths.cssSource, ['css']);
    gulp.watch(paths.imgSource, ['pics']);
})



gulp.task('default', ['js', 'css', 'views', 'watch', 'pics']);
