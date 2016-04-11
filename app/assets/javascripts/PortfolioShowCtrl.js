(function () {
  function PortfolioShowCtrl ($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http.get("/" + id + ".json").then(function(response) {
      $scope.portfolio = response.data;
      $scope.projects = $scope.portfolio.projects;
      $scope.project = $scope.projects[0];
    }, function(respsonse) {
      alert(response.data);
    });
    $scope.changeProject = function (projectId) {
      $scope.project = $scope.projects.find(c => c.id === projectId)
    }
  }

  angular
    .module("portfolios")
    .controller("PortfolioShowCtrl", ["$scope","$http","$routeParams",PortfolioShowCtrl]);
})();
