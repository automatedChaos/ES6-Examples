/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:06:45+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: gulpfile.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T11:05:42+01:00
*/

const gulp = require( 'gulp');
const babel = require( 'gulp-babel');
const exec = require('gulp-exec');
const spawn = require('child_process').spawn;

/**
 * Run the transpiler
 */
gulp.task( 'es6', () => {
  return gulp.src('src/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build/js'));
});


/**
 * Execute the .js with node - saves using any HTML to begin with
 * and lets us focus on the JavaScript
 */
gulp.task('node', () => {

  command = spawn('node', ['build/js/index.js']);

  // SUCCESS
  command.stdout.on('data', function (data) {
    console.log('JS OUTPUT:');
    console.log('--------------------------------');
    console.log(data.toString());
    console.log('--------------------------------');
  });

});


gulp.task('default',['es6', 'node']);
