/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    firebase: {
      apiKey: 'AIzaSyCAfn2KMIa_5aE8nFvrZYo7LpuuGy_nG14',
      authDomain: 'question-board-c41ee.firebaseapp.com',
      databaseURL: 'https://blog-d8eb2.firebaseio.com',
      storageBucket: 'question-board-c41ee.appspot.com',
    },
    modulePrefix: 'question-answer-board',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {

      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
