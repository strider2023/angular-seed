(function() {
  'use strict';

  var app = angular.module('angularSeedApp');
  app.directive('ntFloater', ntFloater);

  function ntFloater() {

    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/common/htmls/floater.html',
      scope: {
          datasource: '=',
          background: '@'
      },
      controller: FloaterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
})();
