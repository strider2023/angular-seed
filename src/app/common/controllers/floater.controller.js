  /** @ngInject */
  function FloaterController($scope, NTFloaterService, moment, $location, NTUtilityService, NTnavBarService) {

    var vm = this;
    $scope.floaterItems = vm.datasource;
    $scope.locationObj = $location;
    NTFloaterService.commonFunction($scope, '');
    $scope.hideFloater = false;
    var tapped = false;
    $("#drag").on("touchstart", function(e) {
      if (!tapped) {
        tapped = setTimeout(function() {
          tapped = null;
        }, 300); //wait 300ms
      } else {
        clearTimeout(tapped);
        tapped = null;
        $scope.displayModel();
      }
      e.preventDefault()
    });

    // Function to display functions-window after dobble clicking button
    $scope.displayModel = function() {
      $(document).ready(function() {
        $("#model").fadeIn(280);
      });

      $("#drag").draggable('disable');

      var buttonPotision = button.getBoundingClientRect();
      var windowposition = mainWindow.getBoundingClientRect();
      var rightDiff = windowposition.right - buttonPotision.right;
      var bottomDiff = windowposition.bottom - buttonPotision.bottom;
      // Adjusting Css if model is going out of screen
      if (rightDiff < 950) { // Move model at Left
        $('#model').css({
          "marginLeft": '-235px'
        });
      } // Move model at right
      if (rightDiff > 650) {
        $('#model').css({
          "marginLeft": '35px'
        });
      } // Move model at up
      if (bottomDiff < 260) {
        $('#model').css({
          "marginTop": '-345px'
        });
      } // Move model at Down
      if (bottomDiff > 300) {
        $('#model').css({
          "marginTop": '-25px'
        });
      }
    };

    NTFloaterService.setDataLoadedCallback(function(isTNBuild) {
      if (!isTNBuild) {
        $scope.hideFloater = true;
      }
    });

    $scope.initialize = function() {
      var windowWidth = $(window).width() - 50;
      var windowHeight = $(window).height() - 50;
      $("#drag").draggable({
        containment: [0, 142, windowWidth, windowHeight]
      });

      var $body = $(document);
      $body.bind('scroll', function() {
        if ($body.scrollLeft() !== 0) {
          $body.scrollLeft(0);
        }
        if ($body.scrollTop() !== 0) {
          $body.scrollTop(0);
        }
      });
      // Remove model after click anywhere on screen
      document.addEventListener("click", function() {
        $("#model").fadeOut(150);
        $("#drag").draggable('enable');
      });

      // Bring page to original position after clicking its header
      $("#" + vm.background).click(function() {
        $("#" + vm.background).animate({
          height: "1060px",
          marginTop: "0px"
        }, function() {
          $("#button").fadeIn(100);
        });
      });
    }

    $scope.onClicked = function(data) {
      data.onClick();
    }
  }
