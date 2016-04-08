(function () {

  function showConfig ($routeProvider) {
    $routeProvider.when("/", {
      controller: "UserShowCtrl",
      controllerAs: "uShow",
      templateUrl: "users/user_show.html"
    });
  }
  angular
    .module("userShow", ["ngRoute"])
    .config(["$routeProvider", showConfig]);
})();
