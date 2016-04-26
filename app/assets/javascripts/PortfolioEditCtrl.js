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
    });

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
      });
    };

    $scope.newSkill = function () {
      $scope.skills.push({
        "id": null,
        "name":"New Skill"
      });
    };

    $scope.$watch("project.features", function () {
      document.getElementById('project-features').innerHTML = marked($scope.project.features);
    });

    $scope.newProject = function () {
      $scope.projects.push({
        "id": null,
        "name":"New Project",
        "description": null,
        "features": null
      });
      $scope.project = $scope.projects[$scope.projects.length - 1];
    };

    $scope.markDelete = function (obj) {
      if (obj.hasOwnProperty("_destroy")) {
        delete obj["_destroy"];
      } else {
        obj["_destroy"] = 1;
      }
    };
  }

  angular
    .module("edit")
    .controller("PortfolioEditCtrl",["$scope","$http",PortfolioEditCtrl]);
})();
