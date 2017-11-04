(function() {
  'use strict';

  angular.module('angularSeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ui.router',
    'ngMaterial',
    'toastr',
    'angular-nicescroll',
    'homeModule',
    'userModule',
    'threrJSModule'
  ]);

  // Helps to maintain modularity in big projects. Create modules based on components.
  angular.module('homeModule', []);
  angular.module('userModule', []);
  angular.module('threrJSModule', []);

})();
