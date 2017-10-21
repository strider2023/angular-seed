(function() {
  'use strict';

  angular
    .module('angularSeedApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('Home', {
      url: '/',
      templateUrl: 'app/modules/experiment/home/home.html',
      controller: 'HomeController'
    })

    $urlRouterProvider.otherwise('/');
  }

})();
