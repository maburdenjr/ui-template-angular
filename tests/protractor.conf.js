exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        './example.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    seleniumAddress:'http://localhost:4444/wd/hub',

    framework: 'jasmine'
};