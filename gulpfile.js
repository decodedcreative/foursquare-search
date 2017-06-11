var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	gutil = require('gulp-util');
	cssnano = require('gulp-cssnano'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-ruby-sass'),
	notify = require('gulp-notify'),
	eslint = require('gulp-eslint'),
	sourcemaps = require('gulp-sourcemaps'),
	bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
	bs.init({
		server: {
			baseDir: "./"
		}
	});
});


gulp.task('sass', function () {
	return sass('src/scss/styles.scss', { sourcemap: true })
		.on('error', sass.logError)


		.pipe(autoprefixer({
			browsers: ["last 4 versions", "Firefox >= 27", "Blackberry >= 7", "IE 8", "IE 9"],
			cascade: false
		}))
		.pipe(cssnano())

		// For inline sourcemaps
		.pipe(sourcemaps.write())

		// For file sourcemaps
		.pipe(sourcemaps.write('maps', {
			includeContent: false,
			sourceRoot: 'src/scss'
		}))

		.on('error', function(e) {
			console.log(e);
		})

		.pipe(gulp.dest("css"))

		.pipe(bs.reload({stream: true}))

		.pipe(notify("SASS compilation complete: <%=file.relative%>"))

});

gulp.task('lint', () => {
	// ESLint ignores files with "node_modules" paths.
	// So, it's best to have gulp ignore the directory as well.
	// Also, Be sure to return the stream from the task;
	// Otherwise, the task may end before the stream has finished.
	return gulp.src(['./src/js/**/*.js'])
		// eslint() attaches the lint output to the "eslint" property
		// of the file object so it can be used by other modules.
		.pipe(eslint({configFile: 'eslint.json'}))
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(eslint.failAfterError());
});


gulp.task('es6', function() {
	browserify({
		entries: './src/js/venue-search.js',
		debug: true,
		transform: [babelify.configure({
		  presets: ['es2015']
		})]
	})
	.transform(babelify)
	.on('error',gutil.log)
	.bundle()
	.on('error',gutil.log)
	.pipe(source('scripts.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('watch',function() {
	gulp.watch('./src/js/**/*.js',{debounceDelay: 5000},['lint', 'es6'])
	gulp.watch("src/scss/**/*.scss", ['sass'])
    gulp.watch("*.html").on('change', bs.reload)
});
 
gulp.task('default', ['lint', 'es6', 'sass', 'browser-sync', 'watch']);