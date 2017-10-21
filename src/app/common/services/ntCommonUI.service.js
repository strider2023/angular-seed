(function() {
  'use strict';

  var app = angular.module('nextTools');
  app.service('NTCommonUIServices', ntCommonUIServices);

  function ntCommonUIServices($mdBottomSheet, $mdToast, $mdDialog, $window, $rootScope) {
    this.navBarLogFlag = 0;
    this.showBottomSheet = function(dialogObject, onCancel, onSuccess) {
      $mdBottomSheet.show({
        locals: {
          bundle: dialogObject.bundle,
          onCancel: onCancel,
          onSuccess: onSuccess
        },
        controller: dialogObject.controller,
        templateUrl: dialogObject.view,
        clickOutsideToClose: dialogObject.clickOutsideToClose,
        escapeToClose: dialogObject.escapeToClose
      });
    }

    this.showDialog = function(dialogObject, onCancel, onSuccess) {
      $mdDialog.show({
        locals: {
          bundle: dialogObject.bundle,
          onCancel: onCancel,
          onSuccess: onSuccess
        },
        controller: dialogObject.controller,
        templateUrl: dialogObject.view,
        parent: angular.element(document.body),
        clickOutsideToClose: dialogObject.clickOutsideToClose,
        escapeToClose: dialogObject.escapeToClose
      });
    }


    this.showSimpleToast = function(toastObject) {
      $mdToast.show(
        $mdToast.simple()
        .textContent(toastObject.message)
        .position('bottom left')
        // .positionClass: 'toast-top-right',
        .hideDelay(toastObject.timeout)
        .theme('error-toast')
        .action('X')
        //.hideDelay(180000)
      );
    };
    this.closeDialogOnbackNavigation = function() {
      $rootScope.$on('$locationChangeStart', function(event) {
        // Check if there is a dialog active
        // event.preventDefault();
        if (angular.element(document).find('md-dialog').length > 0) {
          $mdDialog.cancel();
        }
      })
    }
    var enjoyhint_instance = new EnjoyHint({});
    this.showHint = function(tool) {
      enjoyhint_instance = new EnjoyHint({});
      enjoyhint_instance.set(HINTS[tool]);
      //run Enjoyhint script

      enjoyhint_instance.run();
    };

    this.customEvent = function(eventName) {
      enjoyhint_instance.trigger(eventName);
    };

    this.goBack = function() {
      var standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);
      if (ios) {
        if (!standalone && safari) {
          //browser
        } else if (standalone && !safari) {
          //standalone
        } else if (!standalone && !safari) {
          window.location = "callbackHandler";
          //uiwebview
        };
      }
      // else {
      //   //not iOS
      // };
      else if (typeof(webkit) != "undefined") {
        // window.location = "callbackHandler";
        webkit.messageHandlers.callbackHandler.postMessage("Going back to native App")
      }
      else if (typeof(NTInterface) != "undefined") {
        NTInterface.goBack();
      }
      else if (typeof(UIKit) != "undefined") {
        window.location = "callbackHandler";
        // webkit.messageHandlers.callbackHandler.postMessage("Going back to native App")
      }
      else {
        $window.history.back();
      }
    }
  }
})();
