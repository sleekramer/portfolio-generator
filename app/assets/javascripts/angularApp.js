(function () {

  function showConfig ($locationProvider ,$routeProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase:true})
    $routeProvider.when("/", {
      controller: "PortfolioShowCtrl",
      templateUrl: "portfolios/show.html"
    })
    .when("/:id", {
      controller: "PortfolioShowCtrl",
      templateUrl: "portfolios/show.html"
    });
  }
  angular
    .module("portfolios", ["ngRoute","templates"])
    .config(["$locationProvider","$routeProvider", showConfig]);

  angular
    .module("edit", []);
})();
