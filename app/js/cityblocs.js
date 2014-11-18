// Define the cityBlocs app, depending on angular-route and our controllers
var cityblocs = angular.module('cityblocs', [
  'ngRoute',
  'cityblocsControllers'
]);

cityblocs.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
