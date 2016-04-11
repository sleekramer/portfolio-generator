(function () {
  function PortfolioEditCtrl ($scope, $http) {
    $scope.$watch("portfolio", function(newVal, oldVal) {
      if(newVal) {
        $scope.projects = $scope.portfolio.projects;
        $scope.project = $scope.projects[0];
      }
    })
    $scope.changeProject = function (projectId) {
      $scope.project = $scope.projects.find(c => c.id === projectId);
    };
  }

  angular
    .module("edit")
    .controller("PortfolioEditCtrl",["$scope","$http",PortfolioEditCtrl]);
})();
