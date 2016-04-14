(function () {
  function PortfolioEditCtrl ($scope, $http) {
    var id;
    $scope.fullNameEdit = false;
    $scope.bioSkillsEdit = false;
    $scope.projectEdit = false;
    $scope.$watch("portfolio", function(newVal, oldVal) {
      if(newVal) {
        id = $scope.portfolio.id;
        $scope.projects = $scope.portfolio.projects;
        $scope.project = $scope.projects[0];
        $scope.skills = $scope.portfolio.skills;
        $scope.portfolio["projects_attributes"] = $scope.projects;
        delete $scope.portfolio["projects"];
        $scope.portfolio["skills_attributes"] = $scope.skills;
        delete $scope.portfolio["skills"];
      }
    })
    $scope.changeProject = function (projectId) {
      $scope.project = $scope.projects.find(c => c.id === projectId);
    };
    $scope.saveChanges = function () {
      var portfolioData = {
        "portfolio": $scope.portfolio
      }
      $http.put("/portfolio/" + id + ".json", portfolioData).then(function(response) {
        $scope.portfolio = response.data;

      },function (response) {
        alert(response.error);
      })
    };
  }

  angular
    .module("edit")
    .controller("PortfolioEditCtrl",["$scope","$http",PortfolioEditCtrl]);
})();
