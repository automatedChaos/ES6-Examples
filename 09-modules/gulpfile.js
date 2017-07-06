/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:06:45+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: gulpfile.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-05T14:51:23+01:00
*/

const gulp = require( 'gulp');
const babel = require( 'gulp-babel');
const exec = require('gulp-exec');
const spawn = require('child_process').spawn;
let command;


/**
 * Run the transpiler
 */
gulp.task( 'es6', () => {
  return gulp.src('./src/**/*.js')
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

  if (command) command.kill();
  command = spawn('node', ['build/js/index.js']);
  console.log('\033c');

  console.log('JavaScript Output: ');
  console.log('-----------------------------------------------');

  // SUCCESS
  command.stdout.on('data', function (data) {
    console.log(data.toString());

  });

  // NOT QUITE A SUCCESS ;)
  command.stderr.on('data', function (data) {
    console.log('error: ' + data.toString());
  });

});

gulp.task('default',[ 'watch' ]);

gulp.task('watch', [ 'es6' , 'node'], function() {
  gulp.watch('src/**/*.js', [ 'default' ]);
});
