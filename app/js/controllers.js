// Define the cityBlocs app, with no dependencies
var cityblocsControllers = angular.module('cityblocsControllers', ['ngSanitize']);

// Create a controller for the 'About' page
cityblocsControllers.controller('AboutCtrl',
  ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    $http.get('pages/about.json')
      .success(function (data) {
        $scope.title = data.title;
        $scope.desc = $sce.trustAsHtml(data.desc);
        $scope.ack = $sce.trustAsHtml(data.ack);
        $scope.legal = $sce.trustAsHtml(data.legal);
      });
  }]
);
