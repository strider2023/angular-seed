(function() {
  'use strict';

  var app = angular.module('angularSeedApp');
  app.service('NTFloaterService', NTFloaterService);

  function NTFloaterService(NTCommonUIServices, NTStorageService, NTnavBarService, $rootScope, $location) {
    this.floaterScope = '';
    this.callback;
    this.commonFunction = function(scopeObject) {
      //Floater items
      this.floaterScope = scopeObject;
      var floaterDragWindow = new FloaterObject(1, 'Drag Window', 'open_in_browser', 'bottom');
      var floaterBack = new FloaterObject(2, 'Go Back', 'arrow_back', 'top');
      var floaterInfo = new FloaterObject(3, 'Info', 'info', 'left');
      var floaterHelp = new FloaterObject(4, 'About', 'help', 'right');
      //Home screen items
      var floaterSearch = new FloaterObject(2, 'Search', 'search', 'top');
      var floaterClose = new FloaterObject(3, 'Close', 'close', 'left');
      if ($location.path() == '/') {
        scopeObject.floaterItems = [floaterDragWindow, floaterSearch, floaterClose, floaterHelp];
      } else {
        scopeObject.floaterItems = [floaterDragWindow, floaterBack, floaterInfo, floaterHelp];
      }
      //Floater functions
      floaterDragWindow.onClick = function() {
        var x = mainWindow.getBoundingClientRect();
        $("#mainWindow").animate({
          height: "580",
          marginTop: x.bottom / 2.4
        });
        $("#button").fadeOut(150);
        $("#model").fadeOut(150);
      }

      floaterInfo.onClick = function() {
        $rootScope.$broadcast("EnjoyHintpopup");
        $rootScope.$broadcast("functionCall");
      }

      floaterBack.onClick = function() {
        $rootScope.$broadcast("floaterBackEvent");
      }

      floaterClose.onClick = function() {
        $rootScope.$broadcast("closeApplication");
      }

      floaterSearch.onClick = function() {
        $rootScope.$broadcast("searchTools");
      }

      floaterHelp.onClick = function() {
        scopeObject.data = NTnavBarService.getData();
        scopeObject.showInfoDialog(scopeObject.data);
      }

      // Info Dialog
      scopeObject.showInfoDialog = function(card) {
        var dialogObject = new DialogObject('app/components/common/htmls/infoDialog.html', InfoDialogController);
        dialogObject.bundle = card;
        dialogObject.clickOutsideToClose = true;
        NTCommonUIServices.showDialog(dialogObject);
      };

    }

    this.onBackForFloater = function() {
      this.floaterScope.locationObj.$$path = '/';
      this.commonFunction(this.floaterScope);
    }

    this.infoDialog = function(scopeObject, tabValue, cardsValue) {
      // md-dailog
      this.commonFunction(this.floaterScope);
      scopeObject.$on("MyEvent", function(evt) {
        scopeObject.data = NTnavBarService.getData();
        scopeObject.cardData = scopeObject.data.tabs[tabValue].cards[cardsValue];
        scopeObject.showInfoDialog(scopeObject.cardData);
      });
    }

    this.setDataLoadedCallback = function(callback) {
      this.callback = callback;
    }

    this.setIsTNBuild = function(isTNBuild) {
      this.callback(isTNBuild);
    }
  }
})();
