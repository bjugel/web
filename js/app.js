'use strict';

var isSpqr = true;

var ressources = {
	logo: isSpqr ? 'SPQR Informatik GmbH' : 'Ingenieurbüro Öllinger'
};

var spqrApp = angular.module('spqrApp', [
    'ngRoute',
    'spqrControllers'
]);

spqrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                redirectTo: '/index'
            }).
            when('/index', {
                templateUrl: 'pages/index.html',
                controller: 'IdentityCtrl',
                activeTab: 'index',
                slug: 'IT-Beratung und Software-Lösungen',
				res : ressources
				
            }).
            when('/consulting', {
                templateUrl: 'pages/consulting.html',
                controller: 'IdentityCtrl',
                activeTab: 'consulting',
                slug: 'Wir sind technischer Partner für die Definition und Umsetzung der IT-Strategie eines Unternehmens.',
				res : ressources
            }).
            when('/design-modeling', {
                templateUrl: 'pages/design-modeling.html',
                controller: 'IdentityCtrl',
                activeTab: 'design',
                slug: 'Fachliche, technische Konzeption und Modellierung.',
				res : ressources
				
            }).
            when('/data-management', {
                templateUrl: 'pages/data-management.html',
                controller: 'IdentityCtrl',
                activeTab: 'datamanagement',
                slug: 'Data Management',
				res : ressources
            }).
            when('/enterprise-development', {
                templateUrl: 'pages/enterprise-development.html',
                controller: 'IdentityCtrl',
                activeTab: 'enterprisedev',
                slug: 'Enterprise Development',
				res : ressources
            }).
            when('/continuous-integration', {
                templateUrl: 'pages/continuous-integration.html',
                controller: 'IdentityCtrl',
                activeTab: 'continuous',
                slug: 'Continuous Integration',
				res : ressources
            }).
            when('/mobile-solutions', {
                templateUrl: 'pages/mobile-solutions.html',
                controller: 'IdentityCtrl',
                activeTab: 'mobilesolutions',
                slug: 'App-Entwicklung',
				res : ressources
            }).
            when('/impressum', {
                templateUrl: 'pages/' + (isSpqr ? '' : 'iboe-') + 'impressum.html',
                controller: 'IdentityCtrl',
                activeTab: 'impressum',
                slug: 'IT-Beratung und Software-Lösungen',
				res : ressources
            }).
            when('/contact-us', {
                templateUrl: 'pages/' + (isSpqr ? '' : 'iboe-') + 'contact-us.html',
                controller: 'IdentityCtrl',
                activeTab: 'contact',
                slug: 'IT-Beratung und Software-Lösungen',
				res : ressources
            }).
            otherwise({
                redirectTo: '/index',
				res : ressources
            });
    }
]);

// EOF
