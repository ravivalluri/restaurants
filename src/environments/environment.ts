// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  config: {
    apiKey: 'AIzaSyAv7s754raoPrfUhj5ylRvzOrrINYxIJA4',
    authDomain: 'restaurants-6f1c9.firebaseapp.com',
    databaseURL: 'https://restaurants-6f1c9.firebaseio.com',
    projectId: 'restaurants-6f1c9',
    storageBucket: 'restaurants-6f1c9.appspot.com',
    messagingSenderId: '484199588700'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
