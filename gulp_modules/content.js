"use strict";
let dirTree = require('directory-tree');
let fs = require('fs');


module.exports = (gulp, config) => {

  gulp.task('content', () => {

    //GenerateCcontent Tree JSON
    fs.writeFile('./tree.json', JSON.stringify( dirTree( config.contentRoot ) ));

    return gulp.src('./content/**/*')
      .pipe(gulp.dest('./dist/content'));

  });






};
