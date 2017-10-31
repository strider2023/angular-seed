(function() {
  'use strict';

  var app = angular.module('userModule');
  app.service('UserService', UserService);

  function UserService($http, $q) {

    this.currentUser;

    this.setCurrentUser = function(user) {
      this.currentUser = user;
    }

    this.getCurrentUser = function() {
      return this.currentUser;
    }
  
  }
})();
