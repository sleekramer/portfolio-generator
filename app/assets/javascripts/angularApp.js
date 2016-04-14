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

  var token = function () {
    return document.getElementsByName("csrf-token")[0].content;
  }

  function editConfig ($httpProvider) {
    $httpProvider.interceptors.push(function () {
      return {
        'request': function(config) {
          config.headers["X-CSRF-TOKEN"] = token();
          console.log(token());
          return config;
        }
      }
    });
  }
  angular
    .module("edit", [])
    .config(["$httpProvider",editConfig]);
})();
