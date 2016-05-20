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
            $rootScope.frame = t?true:false;
            var a = document.createElement('a');
            a.target="page-tab";
            switch(name){
                case 'wechat':
                    if(!$rootScope.menuCheck(318)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    a.href = "/index.php?s=/addon/HomePage/HomePage/lists.html";
                    a.click();
                    break;
                case 'food':
                    if(!$rootScope.menuCheck(317)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    a.href="/index.php?s=/addon/Dingcan/Dingcan/lists.html";
                    a.click();
                    break;
                case 'water':
                    if(!$rootScope.menuCheck(370)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    a.href="/index.php?s=/addon/WechatWater/WechatWater/lists.html";
                    a.click();
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
                    a.href="/index.php?s=/addon/RepairSystem/RepairSystem/lists.html";
                    a.click();
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
                case 'graduate':
                    if(!$rootScope.menuCheck(371)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    location.href="/login/#/index?p=graduate";
                    break;
                case 'shower':
                    if(!$rootScope.menuCheck(367)){
                        swal("提示","请联系客服电话0571-28256212 开通权限", "info"); 
                        return;
                    }
                    a.href="/index.php?s=/addon/WechatWater/WechatWater/lists.html";
                    a.click();
                    break;
            }
        }
        
        var toggles = localStorage.toggles || "";
        $scope.media = {
            old:'',
            newPassword:'',
            confirm:'',
            name:AppConfig.userName,
            wechat:!new RegExp(",wechat,").test(","+toggles+","),
            flat:!new RegExp(",flat,").test(","+toggles+","),
            repair:!new RegExp(",repair,").test(","+toggles+","),
            food:!new RegExp(",food,").test(","+toggles+","),
            water:!new RegExp(",water,").test(","+toggles+","),
            pay:!new RegExp(",pay,").test(","+toggles+","),
            data:!new RegExp(",data,").test(","+toggles+","),
            admin:!new RegExp(",admin,").test(","+toggles+","),
            message:!new RegExp(",message,").test(","+toggles+","),
            graduate:!new RegExp(",graduate,").test(","+toggles+","),
            shower:!new RegExp(",shower,").test(","+toggles+",")
        }
        $scope.toggleSave = function () {
            var str = "";
            if(!$scope.media.wechat)str += "wechat,";
            if(!$scope.media.flat)str += "flat,";
            if(!$scope.media.repair)str += "repair,";
            if(!$scope.media.food)str += "food,";
            if(!$scope.media.water)str += "water,";
            if(!$scope.media.pay)str += "pay,";
            if(!$scope.media.data)str += "data,";
            if(!$scope.media.admin)str += "admin,";
            if(!$scope.media.message)str += "message,";
            if(!$scope.media.graduate)str += "graduate,";
            if(!$scope.media.shower)str += "shower,";
            if(str.length>0){
                localStorage.toggles = str.substring(0,str.length-1);
            }else localStorage.toggles ="";
            if($scope.topResize)$scope.topResize();
        }
    }]);