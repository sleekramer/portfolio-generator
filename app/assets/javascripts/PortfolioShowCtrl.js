var renderer = new marked.Renderer();
renderer.heading = function(text, level, raw) {
  return '<h4'
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};
marked.setOptions({
  renderer: renderer,
  gfm: true,
  sanitize: true,
  smartlLsts: true
});

(function () {
  function PortfolioShowCtrl ($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http.get("/portfolio/" + id + ".json").then(function(response) {
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
