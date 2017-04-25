"use strict";

/**
 * Assets - images, fonts, svg, and other non-codey bits...
 */

module.exports = (gulp) => {
    gulp.task('assets', () => {

      gulp.src('./assets/**/*')
        .pipe(gulp.dest('publish/assets/'));

    });
};
