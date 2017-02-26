'use strict';

/**
 * @ngdoc overview
 * @name angular1CalendarApp
 * @description
 * # angular1CalendarApp
 *
 * Main module of the application.
 */
angular
  .module('angular1CalendarApp', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
