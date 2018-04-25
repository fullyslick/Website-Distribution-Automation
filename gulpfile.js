var gulp = require('gulp');
// What plugin to use in this case gulp-sass, gulp-autoprefixer, gulp-concat, gulp-uglify
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const pump = require('pump'); // uglify needs this to handle errors
const uglify = require('gulp-uglify');


var browserSync = require('browser-sync').create();

// Run Static Server + watching scss/html files
// When gulp serve is first called run -> 'styles', 'copy-html', 'copy-images'
gulp.task('serve', ['styles', 'copy-images'], function() {

    browserSync.init({
        server: "./dist"
    });

    // If scss file in root dir is changed, run 'styles' task and reload index.html in dist folder.
    gulp.watch("sass/**/*.scss", ['styles', 'reloadMe']);

     // Watch when image is added to the 'img' folder, to copy it to 'dist/img'
    gulp.watch('img', ['copy-images']);

    // Watch when html is changed in root folder, copy it to 'dist' folder, and reload index.html in dist folder.
    gulp.watch("./*.html", ['copy-html','reloadMe']);
});

// The sequance of task that will be executed.
// gulp.task -> name of task sequance, and the function containing the tasks that has to be executed.
// Run 'gulp styles' in terminal to execute the 'styles' serquance.
gulp.task('styles', function(done) {
  // First look at some folder for files that will be modified.
  // In this case look for all folders and subfolders of 'sass', and look for files with extension 'scss'.
  gulp.src('sass/**/*.scss')

    // Then Run 'sass' plugin, which converts scss to css.
    .pipe(sass({outputStyle: 'compressed'}))

    // After that Run autoprefixer, using the last 4 versions of all browsers, settings.
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))

    // Save the converted files in 'dist/css' folder
    .pipe(gulp.dest('dist/css'))

  console.log('Completed');
  // Always include done as argument and at the end of task to run the gulp ASYNC
  done();
});

// Copy every image added to 'img' folder, to 'dist/img'
gulp.task('copy-images', function(done) {
  // Access every file in 'img' folder
  gulp.src('img/*')

    // and copy the file to 'dist/img'
    .pipe(gulp.dest('dist/img'))

  // Always include done as argument and at the end of task to run the gulp ASYNC
  done();
});

// Copy the all html files to 'dist' folder.
// Above there is a watcher, so when any html is changed it will be automaticly copied to 'dist' folder.
gulp.task('copy-html', function(done) {

  // Access every html file in root folder
  gulp.src('./*.html')

    // and copy the file to 'dist'
    .pipe(gulp.dest('dist'))

  // Always include done as argument and at the end of task to run the gulp ASYNC
  done();
});

// This task combine all js files into one in the dist directory
gulp.task('concat-js-root', function(done){

  // Access every folder and js file in js folder of root folder.
  gulp.src('js/**/*.js')

  // Combine all js files into one called 'all.js'
  .pipe(concat('all.js'))

  // and copy the file to 'dist'
  .pipe(gulp.dest('dist/js'))

  done();
});

// This task combine all js files into one in the dist directory,
// but it will also compress the outputted js file.
gulp.task('concat-js-dist', function(cb){
  // Now using pump because uglify will throw an error
  pump([
      // Access every folder and js file in js folder of root folder.
      gulp.src('js/**/*.js'),

      // Combine all js files into one called 'all.js'
      concat('all.js'),

      // Minify 'all.js'
      uglify(),

      // and copy the file to 'dist'
      gulp.dest('dist/js')
    ],
    cb
  );
});

// This task will reload any "*.html" file when changes happen.
// Specify here the file which you want to reload, when change of specified above file happens
gulp.task('reloadMe', function(done) {
  browserSync.reload("dist/*.html");
  done();
});

// Task that produces production ready version of the site
gulp.task('dist', [
  'copy-html',
  'copy-images',
  'styles',
  'concat-js-dist']);

// Use `gulp default` to run the watchers
gulp.task('default', ['serve']);
