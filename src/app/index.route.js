(function() {
  'use strict';

  angular
    .module('angularSeedApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'app/modules/home/home.html',
      controller: 'HomeController'
    })

    .state('user', {
      url: '/user',
      templateUrl: 'app/modules/user/user.html',
      controller: 'UserController'
    })

    .state('threeJS', {
      url: '/threeJS',
      templateUrl: 'app/modules/threeJS/threeJS.html',
      controller: 'ThreeJSController'
    })

    $urlRouterProvider.otherwise('/');
  }

})();
