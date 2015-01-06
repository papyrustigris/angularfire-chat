'use strict';

/**
 * @ngdoc overview
 * @name papyrusDotcomApp
 * @description
 * # papyrusDotcomApp
 *
 * Main module of the application.
 */
angular
  .module('papyrusDotcomApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL', 'https://papyrustigris.firebaseio.com/');
