/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-12T21:33:38+01:00
* @Email:  alcwynparker@gmail.com
* @Project: GiffGaff - SpaceJunk
* @Filename: gulpfile.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-12T22:18:09+01:00
*/

const gulp = require('gulp');

// Nodemon is a utility that will monitor for any changes in your
// source and automatically restart your server. Perfect for development
const nodemon = require('nodemon');


gulp.task('default', [], () => {

  nodemon({
    script: 'app.js',     // what is it going to Running
    ext: 'js',             // extension
    env: {
      PORT:8000           // pass env variable to change port number
    },
    ignore: ['./node_modules/**']    // ignore all the node modules
  })
  .on('restart', () => {
    // let the console know we have restarted the server
    console.log('Restarting server');
  });

});
