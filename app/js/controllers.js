// Define the cityBlocs app, with no dependencies
angular.module('cityblocsControllers', ['ngSanitize'])
  .controller('AboutCtrl', [
    '$scope', '$http',
    function ($scope, $http) {
      'use strict';
      $http.get('pages/about.json')
        .success(function (data) {
          $scope.title = data.title;
          // This version accepts markdown, which gets passed through the
          // markdown filter. Since JSON doesn't allow line breaks, we accept
          // an array of strings and join them here with line breaks between
          // each pair to turn them into <p> elements.
          $scope.desc = data.desc.join('\n\n');
          $scope.ack = data.ack.join('\n\n');
          $scope.legal = data.legal.join('\n\n');
        });
    }
  ])
  .controller('ContactCtrl', [
    '$scope', '$http',
    function ($scope, $http) {
      'use strict';
      $http.get('pages/contact.json')
        .success(function (data) {
          $scope.contactUs = data.contactUs;
          $scope.org = data.org.join('\n\n');
          $scope.whoAreWe = data.whoAreWe;
          $scope.bios = data.bios.join('\n\n');
        });
    }
  ])
  .controller('CouncilCtrl', [
    '$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
      'use strict';
      // Load a hardcoded test JSON page, regardless of actual city or year
      $http.get('pages/testCouncil.json')
        .success(function (data) {
          $scope.title = data.title;
          $scope.charge = data.charge;
          $scope.dist = data.dist;
          $scope.edges = data.edges;
          $scope.descLead = data.desc[0];
          $scope.descRest = data.desc.splice(1);
        });
    }
  ])
  .controller('CouncilListCtrl', [
    '$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
      'use strict';
      // Listing available councils in a given city
      $scope.city = $routeParams.city;
    }
  ]);
