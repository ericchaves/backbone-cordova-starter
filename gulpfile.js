/* define cli flags */
var argv = require('yargs').argv
  , production = !!(argv.production);

/* load all plugins*/
var gulp = require('gulp')
  , gutil = require('gulp-util')
  , usemin = require('gulp-usemin')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-minify-css')
  , minifyHtml = require('gulp-minify-html')
  , rev = require('gulp-rev')
  , runSequence = require('run-sequence')
  , server = require('gulp-server-livereload')
  , del = require('del');


/* define some sugar syntax */
var log = gutil.log
  , noop = gutil.noop;

var source = 'app/'
  , dist   = 'www/'
  , paths = {
    index : source + '/index.html',
    css   : source + 'css/**/*.css',
    js    : source + 'js/**/*.js',
    vendors: source + 'vendors/**/*.js',
    images: source + '/img/**'
  };

gulp.task('clean', function (cb) {  
  del([
    '!'+dist+'.gitkeep',
    dist + '**/*'
  ], cb);
});


gulp.task('usemin', function(){
  return gulp.src(paths.index)
    .pipe(usemin({
      css: [minifyCss(), rev()],
      html: [minifyHtml({empty: true})],
      js: [uglify(), rev()],
      vendors: [uglify()]
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('useapp', function(){
  return gulp.src([
      paths.index, 
      paths.css, 
      paths.js, 
      paths.vendors], {base: source})
    .pipe(gulp.dest(dist));
});

gulp.task('images', function(){
  return gulp.src(paths.images, {base: source})
    .pipe(gulp.dest(dist));
});


gulp.task('build', function(){
    log('building for ' + (production ? 'production' : 'development'));
    if (production)
      runSequence('clean', 'usemin', 'images');
    else
      runSequence('clean', 'useapp', 'images');
});

gulp.task('serve', function() {
  gulp.src('./app/')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      log: 'debug',
      open: true
    }));
});

gulp.task('default', function(){
  log('available tasks:');
  log('  gulp serve (serve content locally for development)');
  log('  gulp build (build for developement)');
  log('  gulp build --production (build for production)');
})