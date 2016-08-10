'use strict';

/**
 * @ngdoc function
 * @name angular1CalendarApp.controller:calendarcontrollerCtrl
 * @description
 * # calendarcontrollerCtrl
 * Controller of the angular1CalendarApp
 */
angular.module('angular1CalendarApp')
  .controller('calendarCellCtrl', function($scope, $timeout) {

    $scope.status = {};

    $scope.randomMillis = function() {
      return Math.floor(Math.random() * 500);
    }

    $scope.cellClicked = function() {
      delete $scope.status.searchResults;
      $scope.status.isSearching = true;
      // Simulate an AJAX request:
      $timeout(function() {
        $scope.status.isSearching = false;
        $scope.status.searchResults = {
          options: Math.floor(Math.random() * 5)
        };
      }, $scope.randomMillis());
    }
    $scope.$on('allSearchRequested', function() {
      $scope.cellClicked();
    });

    $scope.showSpinner = function() {
      return $scope.status.isSearching;
    }
    $scope.hideSpinner = function() {
      return !$scope.status.isSearching;
    }
    $scope.showHour = function() {
      return !$scope.status.isSearching && !$scope.status.searchResults;
    }
    $scope.showSearchResults = function() {
      return $scope.status.searchResults;
    }

  });
