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
                UserService.loginMessage({
                    account:$scope.media.user,
                    password:$scope.media.pass
                }).success(function (data) {
                    if(data.code == 0){
                        // sessionStorage.staffkey = data.data.staffkey;
                        sessionStorage.tokenMessage = data.data.token;
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
                        var form = document.createElement("form");
                        form.target = "test";
                        form.method = "post";
                        form.action = "/index.php?s=/Home/User/login.html";
                        var input1 = document.createElement("input"),input2 = document.createElement("input");
                        input1.name = "username";
                        input1.value = $scope.media.user;
                        
                        input2.name = "password";
                        input2.value = $scope.media.pass;
                        
                        form.appendChild(input1);
                        form.appendChild(input2);
                        
                        form.submit();
                        login();
                        
                    }
                    else
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                })
            }
            
        }
        function login() {
            UserService.login({
                useraccount:$scope.media.user,
                password:$scope.media.pass,
                code:$scope.media.code || '',
                sessionid:$scope.media.sessionid || ''
            }).success(function (data) {
                $rootScope.loading = false;
                if(data.code == 0){
                    sessionStorage.adminId = data.data.adminId;
                    sessionStorage.token = data.data.token;
                    sessionStorage.nodeIds = data.data.nodeIds;
                    sessionStorage.schoolCode = data.data.schoolCode;
                    sessionStorage.userName = data.data.userName;
                    sessionStorage.roleName = data.data.roleName;
                    sessionStorage.roleId = data.data.roleId;
                    sessionStorage.userAccount = data.data.userAccount;
                    sessionStorage.isOpenBed = data.data.isOpenBed;
                    
                    sessionStorage.week = data.data.week;
                    sessionStorage.month = data.data.month;
                    sessionStorage.day = data.data.day;
                    sessionStorage.bed = data.data.bed;
                    sessionStorage.pass = data.data.pass;
                    sessionStorage.photo = data.data.photo;
                    sessionStorage.role = data.data.role;
                    sessionStorage.takephoto = data.data.takephoto;
                    sessionStorage.check = data.data.check;
                    
                    $rootScope.loginSwitch = true;
                    location.href = '#index';
                }
                else
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            })
        }
    }]);
