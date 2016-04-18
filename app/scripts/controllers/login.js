'use strict';

/**
 * @ngdoc function
 * @name flatpcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flatpcApp
 */
angular.module('messagePcApp')
  .controller('LoginCtrl',['$scope','$rootScope','AppConfig','UserService',function($scope,$rootScope,AppConfig,UserService) {
        $rootScope.loginSwitch = false;
        $scope.media = {
            user:localStorage.username || "",
            pass:'',
            code:'',
            rem:localStorage.remember?true:false,
            sessionid:''
        };
        $rootScope.loading = false;
        $scope.login = function () {
            if($scope.media.user.length > 0 && $scope.media.pass.length > 0){
                $rootScope.loading = true;
                UserService.login({
                    account:$scope.media.user,
                    password:$scope.media.pass
                }).success(function (data) {
                    $rootScope.loading = false;
                    if(data.code == 0){
                        // sessionStorage.staffkey = data.data.staffkey;
                        sessionStorage.token = data.data.token;
                        sessionStorage.schoolCode = data.data.schoolcode;
                        sessionStorage.schoolname = data.data.schoolname || 'test';
                        sessionStorage.roleName = data.data.rolename;
                        
                        // AppConfig.staffkey = data.data.staffkey;
                        AppConfig.token = data.data.token;
                        AppConfig.schoolCode = data.data.schoolcode;
                        AppConfig.schoolname = data.data.schoolname || 'test';
                        AppConfig.roleName = data.data.rolename;
                        
                        if($scope.media.rem){
                            localStorage.username = $scope.media.user;
                            localStorage.remember = 1;
                        }
                        else {
                            localStorage.username = "";
                            localStorage.remember = 0;
                        }
                        
                        location.href = '#index';
                        $rootScope.loginSwitch = true;
                    }
                    else
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                })
            }
            
        }
    }]);
