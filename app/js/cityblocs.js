// Define the cityBlocs app, depending on angular-route and our controllers
angular.module('cityblocs', [
  'ngRoute',
  'cityblocsControllers',
  'cityblocsDirectives',
  'cityblocsFilters',
  'markdown'
])
  .config([
    '$routeProvider',
    function ($routeProvider) {
      'use strict';
      $routeProvider
        .when('/about', {
          templateUrl: 'partials/about.html',
          controller: 'AboutCtrl'
        })
        .when('/contact', {
          templateUrl: 'partials/contact.html'
          // Currently the page is basically static, with no scope variables
          // displayed, and so no controller required.
        })
        .when('/council/:city', {
          templateUrl: 'partials/councils.html',
          controller: 'CouncilListCtrl'
        })
        .when('/council/:city/:year', {
          templateUrl: 'partials/council.html',
          controller: 'CouncilCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
