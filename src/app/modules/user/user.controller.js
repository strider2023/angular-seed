(function() {
  'use strict';
  var app = angular.module('userModule');
  app.controller('UserController', HomeController);

  /** @ngInject */
  function HomeController($scope, $location, $rootScope, $log, $window, DataLoaderService, CommonUIServices, UserService) {

    $scope.currentUser = UserService.getCurrentUser();
    $scope.userDetails;

    DataLoaderService.loadLocalFile('data/userData.json', onSuccess, onFaliure);

    function onSuccess(data) {
      var details = new User();
      details.init(data);
      $scope.userDetails = details;
    }

    function onFaliure(data) {
      CommonUIServices.showSimpleToast(new ToastObject(ERROR_GENERAL_MSG, LENGTH_SHORT));
    }

    $scope.onBackPressed = function() {
      $window.history.back();
    }
  }
})();
