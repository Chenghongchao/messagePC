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
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngTouch'
  ])
  .constant('AppConfig',{
     // WEB_ROOT:'http://120.55.84.193/Geese_Apartment/',
    //   WEB_ROOT:'http://test.houqinbao.com/gyxt_api/',
      schoolCode:0,
	  token:'',
      adminId:0,
      nodeIds:''
  })
  .run(['$rootScope', '$location', 'AppConfig',
		function($rootScope, $location, AppConfig) {
			$rootScope.$on('$stateChangeStart',
				function(event, toState, toParams, fromState, fromParams) {
                    
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
                templateUrl: 'views/menu.html'
            },
            "aside": {
                templateUrl: "views/aside.html"
            },
            "header": {
                templateUrl: "views/header.html",
                controller: 'HeaderCtrl'
            }
        }
    })
    $urlRouterProvider.otherwise('/index');
  });