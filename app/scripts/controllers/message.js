'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('MessageCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {
        $rootScope.loading = false;
        //基础的页码、排序等等选项
    $scope.media = {
        epage:1,
        pageCount:1,
        recordCount:1,
        pagesize:10,
        name:'',
        studentnumber:'',
        search:0,
        orderfield:'',
        ordertype:'',
        status:-1
    }
    //换页
    $scope.setPage = function(n){
        if($scope.media.epage + n >0 && $scope.media.epage + n <= $scope.media.pageCount){
            $scope.media.epage += n;
            //();
        } 
    };
    //调整每页显示量
    $scope.setPageSize = function(n){
        $scope.media.pagesize = n;
        //();
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
        //();
    }
    //调整查询规则，按学区、生活区或者楼栋查询
    $scope.show = function(type,item,campusId,liveAreaId){
        $scope.media.campusid = item.campusId || "";
        $scope.media.liveareaid = item.liveAreaId || "";
        $scope.media.flatid = item.flatId || "";
        
        switch(type){
            case 0:
                $scope.selecter.campusId = "";
                $scope.selecter.liveAreaId = "";
                $scope.selecter.flatId = "";
                break;
            case 1:
                $scope.selecter.campusId = item.campusId;
                $scope.selecter.liveAreaId = "";
                $scope.selecter.flatId = "";
                break;
            case 2:
                $scope.selecter.campusId = campusId;
                $scope.selecter.liveAreaId = item.liveAreaId;
                $scope.selecter.flatId = "";
                break;
            case 3:
                $scope.selecter.campusId = campusId;
                $scope.selecter.liveAreaId = liveAreaId;
                $scope.selecter.flatId = item.flatId;
                break;
        }
        
        //();
    };
    //调整查询规则，计划中、已审批、已取消、已驳回
    $scope.setStatus = function(status){
        $scope.media.status = status;
        //();
    }
    //检索功能
    $scope.search = function(search){
        $scope.media.name = $scope.media.search?'':search;
        $scope.media.studentnumber = $scope.media.search?search:'';
        //();
    };
    $scope.tree = [
        {
            title:'服务中心',
            nodes:[
                {
                    title:'公共服务中心',
                    number:8
                },
                {
                    title:'就业服务中心',
                    number:5
                },
                {
                    title:'安全卫生服务中心',
                    number:2
                }
            ]
        },
        {
            title:'留言类型',
            nodes:[
                {
                    title:'类型01',
                    number:8
                },
                {
                    title:'类型01',
                    number:5
                },
                {
                    title:'类型01',
                    number:2
                }
            ]
        }
    ]
    $scope.list = [
        {
            type:1,
            name:'王同学',
            comment:'宿管大爷是否可以骂人',
            time:2.2,
            phone:12312312312,
            group:'公共服务中心',
            status:0
        },
        {
            type:0,
            name:'王同学',
            comment:'宿管大爷不该骂人',
            time:3.2,
            phone:12312312312,
            group:'公共服务中心',
            status:1
        },
        {
            type:2,
            name:'王同学',
            comment:'宿管大爷怎么骂人',
            time:5.2,
            phone:12312312312,
            group:'公共服务中心',
            status:0
        },
        {
            type:3,
            name:'王同学',
            comment:'宿管大爷为何骂人',
            time:24.2,
            phone:12312312312,
            group:'公共服务中心',
            status:1
        }
    ]
  }]);