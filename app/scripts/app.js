'use strict';

/**
 * @ngdoc overview
 * @name messagePcApp
 * @description
 * # messagePcApp
 *
 * Main module of the application.
 */
angular
  .module('messagePcApp', [
    'ui.router'
  ])
  .constant('AppConfig',{
     WEB_ROOT:'http://120.55.84.193/Geese_Quality_Supervision/',
    //   WEB_ROOT:'http://test.houqinbao.com/gyxt_api/',
    WEB_ROOT_MAIN:'http://120.55.84.193/Geese_Apartment/',
    schoolCode:sessionStorage.schoolCode || 0,
    token:sessionStorage.tokenMessage || 0,
    staffkey:sessionStorage.staffkey || 0,
    schoolname:sessionStorage.schoolname
  })
  .run(['$rootScope', '$location', 'AppConfig',
		function($rootScope, $location, AppConfig) {
            $rootScope.menuManager = 1;
            $rootScope.loginSwitch = true;
            AppConfig.nodeIds = ',' + (sessionStorage.nodeIds||"") + ',';
            $rootScope.menuCheck = function(menu){
                if(AppConfig.nodeIds.length < 2) $location.path('/login');
                return new RegExp(',' + menu + ',' ).test(AppConfig.nodeIds);
            }
            
			$rootScope.$on('$stateChangeStart',
				function(event, toState, toParams, fromState, fromParams) {
                    if(toState.name!='login'){
                        if(!AppConfig.schoolCode || !AppConfig.token){
                            location.href = "#login";
                        }
                    }
                    switch(toState.name){
                        case 'setting':
                            $rootScope.menuManager = 1;
                            break;
                        case 'template':
                            $rootScope.menuManager = 1;
                            break;
                        case 'message':
                            $rootScope.menuManager = 1;
                            break;
                        case 'messageSetting':
                            $rootScope.menuManager = 1;
                            break;
                        case 'manager':
                            $rootScope.menuManager = 2;
                            break;
                    }
                    $rootScope.loading = true;
                    // console.log(AppConfig.nodeIds)
            });
            $rootScope.$on('$stateChangeSuccess',
				function(event, toState, toParams, fromState, fromParams) {
                    

            });
            $rootScope.$on('$stateChangeError', 
                function(event, toState, toParams, fromState, fromParams, error){ 
                    sweetAlert("页面加载出错", "错误信息：" + error.status, "error");
            });
			
		}
	])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: "/login",
        views: {
            "login": {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }
        }
    })
    .state('index', {
        url: "/index",
        views: {
            "": {
                templateUrl: 'views/menu.html',
                controller: 'MenuCtrl'
            },
            "aside": {
                templateUrl: "views/aside.html",
                controller: 'MenuCtrl'
            },
            "header": {
                templateUrl: "views/header.html",
                controller: 'HeaderCtrl'
            }
        }
    })
    .state('message', {
        url: "/message",
        views: {
            "": {
                templateUrl: 'views/message.html',
                controller: 'MessageCtrl'
            },
            "aside": {
                templateUrl: "views/aside.html",
                controller: 'MenuCtrl'
            },
            "header": {
                templateUrl: "views/header.html",
                controller: 'HeaderCtrl'
            }
        }
    })
    .state('messageSetting', {
        url: "/messageSetting",
        views: {
            "": {
                templateUrl: 'views/messageSetting.html',
                controller: 'MessageSettingCtrl'
            },
            "aside": {
                templateUrl: "views/aside.html",
                controller: 'MenuCtrl'
            },
            "header": {
                templateUrl: "views/header.html",
                controller: 'HeaderCtrl'
            }
        }
    })
    .state('manager', {
        url: "/manager",
        views: {
            "": {
                templateUrl: 'views/manager.html',
                controller: 'ManagerCtrl'
            },
            "aside": {
                templateUrl: "views/aside.html",
                controller: 'MenuCtrl'
            },
            "header": {
                templateUrl: "views/header.html",
                controller: 'HeaderCtrl'
            }
        }
    })
    .state('template', {
        url: "/template",
        views: {
            "": {
                templateUrl: 'views/template.html',
                controller: 'TemplateCtrl'
            },
            "aside": {
                templateUrl: "views/aside.html",
                controller: 'MenuCtrl'
            },
            "header": {
                templateUrl: "views/header.html",
                controller: 'HeaderCtrl'
            }
        }
    })
    .state('setting', {
        url: "/setting",
        views: {
            "": {
                templateUrl: 'views/setting.html',
                controller: 'SettingCtrl'
            },
            "aside": {
                templateUrl: "views/aside.html",
                controller: 'MenuCtrl'
            },
            "header": {
                templateUrl: "views/header.html",
                controller: 'HeaderCtrl'
            }
        }
    })
    $urlRouterProvider.otherwise('/index');
  });