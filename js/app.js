var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/profile', {
            templateUrl: 'my_account.html',
            controller: 'mainController'
        })
        .when('/all', {
            templateUrl: 'all.html',
            controller: 'mainController'
        })
        .when('/login', {
            templateUrl: 'index2.html',
            controller: 'mainController'
        })
});

myApp.controller('mainController', function ($scope) {

});