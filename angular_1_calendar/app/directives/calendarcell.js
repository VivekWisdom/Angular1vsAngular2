'use strict';

/**
 * @ngdoc directive
 * @name angular1CalendarApp.directive:calendarCell
 * @description
 * # calendarCell
 */
angular.module('angular1CalendarApp')
  .directive('calendarcell', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/calendarcell.html',
      controller: 'calendarCellCtrl',
      scope: {
        hour: '=',
        day: '='
      }
    };
  });
