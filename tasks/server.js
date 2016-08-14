module.exports = (gulp, serverRootDir, watchDir, openBrowser) => {
    const path = require('path');
    return () => {
        const browserSync = require('browser-sync').init({
            server: {
                baseDir: [serverRootDir]
            },
            open: openBrowser,
            host: 'localhost',
            browser: 'default',
            notify: false
        });

        setWatchers(browserSync.reload);

        return browserSync;
    };

    function setWatchers(reloadCallback) {
        var onOffFlag = '\\o/';

        if (watchDir) {

            var fileExtensionToWatch = 'ts';
            var callback = (event) => {
                require('./compile')(gulp, watchDir, reloadCallback, event.path)();
                console.info(`File ${event.path} was ${event.type}, running compilation...`);
            };

            gulp.watch(path.join(watchDir, '**', `*.${fileExtensionToWatch}`), callback);
            gulp.watch(path.join(watchDir, '**', '*.html'), callback);
            gulp.watch(path.join(watchDir, '**', '*.css'), callback);
        }

        console.info(`\n\tWatching TypeScript ${onOffFlag}\n`);
    }
};
