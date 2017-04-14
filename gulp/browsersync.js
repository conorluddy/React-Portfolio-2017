"use strict";
const browserSync = require('browser-sync').create();

/**
 * BrowserSync
 */

module.exports = (gulp, browserSync) => {
    gulp.task('browserSync', () => {
        browserSync.init({
            browser: 'Google Chrome Canary', //Canary will open if it exists, else default should.
            port: 6969,
            server: {
                baseDir: "./dist"
            }
        });
    });
};
