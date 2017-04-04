var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat		= require('gulp-concat'),
	uglify		= require('gulp-uglifyjs'),
	cssnano		= require('gulp-cssnano'),
	rename		= require('gulp-rename'),
	del			= require('del'),
	imagemin	= require('gulp-imagemin'),
	pngquant	= require('imagemin-pngquant')
	cache		= require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
	console.log('Gulp is running!');
});

gulp.task('sass', function() {
	return gulp.src([
		'sass/*.+(scss|sass)'
	])
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});
gulp.task("css-libs", ['sass'], function() {
	return gulp.src([
		'css/main.css'
	])
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('css'));
});
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: ''
		},
		notify: false
	});
});
gulp.task('clean', function() {
	return del.sync('dist');
});
gulp.task('clearCache', function() {
	return cache.clearAll();
});
gulp.task('img', function() {
	return gulp.src('img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('img'));
});

gulp.task('watch', ['browser-sync', 'css-libs'], function() {
	gulp.watch('sass/*.+(scss|sass)', ['css-libs']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'css-libs'], function() {
	var buildCss = gulp.src([
			'css/main.css',
			'css/libs.min.css'
		])
		.pipe(gulp.dest('css'));

	// var buildFonts = gulp.src('fonts/**/*')
	// 	.pipe(gulp.dest('fonts'));

	var buildScripts = gulp.src('js/**/*')
		.pipe(gulp.dest('js'));

	var buildHtml = gulp.src('*.html')
		.pipe(gulp.dest(''));
});