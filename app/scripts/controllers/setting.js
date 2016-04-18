'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('SettingCtrl', ['$scope','$rootScope','SettingService','UserService',function ($scope,$rootScope,SettingService,UserService) {
    $scope.media = {
        type:0,
        status:1,
        campus:'',
        cid:"",
        rid:'',
        dutyname:'',
        remarks:'',
        campusAdd:function () {
            var that = this;
            $rootScope.loading = true;
            return SettingService.addCampus({
                campus:this.campus,
            }).success(function(data){
                $rootScope.loading = false;
                
                if(data.code == 0){
                    swal("提示", "添加成功！", "success"); 
                    that.status = 0;
                    that.id = data.data.id;
                    refresh();
                }else if(data.code == 4037){
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                        location.href="#login";$rootScope.loading = false;
                    }
                else
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            })
        },
        campusEdit:function () {
            var that = this;
            $rootScope.loading = true;
            return SettingService.editCampus({
                id:this.id,
                campus:this.campus,
            }).success(function(data){
                $rootScope.loading = false;
                
                if(data.code == 0){
                    swal("提示", "修改成功！", "success"); 
                    refresh();
                }else if(data.code == 4037){
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                        location.href="#login";$rootScope.loading = false;
                    }
                else
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            })
        },
        serviceAdd:function () {
            var that = this;
            $rootScope.loading = true;
            return SettingService.addService({
                cid:this.cid,
                staffkey:this.staffkey,
                dutyname:this.dutyname,
                remarks:this.remarks,
            }).success(function(data){
                $rootScope.loading = false;
                
                if(data.code == 0){
                    swal("提示", "添加成功！", "success"); 
                    that.status = 0;
                    that.id = data.data.id;
                    refresh();
                }else if(data.code == 4037){
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                        location.href="#login";$rootScope.loading = false;
                    }
                else
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            })
        },
        serviceEdit:function () {
            var that = this;
            $rootScope.loading = true;
            return SettingService.editService({
                staffkey:this.staffkey,
                dutyname:this.dutyname,
                remarks:this.remarks,
                id:this.id,
            }).success(function(data){
                $rootScope.loading = false;
                
                if(data.code == 0){
                    swal("提示", "修改成功！", "success"); 
                    refresh();
                }else if(data.code == 4037){
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                        location.href="#login";$rootScope.loading = false;
                    }
                else
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            })
        },
        show:function (type,item,campus) {
            this.status = 0;
            this.type = type;
            this.campus = campus || item.campus || "";
            this.id = item.id || item.sid;
            this.cid=(item.cid || "") + "";
            this.staffkey=(item.staffkey || '') + "";
            this.dutyname=item.dutyname || '';
            this.remarks=item.remarks || '';
            console.log(this);
        },
        add:function (type,campus) {
            this.status = 1;
            this.type = type;
            
            this.campus = "";
            this.id = 0;
            this.cid="";
            this.staffkey='';
            this.dutyname='';
            this.remarks='';
            this.rid = "";
            if(type){
                this.cid = campus.id;
                this.campus = campus.campus;
            }
        }
    }
    UserService.getList($scope.media).success(function(data){
        if(data.code == 0){
            $scope.managerList = data.data.list;
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
        return SettingService.getSchoolList().success(function(data){
            console.log(data);
            if(data.code == 0){
                $rootScope.treeSchoole = data.list;
            }else if(data.code == 4037){
                    swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                    location.href="#login";$rootScope.loading = false;
                }
            else
                swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
            $rootScope.loading = false;
            
        });
    }
    $scope.subSave = function () {
        if($scope.media.type){
            if($scope.media.status){
                $scope.media.serviceAdd();
            }else{
                $scope.media.serviceEdit();
            }
        }else{
            if($scope.media.status){
                $scope.media.campusAdd();
            }else{
                $scope.media.campusEdit();
            }
        }
    }
    $scope.delete = function () {
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
                if($scope.media.type)
                    return SettingService.delService({
                        id:$scope.media.id
                    }).success(function(data){
                        $rootScope.loading = false;
                        
                        if(data.code == 0){
                            swal("提示", "删除成功！", "success");
                            $scope.media.status = 1; 
                            refresh();
                        }else if(data.code == 4037){
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                        location.href="#login";$rootScope.loading = false;
                    }
                        else
                            swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                    });
                else
                    return SettingService.delCampus({
                        id:$scope.media.id
                    }).success(function(data){
                        $rootScope.loading = false;
                        
                        if(data.code == 0){
                            swal("提示", "删除成功！", "success"); 
                            $scope.media.status = 1; 
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
  }]);