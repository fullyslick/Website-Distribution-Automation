var gulp = require('gulp');
// What plugin to use in this case gulp-sassand gulp-autoprefixer
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Run the tasks -> name of task as string, function to be executed, (done) as argument for async execution
gulp.task('default', function(done) {
  // Add the -> gulp.watch if you want to execute the task on file save or change
  // So watch for changes and the execute the gulp task
  gulp.watch('sass/**/*.scss', gulp.series('styles'));

  // watch when image is added to the 'img' folder, to copy it to 'dist/img'
  gulp.watch('img', gulp.series('copy-images'));

  // Always include done as argument and at the end of task to run the gulp ASYNC
  done();
});

// The sequance of task that will be executed.
// gulp.task -> name of task sequance, and the function containing the tasks that has to be executed.
// Run 'gulp styles' in terminal to execute the 'styles' serquance.
gulp.task('styles', function(done) {
  // First look at some folder for files that will be modified.
  // In this case look for all folders and subfolders of 'sass', and look for files with extension 'scss'.
  gulp.src('sass/**/*.scss')

    // Then Run 'sass' plugin, which converts scss to css.
    .pipe(sass())

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
