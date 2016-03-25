'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('SettingCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.loading = false;
    $scope.tree = [
        {
            title:'校区1',
            nodes:[
                {
                    title:'就业服务中心'
                },
                {
                    title:'失业服务中心'
                }
            ]
        },
        {
            title:'校区2',
            nodes:[
                {
                    title:'就业服务中心'
                },
                {
                    title:'失业服务中心'
                },
                {
                    title:'校保安部'
                }
            ]
        },
        {
            title:'精神康复中心'
        }
    ]
    $scope.media = {
        type:1,
        status:1,
        title:''
    }
  }]);