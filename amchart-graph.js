/**
 * Created by Nikhil Reddy on 19-09-2016.
 */

//for routing
var app = angular.module('chartdiv', ['ngRoute', 'ng-fusioncharts']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/details",{
            templateUrl : "compDetails.html"
        })
        .when("/grp",{
            templateUrl : "memoryGraph.html"
        })
        .when("/graphs",{
            templateUrl : ""
        })
        .when("/pie",{
            templateUrl : "loadGraph.html"
        });
});

//declaring root scopes and methods called from initial navigation box
app.run(function($rootScope) {
    $rootScope.navshow = "false";
    // $rootScope.hello = 'Monitoring Server Metrics';
    $rootScope.memory = function () {
        $rootScope.details1 = "root details";

    }
    $rootScope.viewDetails = function () {
        $rootScope.navshow = "true";
        $rootScope.write = "Compleate Details";
        $rootScope.write1 = "Details of a Server";
    }

    $rootScope.viewGraph = function () {
        $rootScope.navshow = "true";
        $rootScope.write = "Load v/s Time";
        $rootScope.write1 = "Memory v/s Time";
        //$rootScope.write2 = "Pie chart of Memory";
    }

});

// controller for compDetails.html page
app.controller("detailsCtrl", function ($scope, $http) {

    $http.get("http://localhost:8080/view").then(function (response) {
        $scope.myData = response.data;
    });

});

//controller for loadGraph.html page
app.controller("MyController", function($scope, $http) {
    // chart data source

    $http.get("http://localhost:8080/view").then(function (response) {
        $scope.myData = response.data;
    });

    $scope.dataSource = {
        chart: {
            caption: "Server Metrics",
            subCaption: "System Load with respect to Time",
            xAxisName: "Time",
            yAxisName: "System Load",
            //numberPrefix: "$",
            theme: "ocean"
        },


        data:[]
    };

    $scope.updateMyChartData = function (x) {

        console.log($scope.myData);
        var x;
        for(x in $scope.myData) {
            $scope.dataSource.data.push({'label': $scope.myData[x].DATE, 'value': $scope.myData[x].LOAD});

        }

    };
});


//controller for memoryGraph.html page
app.controller("MemoryController", function($scope, $http) {
    // chart data source

    $http.get("http://localhost:8080/view").then(function (response) {
        $scope.myData = response.data;
    });

    $scope.dataSource = {
        chart: {
            caption: "Server Metrics",
            subCaption: "System Memory used with respect to Time",
            xAxisName: "Time",
            yAxisName: "System Memory", //memory used
            //numberPrefix: "$",
            theme: "ocean"
        },


        data:[]
    };

    $scope.updateMyChartData = function (x) {

        console.log($scope.myData);
        var x;
        for(x in $scope.myData) {
            $scope.dataSource.data.push({'label': $scope.myData[x].DATE, 'value': $scope.myData[x].MEMORY});

        }

    };
});





//
app.controller('chart', function ($scope) {
    $scope.value = "this is chart"

});


