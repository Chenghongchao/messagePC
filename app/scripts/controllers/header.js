'use strict';

/**
 * @ngdoc function
 * @name flatpcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flatpcApp
 */
angular.module('messagePcApp')
  .controller('HeaderCtrl', ['$scope','$rootScope','AppConfig',
  function($scope,$rootScope,AppConfig) {
        $scope.username = AppConfig.schoolname;
        $scope.logout = function () {
            location.href="#login"
        }
        
    }]);