'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './app/';
        this.build = './dist/';
        this.sourceApp = this.source + '';

        this.tsOutputPath = this.source + '/js';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/browser.d.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;