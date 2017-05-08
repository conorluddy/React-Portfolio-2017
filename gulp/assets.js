"use strict";
// let ffmpeg = require('gulp-fluent-ffmpeg');

/**
 * Assets - images, fonts, svg, and other non-codey bits...
 */


module.exports = (gulp) => {
    gulp.task('assets', () => {

      gulp.src('./assets/**/*')
        .pipe(gulp.dest('dist/assets/'));

    });

    //
    //
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
