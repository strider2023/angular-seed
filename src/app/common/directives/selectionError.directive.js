(function() {
  'use strict';

  var app = angular.module('angularSeedApp');
  app.directive('ntSelectionError', ntSelectionError);

  function ntSelectionError() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/common/htmls/selectionError.html',
      scope: {
        image: '@',
        icon: '@',
        description: '@',
        tooltip: '@'
      },
      controller: SelectionErrorController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
})();
