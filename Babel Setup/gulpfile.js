/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:06:45+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: gulpfile.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-21T15:22:56+01:00
*/

const gulp = require( 'gulp');
const babel = require( 'gulp-babel');

gulp.task( 'es6', () => {
  return gulp.src('src/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('default',['es6'], () => {
  gulp.watch('src/index.js', ['es6']);
});
