'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('MessageSettingCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.loading = false;
    //基础的页码、排序等等选项
    $scope.media = {
        epage:1,
        pageCount:1,
        recordCount:1,
        pagesize:10,
        search:'',
        orderfield:'',
        ordertype:'',
        status:-1
    }
    //换页
    $scope.setPage = function(n){
        if($scope.media.epage + n >0 && $scope.media.epage + n <= $scope.media.pageCount){
            $scope.media.epage += n;
        } 
    };
    //调整每页显示量
    $scope.setPageSize = function(n){
        $scope.media.pagesize = n;
    }
    //排序
    $scope.setOrder = function(name){
        if($scope.media.orderfield == name)
        {
            $scope.media.ordertype = $scope.media.ordertype=="asc"?"desc":"asc";
        }else{
            $scope.media.orderfield = name;
            $scope.media.ordertype = "asc";
        }
    }
    //调整查询规则，计划中、已审批、已取消、已驳回
    $scope.setStatus = function(status){
        $scope.media.status = status;
    }
    //检索功能
    $scope.search = function(search){
        $scope.media.search = search;
    };
    
    $scope.form = {
        status:0,
        name:'',
        type:0,
        dataInit:function (item) {
            this.status = item?1:0;
            this.name = item?(item.name||''):'';
            this.type = '' + (item?(item.type||0):0);
        }
    }
    
    $scope.list = [
        {
            type:0,
            name:'咨询'
        },
        {
            type:1,
            name:'建议'
        },
        {
            type:2,
            name:'投诉'
        },
        {
            type:3,
            name:'举报'
        }
    ]
  }]);