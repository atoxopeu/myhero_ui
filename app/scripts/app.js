'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

/**
 * @ngdoc overview
 * @name MyHero-UI
 * @description
 * # MyHero-UI
 *
 * Main module of the application.
 */

var app = angular.module('myHeroApp', [
    'ngRoute',
    'ngResource'
]);

app.constant('config', {
    apiTropo: '',
    apiSpark: 'http://spark.burstserial.com',
    apiURL: 'http://app.burstserial.com',
    apiKey: 'SecureApp'
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsCtrl'
        })
        .when('/capcloud', {
            templateUrl: 'views/capcloud.html'
        })
        .when('/myheroapp', {
            templateUrl: 'views/myheroapp.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/demos', {
            templateUrl: 'views/demos.html',
            controller: 'DemosCtrl'
        })
        .otherwise({
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
});

