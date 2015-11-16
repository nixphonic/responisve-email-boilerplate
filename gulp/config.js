module.exports = {
    watch: true,
    prod: false,
    src: 'source/',
    dest: './output/',
    outputJadeIncludes: true,
    watchDest: ['output/**/*', '!output/**/*.html'],
    extensionlessRoutes: false // WARNING: Experimental
};