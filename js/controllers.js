'use strict';

var spqrControllers = angular.module('spqrControllers', []);

spqrControllers.controller('MainCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}]);

//EOF