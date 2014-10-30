'use strict';

var spqrControllers = angular.module('spqrControllers', []);

spqrControllers.controller('NavCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}]);

spqrControllers.controller('IdentityCtrl', ['$scope', function($scope) {}]);

// EOF
