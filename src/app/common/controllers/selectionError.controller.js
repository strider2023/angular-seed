  /** @ngInject */
  function SelectionErrorController($scope, NTSelectionErrorService) {
    var vm = this;
    $scope.errorImage = vm.image;
    $scope.errorDescription = vm.description;
    $scope.isVisible = false;
    $scope.tooltip = vm.tooltip;
    $scope.actionButtonClick = function() {
      NTSelectionErrorService.onActionButtonClicked();
    }
  }
