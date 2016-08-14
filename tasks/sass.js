module.exports = (gulp, config) => () => {
    const path = require('path');
    const sass = require('gulp-sass');

    return gulp.src(path.join(config.srcDir, '**', '*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
};
