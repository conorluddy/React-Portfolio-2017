"use strict";
let fs = require('fs');

/**
 * Images Gulp file.
 * Optimise and otherwise fuck around with images
 */

module.exports = (gulp) => {

  gulp.task('images', () => {
    return gulp.src('./images/**/*')
      .pipe(gulp.dest('./dist/assets/images'));
  });


};
