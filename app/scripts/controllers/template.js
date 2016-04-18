'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('TemplateCtrl', ['$scope','$rootScope','SettingService',function ($scope,$rootScope,SettingService) {
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
    
    
    $scope.delete = function (id) {
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
                return SettingService.delTemplate({
                    id:id
                }).success(function(data){
                    $rootScope.loading = false;
                    
                    if(data.code == 0){
                        swal("提示", "删除成功！", "success"); 
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
        status:0,
        templateconfig:'',
        templatename:"",
        id:0,
        dataInit:function (item) {
            this.status = item?1:0;
            this.templateconfig = item?(item.templateconfig||''):'';
            this.templatename = '' + (item?(item.templatename||""):"");
            this.id = '' + (item?(item.id||0):0);
        },
        subSave:function (fun) {
            if(this.status){
                return SettingService.editTemplate({
                    templatename:this.templatename,
                    templateconfig:this.templateconfig,
                    id:this.id,
                }).success(function(data){
                    $rootScope.loading = false;
                    
                    if(data.code == 0){
                        swal("提示", "修改成功！", "success"); 
                        if(fun)fun();
                        refresh();
                    }else if(data.code == 4037){
                            swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                            location.href="#login";$rootScope.loading = false;
                        }
                    else
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                })
            }else{
                return SettingService.addTemplate({
                    templatename:this.templatename,
                    templateconfig:this.templateconfig,
                }).success(function(data){
                    $rootScope.loading = false;
                    
                    if(data.code == 0){
                        swal("提示", "添加成功！", "success"); 
                        if(fun)fun();
                        refresh();
                    }else if(data.code == 4037){
                            swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                            location.href="#login";$rootScope.loading = false;
                        }
                    else
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                })
            }
        }
    }
    
    refresh();
    function refresh() {
        $rootScope.loading = true;
        return SettingService.getTemplateList($scope.media).success(function(data){
            console.log(data);
            if(data.code == 0){
                $scope.list = data.data.list;
                $scope.media.recordCount = data.data.recordCount;
                $scope.media.pageCount = data.data.pageCount;
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