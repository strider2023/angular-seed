  /** @ngInject */
function InfoDialogController($scope, $mdDialog, bundle) {
  $scope.card = bundle;

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

}
