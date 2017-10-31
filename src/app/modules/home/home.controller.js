(function() {
  'use strict';
  var app = angular.module('homeModule');
  app.controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $location, $rootScope, $log, DataLoaderService, CommonUIServices, UserService) {

    $scope.homeList = [];

    DataLoaderService.loadLocalFile('data/homeList.json', onSuccess, onFaliure);

    function onSuccess(data) {
      for(var i = 0; i < data.length; i++) {
        var userItem = new UserItem();
        userItem.init(data[i]);
        $scope.homeList.push(userItem);
      }
    }

    function onFaliure(data) {
      CommonUIServices.showSimpleToast(new ToastObject(ERROR_GENERAL_MSG, LENGTH_SHORT));
    }

    $scope.onListItemClicked = function(object) {
      UserService.setCurrentUser(object);
      $location.path("/user");
    }

    $scope.onInfoClicked = function() {
      var data = new InfoObject();
      data.init();

      var dialogObject = new DialogObject('app/common/htmls/infoDialog.html', InfoDialogController);
      dialogObject.clickOutsideToClose = true;
      dialogObject.bundle = data;
      CommonUIServices.showDialog(dialogObject);
    }
  }
})();
