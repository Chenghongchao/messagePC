angular.module('messagePcApp')
.factory('UserService',['$http', 'AppConfig',function($http, AppConfig){
    var getList = function(param){
        var url = AppConfig.WEB_ROOT + 'personnel/replystaf/getreplystaflist/?schoolcode=' + AppConfig.schoolCode
        +'&token='+AppConfig.token
        + '&epage=' + (param.epage || 1) + '&pagesize=' + (param.pagesize || 10)
        + (param.username?('&username='+param.username):'')
        + (param.jobnumber?('&jobnumber='+param.jobnumber):'')
        + (param.account?('&account='+param.account):'');
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    var addUser = function(param){
        param.token = param.token || AppConfig.token;
        param.schoolcode = param.schoolcode || AppConfig.schoolCode;
        var url = AppConfig.WEB_ROOT + 'personnel/replystaf/replystafadd/';
        return $http({
            url:url,
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params:param
        }).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });//.get(url,param);
    }
    var editUser = function(param){
        param.token = param.token || AppConfig.token;
        var url = AppConfig.WEB_ROOT + 'personnel/replystaf/replystafedit/';
        return $http({
            url:url,
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params:param
        }).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });//.get(url,param);
    }
    var delUser = function(param){
        param.token = param.token || AppConfig.token;
        var url = AppConfig.WEB_ROOT + 'personnel/replystaf/replystafdel/';
        return $http({
            url:url,
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params:param
        }).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });//.get(url,param);
    }
    var getRoleList = function(param){
        var url = AppConfig.WEB_ROOT + 'personnel/replystaf/getroledropdown/?schoolcode='+AppConfig.schoolCode
        +'&token='+AppConfig.token;
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    var login = function(param){
        var url = AppConfig.WEB_ROOT + 'message/account/pcaccountlogin/';
        return $http({
            url:url,
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params:param
        }).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });//.get(url,param);
    }
    return {
        getList:getList,
        addUser:addUser,
        editUser:editUser,
        delUser:delUser,
        getRoleList:getRoleList,
        login:login
    }
}]);