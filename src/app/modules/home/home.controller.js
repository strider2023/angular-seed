(function() {
  'use strict';
  var app = angular.module('angularSeedApp');
  app.controller('HomeController', HomeController);
  /** @ngInject */
  function HomeController($scope, $location, $rootScope, $log, DataLoaderService, SLCommonUIServices) {

      var experimentObject = new ExperimentObject();
      $scope.expData;

    ////////////////////////////////////////////////////// Load Template Data ///////////////////////////////////////////////////////////
    DataLoaderService.loadLocalFile('data/scienceLabHome.json', onSuccess, onFaliure);

    function onSuccess(data) {
      experimentObject.init(data);
      $scope.expData = experimentObject;
      DataLoaderService.setTitle(experimentObject.info)
    }

    function onFaliure(data) {
      SLCommonUIServices.showSimpleToast(new ToastObject("Oops! Something went wrong...", TOAST_TIMEOUT));
    }



    $scope.launchModule = function(index,card) {
      DataLoaderService.loadLocalFile('data/'+card.fileName+'.json', success, faliure);
    }
	
    function success(data) {
      var module = new moduleData();
      module.init(data);
      DataLoaderService.setData(module);
      $rootScope.$broadcast("isShowBack");
      var link = "/" + $scope.expData.info;
      $location.path(link);
    }
	
    function faliure(data) {
        SLCommonUIServices.showSimpleToast(new ToastObject("Oops! Something went wrong...", TOAST_TIMEOUT));
    }
  }

})();
