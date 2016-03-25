'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('MenuCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {
        $rootScope.loading = false;
        $scope.setMenu = function (n) {
            $rootScope.menuManager = n;
        }
  }]);