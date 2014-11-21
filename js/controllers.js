'use strict';

var spqrControllers = angular.module('spqrControllers', []);

spqrControllers.controller('IdentityCtrl', ['$scope', function($scope) {
}]);

spqrControllers.controller('MainCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}]);

//EOF
