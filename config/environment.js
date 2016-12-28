/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'around',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    firebase: {
      apiKey: "AIzaSyDgyEetXZXvVf9sVfflxf5moEpwU1SIE_Y",
      authDomain: "around-3adb9.firebaseapp.com",
      databaseURL: "https://around-3adb9.firebaseio.com",
      storageBucket: "around-3adb9.appspot.com",
      messagingSenderId: "685500387485"
    },
    torii: {
      sessionServiceName: 'session'
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV.googleMap = {
    // your configuration goes here
  };
  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };
  ENV['g-map'] = {
    libraries: ['places', 'geometry'],
    key: 'AIzaSyC5HSGyOiYYqAJ78lE3QSw5-w5bJqeCY7k'
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
