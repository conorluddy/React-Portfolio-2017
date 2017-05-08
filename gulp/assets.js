"use strict";
// let ffmpeg = require('gulp-fluent-ffmpeg');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');

/**
 * Assets - images, fonts, svg, and other non-codey bits...
 */


module.exports = (gulp) => {

    gulp.task('assets', () => {
      gulp.src('./assets/**/*')
        .pipe(gulp.dest('dist/assets/'));
    });



    gulp.task('asset-resize-content', () => {
      gulp.src('./assets/images/content/*.jpg')
        .pipe(imageResize({
          width : 1440,
          crop : false,
          upscale : false,
          quality: 0.9,
          filter: 'Catrom'
        }))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images/content'));
    });




    gulp.task('asset-resize-hero', () => {
      gulp.src('./assets/images/hero/*.jpg')
        .pipe(imageResize({
          width : 1920,
          crop : false,
          upscale : false,
          quality: 0.9,
          filter: 'Catrom'
        }))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images/hero'));
    });






    // gulp.task('video', function () {
    //   return gulp.src('./assets/video/*.mov')
    //     .pipe(ffmpeg('mp3', function (cmd) {
    //       return cmd
    //         .audioBitrate('128k')
    //         .audioChannels(2)
    //         .audioCodec('libmp3lame')
    //     }))
    //     .pipe(gulp.dest('dist/assets/video'));
    // });
    //


};
