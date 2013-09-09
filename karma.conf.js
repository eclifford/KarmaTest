// Karma configuration
// Generated on Tue Aug 27 2013 16:09:45 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['requirejs', 'mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'js/**/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},
      'js/common.js',
      'test/test-main.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        console.log(path);
        return path.replace(/\.js$/, '.coffee');
      }
    }
  });
};
