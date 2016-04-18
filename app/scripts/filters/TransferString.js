angular.module('messagePcApp')
.filter('TransferString',function(){
    return function (str) {
        try{  
            str=str.replace(/\r\n/g,"<BR>")  
            str=str.replace(/\n/g,"<BR>");  
        }catch(e) {  
            str = ""; 
            throw e;
        }  
        return str;  
    };
});