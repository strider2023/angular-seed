(function() {
  'use strict';
  var app = angular.module('angularSeedApp');
  app.controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $location, $rootScope, $log, DataLoaderService, CommonUIServices) {

    $scope.homeList = [];

    DataLoaderService.loadLocalFile('data/homeList.json', onSuccess, onFaliure);

    function onSuccess(data) {
      $scope.homeList = data;
    }

    function onFaliure(data) {
      CommonUIServices.showSimpleToast(new ToastObject("Oops! Something went wrong...", LENGTH_SHORT));
    }

    $scope.onListItemClicked = function(object) {
      CommonUIServices.showSimpleToast(new ToastObject(object.title, LENGTH_SHORT));
    }
  }
})();
