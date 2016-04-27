angular.module('messagePcApp')
.directive('tree', function() {
    return {
        restrict: 'A',
        link:function(scope,iElement,iAttrs){
            iElement.click(function(event){
                var a = event.target;
                if(a.tagName == 'I'){
                    a = a.parentNode;
                    if($(a).hasClass('branch')){
                        var n = a.parentNode.className;
                        if(/open/.test(n)){
                            $(a).siblings("ul").slideUp("fast",function(){$(a.parentNode).removeClass('open')});
                        }
                        else {
                            $(a).siblings("ul").slideDown("fast",function(){$(a.parentNode).addClass('open')});
                        }
                    }else{
                        iElement.find("a.active").removeClass("active");
                        $(a).addClass("active");
                    }
                }
            })
        }
    };
});