'use strict';

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
                slug: 'IT-Beratung und Software-Lösungen'
            }).
            when('/consulting', {
                templateUrl: 'pages/consulting.html',
                controller: 'IdentityCtrl',
                activeTab: 'consulting',
                slug: 'Wir sind technischer Partner für die Definition und Umsetzung der IT-Strategie eines Unternehmens.'
            }).
            when('/design-modeling', {
                templateUrl: 'pages/design-modeling.html',
                controller: 'IdentityCtrl',
                activeTab: 'design',
                slug: 'Fachliche, technische Konzeption und Modellierung.'
            }).
            when('/data-management', {
                templateUrl: 'pages/data-management.html',
                controller: 'IdentityCtrl',
                activeTab: 'datamanagement',
                slug: 'Data Management'
            }).
            when('/enterprise-development', {
                templateUrl: 'pages/enterprise-development.html',
                controller: 'IdentityCtrl',
                activeTab: 'enterprisedev',
                slug: 'Enterprise Development'
            }).
            when('/continuous-integration', {
                templateUrl: 'pages/continuous-integration.html',
                controller: 'IdentityCtrl',
                activeTab: 'continuous',
                slug: 'Continuous Integration'
            }).
            when('/mobile-solutions', {
                templateUrl: 'pages/mobile-solutions.html',
                controller: 'IdentityCtrl',
                activeTab: 'mobilesolutions',
                slug: 'App-Entwicklung'
            }).
            when('/impressum', {
                templateUrl: 'pages/impressum.html',
                controller: 'IdentityCtrl',
                activeTab: 'impressum',
                slug: 'IT-Beratung und Software-Lösungen'
            }).
            when('/contact-us', {
                templateUrl: 'pages/contact-us.html',
                controller: 'IdentityCtrl',
                activeTab: 'contact',
                slug: 'IT-Beratung und Software-Lösungen'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }
]);

// EOF
