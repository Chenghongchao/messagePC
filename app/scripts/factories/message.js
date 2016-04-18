angular.module('messagePcApp')
.factory('MessageService',['$http', 'AppConfig',function($http, AppConfig){
    var getList = function(param){
        var url = AppConfig.WEB_ROOT + 'message/message/messageinfo/?schoolcode=' + AppConfig.schoolCode
        +'&token='+AppConfig.token
        + '&epage=' + (param.epage || 1) + '&pagesize=' + (param.pagesize || 10)
         + (param.sid?('&sid='+param.sid):'')
        + (param.status>-1?('&status='+param.status):'')
        + (param.username?('&username='+param.username):'')
        + (param.tid?('&tid='+param.tid):'');
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    var delMessage = function(param){
        param.token = param.token || AppConfig.token;
        var url = AppConfig.WEB_ROOT + 'message/message/messagedel/';
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
    var getDetail = function(param){
        var url = AppConfig.WEB_ROOT + 'message/message/messagedetails/?id='+param.id
        +'&token='+AppConfig.token;
        return $http.get(url).error(function (error) {
            swal("提示", "网络错误！", "error"); 
        });
    }
    
    var addReply = function(param){
        param.token = param.token || AppConfig.token;
        param.schoolcode = param.schoolcode || AppConfig.schoolCode;
        var url = AppConfig.WEB_ROOT + 'message/message/messageinforeply/';
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
        delMessage:delMessage,
        getDetail:getDetail,
        addReply:addReply
    }
}]);