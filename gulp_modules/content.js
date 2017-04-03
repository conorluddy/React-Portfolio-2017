"use strict";
const dirTree = require('directory-tree');
const fs = require('fs');
const metaRemarkable = require('meta-remarkable');


module.exports = (gulp, config) => {

  gulp.task('content', () => {

    //GenerateCcontent Tree JSON
    fs.writeFile('./tree.json', JSON.stringify( dirTree( config.contentRoot ) ));

    return gulp.src('./content/**/*')
      .pipe(gulp.dest('./dist/content'));

  });



  gulp.task('remark', () => {

    return gulp.src('./content/**/*')
      .pipe(gulp.dest('./dist/content'));
      
    // var md = new metaRemarkable();
    // var text = fs.readFileSync('myfile.md', 'utf8');
    // var res = md.render();
    // console.log(res.meta); // the parsed yaml->json
    // console.log(res.html); // the parsed md->html

  });

};
