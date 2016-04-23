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
        $scope.switch = function(t,name){
            $rootScope.frame = false;
            switch(name){
                case 'wechat':
                    if(!$rootScope.menuCheck(318)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    location.href="/index.php?s=/addon/HomePage/HomePage/lists.html";
                    break;
                case 'food':
                    if(!$rootScope.menuCheck(317)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    location.href="/index.php?s=/addon/Dingcan/Dingcan/lists.html";
                    break;
                case 'flat':
                    if(!$rootScope.menuCheck(1)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    location.href="/login/#/index?p=flat";
                    break;
                case 'repair':
                    if(!$rootScope.menuCheck(4)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    location.href="/index.php?s=/addon/RepairSystem/RepairSystem/lists.html";
                    break;
                case 'pay':
                    if(!$rootScope.menuCheck(5)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    
                    swal("提示","敬请期待", "info"); 
                    return;
                    
                case 'data':
                    if(!$rootScope.menuCheck(2)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    location.href="/login/#/index?p=data";
                    break;
                case 'admin':
                    if(!$rootScope.menuCheck(3)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    location.href="/login/#/index?p=admin";
                    break;
                case 'message':
                    if(!$rootScope.menuCheck(319)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    break;
            }
        }
    }]);