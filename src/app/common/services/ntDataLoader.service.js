(function() {
  'use strict';

  var app = angular.module('nextTools');
  app.service('NTDataLoaderService', ntDataLoaderService);

  function ntDataLoaderService($http, $q) {

    this.loadLocalFile = function(location, onSuccess, onFaliure) {
      $http.get(location)
        .then(function(response) {
          if (typeof response.data === 'object') {
            onSuccess(response.data);
          } else {
            onFaliure(response.data);
          }
        }, function(error) {
          onFaliure(error);
        });
    }
  }
})();
