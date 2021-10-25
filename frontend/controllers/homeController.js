angular.module('myApp')
.controller("homeController", function ($scope, $http) {
    $http.get(URL+"index")
        .then(function (response) {
            $scope.superhero = response.data;
            console.log($scope.superhero);
        }).catch(function (response) {
            console.log("ERROR:", response);
        });
});