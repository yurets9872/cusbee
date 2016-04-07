"use strict";
var cus = angular.module('cus', ['ngRoute']);
cus.config(['$routeProvider','$locationProvider', function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .when('/contact',{
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        })
        .when('/work',{
            templateUrl: 'views/work.html',
            controller: 'workCtrl'
        })
        .when('/service',{
            templateUrl: 'views/service.html',
            controller: 'serviceCtrl'
        })
        .when('/about',{
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .when('/blog',{
            templateUrl: 'views/blog.html',
            controller: 'blogCtrl'
        })
        .when('/possibilities', {
            templateUrl: 'views/possibilities.html',
            controller: 'possibilitiesCtrl'
        })
        .when('/advice',{
            templateUrl: 'views/advice.html',
            controller: 'adviceCtrl'
        })
        .when('/hardware',{
            templateUrl: 'views/hardware.html',
            controller: 'hardwareCtrl'
        })
        .when('/technologies',{
            templateUrl: 'views/technologies.html',
            controller: 'technologiesCtrl'
        })
        .when('/careers',{
            templateUrl: 'views/careers.html',
            controller: 'careersCtrl'
        })
        .otherwise({
            redirect: '/'
        });
}]);

cus.directive('accordion', function(){
    return{
        restrict: 'ACE',
        link: function(scope, element, attributes){
            var ele = angular.element(element);
            ele.bind('click',function(){

                ele.toggleClass('active');
                ele.next('.content').stop().slideToggle();
                ele.parents('li').siblings().find('span').removeClass('active');
                ele.parents('li').siblings().find('.content').slideUp();
                ele.parents('li').siblings().removeClass('accordion-background');
                return false;
            });
        }
    }
});
// ele.parent().addClass('accordion-background');

cus.controller('mainCtrl', function ($scope){
    $scope.slider = false;

});
cus.controller('homeCtrl', function($scope){

});
cus.controller('blogCtrl', function($scope,$rootScope){
    $scope.page = {
        title: "BLOG"
    };
    $rootScope.bodyCss = true;
});
cus.controller('possibilitiesCtrl', function ($scope,$rootScope) {
    $scope.page = {
        title: "Blog"
    };
     $rootScope.bodyCss = true;
});
cus.controller('adviceCtrl',function ($scope,$rootScope) {
    $scope.page = {
        title: 'Blog'
    };
     $rootScope.bodyCss = true;
});
cus.controller('hardwareCtrl',function ($scope,$rootScope) {
    $scope.page = {
        title: 'Blog'
    };
     $rootScope.bodyCss = true;
});
cus.controller('careersCtrl', function($scope,$rootScope){
    $scope.page = {
        title: "Careers"
    };
    $rootScope.bodyCss = false;

});
cus.controller('technologiesCtrl', function($scope,$rootScope){
    $scope.page = {
        title: "technologies"
    };
    $rootScope.bodyCss = true;
    var elem = $('<link/>',{
            rel:"stylesheet",href: 'css/technologies/style.css'
        }),
        elem2 =  $('<script/>',{
            src: 'js/technologies/modernizr.js'
        }),
        elem3 =  $('<script/>',{
            src: 'js/technologies/main.js'
        });

    $('ng-view').append(elem).append(elem2).append(elem3);

    function myF() {
        if ((self.innerWidth || document.documentElement.clientWidth ||document.body.clientWidth)<=760){
            $rootScope.bodyCss = true;
        }else{
            $rootScope.bodyCss = false;
        }
    }
      myF();

});
cus.controller('aboutCtrl', function($scope,$rootScope){

    var elem = $('<link/>',{
            rel:"stylesheet",href: 'css/about/style.css'
        }),
        elem2 = $('<link/>',{
            rel:"stylesheet",href: 'css/about/onepage-scroll.css'
        }),
        elem3 = $('<script/>',{
            src: 'js/about/jquery.onepage-scroll.js'
        }),
        elem4 = $('<script/>',{
            src: 'js/about/jquery.spincrement.js'
        });
    $('ng-view').append(elem).append(elem2).append(elem3).append(elem4);

    $scope.page = {
        title: "ABOUT US"
    };
    $rootScope.bodyCss = false;

        paralaxOn();

        $(".main").onepage_scroll({
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1000,
            pagination: true,
            updateURL: false,
            keyboard: true,
            beforeMove: null,
            afterMove: null,
            loop: true,
            responsiveFallback: false,
            direction : 'vertical'
        });

});
cus.controller('workCtrl', function($scope,$rootScope){
    
        $scope.dataLoaded = false;


    var elem = $('<link/>',{
            rel:"stylesheet",href: 'css/loaders.css'
        }),
        elem2 = $('<script/>',{
            src: 'js/slaider/main-min.js'
        }),
        elem3 = $('<script/>',{
            src: 'js/slaider/sly.js'
        }),
        elem4 = $('<script/>',{
            src: 'js/slaider/modernizr.js'
        });

    $('ng-view').append(elem).append(elem2).append(elem3).append(elem4);



    sliderload();

    $scope.page = {
        title: "WE CREATE"
    };
    $rootScope.bodyCss = false;

    $scope.dataLoaded = true;
    
});
cus.controller('serviceCtrl', function($scope){
    var elem = $('<script/>',{
            src: 'js/service/main-min.js'
        });

    $('ng-view').append(elem);

    serviceLoad();
    $scope.page = {
        title: "OUR EXPERTICE"
    };
});
cus.controller('contactCtrl', function($scope){
    var map = $('<script/>',{
            src: 'http://maps.google.com/maps/api/js?sensor=false'
        });
    $('ng-view').append(map);

    function func() {
        initialize();
    }
    setTimeout(func, 1000);

    $scope.showMap = true;
    $scope.page = {
        title: "GET CONECTED"
    };
});

function initialize() {
    var latlng = new google.maps.LatLng(48.285792,25.940233);
    var settings = {
        zoom: 18,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),settings);
    var companyPos = new google.maps.LatLng(48.28581699892921, 25.94012792096643);
    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        title:"Some title"
    });
}