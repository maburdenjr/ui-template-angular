exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        './**/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost',

    seleniumAddress:'http://127.0.0.1:4444/wd/hub',

    framework: 'jasmine',

    plugins: [{
        chromeA11YDevTools: false,
        path: '../node_modules/protractor/plugins/accessibility/index.js'
    }],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};