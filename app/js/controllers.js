// Define the cityBlocs app, with no dependencies
angular.module('cityblocsControllers', ['ngSanitize'])
  .controller('AboutCtrl', [
    '$scope', '$http', '$sce',
    function ($scope, $http, $sce) {
      'use strict';
      $http.get('pages/about.json')
        .success(function (data) {
          $scope.title = data.title;
          $scope.desc = $sce.trustAsHtml(data.desc);
          $scope.ack = $sce.trustAsHtml(data.ack);
          $scope.legal = $sce.trustAsHtml(data.legal);
        });
    }
  ])
  .controller('CouncilCtrl', [
    '$scope', '$http', '$sce', '$routeParams',
    function ($scope, $http, $sce, $routeParams) {
      'use strict';
      // Showing a given council's graph and analysis
      $scope.city = $routeParams.city;
      $scope.year = $routeParams.year;
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
