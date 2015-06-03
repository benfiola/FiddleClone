var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var runsequence = require('run-sequence');
var del = require('del');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

gulp.task('js-sm', function() {
	return gulp.src('src/js/*.js').pipe(sourcemaps.init()).pipe(concat('app.js')).pipe(sourcemaps.write()).pipe(gulp.dest('build'));
});

gulp.task('html', function() {
	return gulp.src('src/html/*.html').pipe(gulp.dest('build'));
});

gulp.task('js', function() {
	return gulp.src('src/js/*.js').pipe(concat('app.js')).pipe(gulp.dest('build'));
});

gulp.task('css', function() {
	return gulp.src('src/css/style.scss').pipe(sass({
		includePaths: ['css'].concat(neat)
	}))
	.pipe(gulp.dest('build'));
});

gulp.task('clean-js', function(callback) {
	del([
		'build/*.js',
	], callback);
});

gulp.task('clean-html', function(callback) {
	del([
		'build/*.html'
	], callback);
});

gulp.task('clean-css', function(callback) {
	del([
		'build/*.css'
	], callback);
});

gulp.task('clean', function(callback) {
	runsequence('clean-js', 'clean-html', 'clean-css', callback);
});

gulp.task('dev', function(callback) {
	runsequence('clean', 'html', 'js-sm', 'css', callback);
});

gulp.task('prod', function(callback) { 
	runsequence('clean', 'html', 'js', 'css', callback);
});

gulp.task('default', function(callback) {
	runsequence('dev', callback);
});
