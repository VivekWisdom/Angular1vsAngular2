'use strict';

/**
 * @ngdoc function
 * @name angular1CalendarApp.controller:calendarCtrl
 * @description
 * # calendarCtrl
 * Controller of the angular1CalendarApp
 */
angular.module('angular1CalendarApp')
  .controller('calendarCtrl', function($scope, storeService) {
    $scope.init = function() {
      var DAYS = _.range(1, 32).map((day) => ("Oct " + day));
      $scope.days = DAYS;
      $scope.hours = _.range(24);
      $scope.isLoaded = false;

       storeService.log()
    }

    $scope.load = function() {
      $scope.isLoaded = true;
    }

    $scope.searchAll = function() {
      $scope.$broadcast('allSearchRequested');
    }

    $scope.dayHeaderClicked = function() {
      alert('dayHeaderClicked()');
    }

  });
