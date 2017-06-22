/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:06:45+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: gulpfile.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T10:18:55+01:00
*/

const gulp = require( 'gulp');
const babel = require( 'gulp-babel');

gulp.task( 'es6', () => {
  return gulp.src('src/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('node', () => {
  exec('node build/js/main.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


gulp.task('default',['es6', 'node'], () => {
  gulp.watch('src/index.js', ['es6']);
});
