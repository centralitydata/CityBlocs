angular.module('cityblocsFilters', [])
  .filter('capitalize', function () {
    'use strict';
    return function (s) {
      'use strict';
      return s && s.charAt(0).toUpperCase() + s.slice(1);
    }
  });
