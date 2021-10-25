const URL = 'http://localhost:8080/superhero/';
var app = angular.module("myApp", ['ngRoute']);

//routing
app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'templates/home.html',
        controller:'homeController'
    })
    .when('/show/:id',{
        templateUrl: 'templates/show.html',
        controller: 'showController'
    })
    .when('/create', {
        templateUrl: 'templates/create.html',
        controller: 'createController'
    })
});


//controller for home page
app.controller("homeController", function ($scope, $http) {
    $http.get(URL+"index")
        .then(function (response) {
            $scope.superhero = response.data;
            console.log($scope.superhero);
        }).catch(function (response) {
            console.log("ERROR:", response);
        });
});

//controller for show page
app.controller('showController', function($scope, $http, $routeParams, $location){
    $scope.temp = $routeParams.id;
    $http.get(URL+'show/'+$routeParams.id)
        .then(function(response){
            $scope.sup = response.data;
        }).catch(function(response){
            console.log("error: ", response);
        });

    $scope.saveSuperhero=function(){
        //console.log('hi')
        $http.put(URL+'update/'+$routeParams.id+'?name='+$scope.sup.name+'&power='+$scope.sup.power)
        .then(function(response){
            console.log(response)
            $location.path('/home');
        }).catch(function(response){
            console.log('error: '+response);
        });
    }

    $scope.delete=function(){
        $http.delete(URL+'delete/'+$routeParams.id);
        $location.path('home');
    }
});

//controller for create page
app.controller('createController', function($scope, $http, $location){
    $scope.save= function(){
        $http.post(URL+'save/?name='+$scope.sup.name+'&power='+$scope.sup.power)
        .then(function(){
            $location.path('/home');
        }).catch(function(response){
            console.log('error: '+response);
        });
    }
});