angular.module('messagePcApp')
.factory('SettingService',['$http', 'AppConfig',function($http, AppConfig){
    var getSchoolList = function(param){
        var url = AppConfig.WEB_ROOT + 'basesetup/service/getcampusservicelist/?schoolcode=' + AppConfig.schoolCode
        +'&token='+AppConfig.token;
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    var addCampus = function(param){
        param.token = param.token || AppConfig.token;
        param.schoolcode = AppConfig.schoolCode;
        var url = AppConfig.WEB_ROOT + 'basesetup/campus/campusadd/';
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
    var editCampus = function(param){
        param.token = param.token || AppConfig.token;
        var url = AppConfig.WEB_ROOT + 'basesetup/campus/campusedit/';
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
    var delCampus = function(param){
        param.token = param.token || AppConfig.token;
        var url = AppConfig.WEB_ROOT + 'basesetup/campus/campusdel/';
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
    var addService = function(param){
        var url = AppConfig.WEB_ROOT + 'basesetup/service/serviceadd/';
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
    var editService = function(param){
        var url = AppConfig.WEB_ROOT + 'basesetup/service/serviceedit/';
        return $http({
            url:url,
            method:"POST",
            headers: {
                'Content-Type': 'application/x-aawww-form-urlencoded'
            },
            params:param
        }).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });//.get(url,param);
    }
    var delService = function(param){
        var url = AppConfig.WEB_ROOT + 'basesetup/service/servicedel/';
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
    
    var getTypeList = function(param){
        var url = AppConfig.WEB_ROOT + 'basesetup/messagetype/getmessagetypelist/?schoolcode=' + AppConfig.schoolCode
        +'&token='+AppConfig.token
        + '&epage=' + (param.epage || 1) + '&pagesize=' + (param.pagesize || 10);
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    var addType = function(param){
        param.token = param.token || AppConfig.token;
        param.schoolcode = param.schoolcode || AppConfig.schoolCode;
        var url = AppConfig.WEB_ROOT + 'basesetup/messagetype/messagetypeadd/';
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
    var editType = function(param){
        param.token = param.token || AppConfig.token;
        param.schoolcode = param.schoolcode || AppConfig.schoolCode;
        var url = AppConfig.WEB_ROOT + 'basesetup/messagetype/messagetypeedit/';
        return $http({
            url:url,
            method:"POST",
            headers: {
                'Content-Type': 'application/x-aawww-form-urlencoded'
            },
            params:param
        }).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });//.get(url,param);
    }
    var delType = function(param){
        param.token = param.token || AppConfig.token;
        param.schoolcode = param.schoolcode || AppConfig.schoolCode;
        var url = AppConfig.WEB_ROOT + 'basesetup/messagetype/messagetypedel/';
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
    
    var getList = function(param){
        var url = AppConfig.WEB_ROOT + 'message/message/getservermessagetree/?schoolcode=' + AppConfig.schoolCode
        +'&token='+AppConfig.token
        + (param && param.groupid?('&groupid=' + param.groupid):'');
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    
    var getTemplateList = function(param){
        var url = AppConfig.WEB_ROOT + 'basesetup/template/gettemplatelist/?schoolcode=' + AppConfig.schoolCode
        +'&token='+AppConfig.token
        + '&epage=' + (param.epage || 1) + '&pagesize=' + (param.pagesize || 10);
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    var addTemplate = function(param){
        param.token = param.token || AppConfig.token;
        param.schoolcode = param.schoolcode || AppConfig.schoolCode;
        var url = AppConfig.WEB_ROOT + 'basesetup/template/templateadd/';
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
    var editTemplate = function(param){
        param.token = param.token || AppConfig.token;
        var url = AppConfig.WEB_ROOT + 'basesetup/template/templateedit/';
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
    var delTemplate = function(param){
        param.token = param.token || AppConfig.token;
        var url = AppConfig.WEB_ROOT + 'basesetup/template/templatedel/';
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
        getSchoolList:getSchoolList,
        addCampus:addCampus,
        editCampus:editCampus,
        delCampus:delCampus,
        addService:addService,
        editService:editService,
        delService:delService,
        getTypeList:getTypeList,
        addType:addType,
        editType:editType,
        delType:delType,
        getList:getList,
        getTemplateList:getTemplateList,
        addTemplate:addTemplate,
        editTemplate:editTemplate,
        delTemplate:delTemplate
    }
}]);