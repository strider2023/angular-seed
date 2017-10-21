(function() {
  'use strict';

  var app = angular.module('nextTools');
  app.directive('ntSelectionError', ntSelectionError);

  function ntSelectionError() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/common/htmls/selectionError.html',
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
