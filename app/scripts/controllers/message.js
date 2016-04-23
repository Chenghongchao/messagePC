'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('MessageCtrl', ['$scope','$rootScope','MessageService','SettingService',function ($scope,$rootScope,MessageService,SettingService) {
        $rootScope.loading = false;
        //基础的页码、排序等等选项
    $scope.media = {
        epage:1,
        pageCount:1,
        recordCount:1,
        pagesize:10,
        sid:0,
        status:2,
        tid:0,
        username:'',
        ReplyCount:0,
        ToReplyCount:0
    }
    //换页
    $scope.setPage = function(n){
        if($scope.media.epage + n >0 && $scope.media.epage + n <= $scope.media.pageCount){
            $scope.media.epage += n;
            refresh();
        } 
    };
    //调整每页显示量
    $scope.setPageSize = function(n){
        $scope.media.pagesize = n;
        refresh();
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
        refresh();
    }
    //调整查询规则，按学区、生活区或者楼栋查询
    $scope.show = function(type,item){
        if(type){
            $scope.media.sid = item.sid || 0;
            $scope.media.tid = item.tid || 0;
        }
        
        refresh();
    };
    //调整查询规则，计划中、已审批、已取消、已驳回
    $scope.setStatus = function(status){
        $scope.media.status = status;
        refresh();
    }
    //检索功能
    $scope.search = function(search){
        $scope.media.username = search;
        refresh();
    };
    $scope.work = null;
    $scope.dataInfo = function (item) {
        $rootScope.loading = true;
        return MessageService.getDetail({id:item.id}).success(function(data){
            console.log(data);
            if(data.code == 0){
                $scope.work = data.data;
            }else if(data.code == 4037){
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                    location.href="#login";$rootScope.loading = false;
                }
            else
                swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            $rootScope.loading = false;
            
        });
        
    }
    $scope.noticeBox = function (n) {
        $scope.noticeSwitch = n;
    }
    $scope.delete = function (id,fun) {
        swal({   
                title: "确认删除",   
                text: "真的要删除吗？",   
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "删除",   
                cancelButtonText: "取消",   
                closeOnConfirm: false 
            }, 
            function(){   
                $rootScope.loading = true;
                return MessageService.delMessage({
                    id:id
                }).success(function(data){
                    $rootScope.loading = false;
                    
                    if(data.code == 0){
                        swal("提示", "删除成功！", "success"); 
                        if(fun) fun();
                        refresh();
                    }else if(data.code == 4037){
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                    location.href="#login";$rootScope.loading = false;
                }
                    else
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                });
        });
    }
    
    $scope.form = {
        content:'',
        reply:function () {
            var that = this;
            return MessageService.addReply({
                mid:$scope.work.id,
                replycontent:this.content,
                type:1
            }).success(function(data){
                $rootScope.loading = false;
                
                if(data.code == 0){
                    $scope.work.list.push({
                        rid:data.data.id,
                        replycontent:that.content,
                        replyname:data.data.replyname,
                        rcreatedate:data.data.cratedate
                    });
                    that.content = "";
                }else if(data.code == 4037){
                swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                location.href="#login";$rootScope.loading = false;
            }
                else
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            }); 
        }
    }
    
    
    
    
    SettingService.getList().success(function(data){
        if(data.code == 0){
            $scope.tree = data.data;
            refresh();
        }else if(data.code == 4037){
                swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                location.href="#login";$rootScope.loading = false;
            }
        else
            swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
        $rootScope.loading = false;
        
    });
    
    function refresh() {
        $rootScope.loading = true;
        return MessageService.getList($scope.media).success(function(data){
            console.log(data);
            if(data.code == 0){
                $scope.list = data.data.list;
                $scope.media.recordCount = data.data.recordCount;
                $scope.media.pageCount = data.data.pageCount;
                $scope.media.ReplyCount = data.data.ReplyCount || 0;
                $scope.media.ToReplyCount = data.data.ToReplyCount || 0;
            }else if(data.code == 4037){
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                    location.href="#login";$rootScope.loading = false;
                }
            else
                swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            $rootScope.loading = false;
            
        });
    }
  }]);