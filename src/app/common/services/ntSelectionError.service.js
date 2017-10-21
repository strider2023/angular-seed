(function() {
  'use strict';

  var app = angular.module('nextTools');
  app.service('NTSelectionErrorService', ntSelectionErrorService);

  function ntSelectionErrorService() {

    var callback;

    this.onActionButtonClicked = function() {
      if (this.callback != 'undefined') {
        this.callback();
      }
    }

    this.setActionButtonListener = function(callback) {
      this.callback = callback;
    }
  }
})();
