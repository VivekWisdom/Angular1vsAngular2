'use strict';

/**
 * @ngdoc directive
 * @name angular1CalendarApp.directive:calendar
 * @description
 * # calendar
 */
angular.module('angular1CalendarApp')
  .directive('calendar', function() {
    return {
      restrict:'E',
      templateUrl: 'app/directives/calendar.html',
      controller:'calendarCtrl'
    };
  });
