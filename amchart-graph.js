/**
 * Created by Nikhil Reddy on 19-09-2016.
 */


var app = angular.module('chartdiv', ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/details",{
            templateUrl : "in.html"
        })
        .when("/memory",{
            templateUrl : ""
        })
        .when("/graphs",{
            templateUrl : ""
        })
        .when("/pie",{
            templateUrl : ""
        });
});

app.run(function($rootScope) {
    $rootScope.hello = 'ROOT SCOPE';
    $rootScope.memory = function () {
        $rootScope.details1 = "root details";

    }
    $rootScope.details = function () {
        $rootScope.write = "HELLOOO";
    }
});


app.controller('chart', function ($scope) {
    $scope.value = "this is chart"

});


/*
var chartData = generateChartData();

function generateChartData() {
    var chartData = [];
    var num_month={"Jan":0,"Feb":1,"Mar":2,"Apr":3, "May":4,"Jun":5, "Jul":6,"Aug":7,"Sep":8,"Oct":9,"Nov":10,"Dec":11};
    var outData = [{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:04:43 2016","LOAD":0,"MEMORY_TOTAL":3084,"MEMORY":3086},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:03:20 2016","LOAD":0,"MEMORY_TOTAL":3023,"MEMORY":3024},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:03:14 2016","LOAD":1,"MEMORY_TOTAL":3033,"MEMORY":3032},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:49 2016","LOAD":1,"MEMORY_TOTAL":3029,"MEMORY":3029},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:40 2016","LOAD":0,"MEMORY_TOTAL":3026,"MEMORY":3027},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:31 2016","LOAD":0,"MEMORY_TOTAL":3056,"MEMORY":3057},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:15 2016","LOAD":0,"MEMORY_TOTAL":3091,"MEMORY":3091},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:02 2016","LOAD":1,"MEMORY_TOTAL":3149,"MEMORY":3149},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:01:47 2016","LOAD":0,"MEMORY_TOTAL":3264,"MEMORY":3265},{"NAME":"SRIHARSHA","DATE":"Sun Sep 18 16:43:33 2016","LOAD":1,"MEMORY_TOTAL":2803,"MEMORY":2804}];
        //$.getJSON("http://localhost:8080/view");
    //document.write(outData);

    //callEndpoint();
    //[{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:04:43 2016","LOAD":0,"MEMORY_TOTAL":3084,"MEMORY":3086},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:03:20 2016","LOAD":0,"MEMORY_TOTAL":3023,"MEMORY":3024},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:03:14 2016","LOAD":1,"MEMORY_TOTAL":3033,"MEMORY":3032},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:49 2016","LOAD":1,"MEMORY_TOTAL":3029,"MEMORY":3029},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:40 2016","LOAD":0,"MEMORY_TOTAL":3026,"MEMORY":3027},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:31 2016","LOAD":0,"MEMORY_TOTAL":3056,"MEMORY":3057},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:15 2016","LOAD":0,"MEMORY_TOTAL":3091,"MEMORY":3091},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:02:02 2016","LOAD":1,"MEMORY_TOTAL":3149,"MEMORY":3149},{"NAME":"SRIHARSHA","DATE":"Wed Sep 21 13:01:47 2016","LOAD":0,"MEMORY_TOTAL":3264,"MEMORY":3265},{"NAME":"SRIHARSHA","DATE":"Sun Sep 18 16:43:33 2016","LOAD":1,"MEMORY_TOTAL":2803,"MEMORY":2804}];

    var our_date_json= outData[1].DATE;
    //console.log(our_date_json);

    var our_date_split= our_date_json.split(" ");
    //console.log(parseInt(our_date_split[5]));
    var month=our_date_split[1];
    //console.log(num_month[month]);
    //console.log(parseInt(our_date_split[3]));
    var firstDate = new Date(parseInt(our_date_split[4]), num_month[month], parseInt(our_date_split[2]));
    //console.log(firstDate.getDate());

    //firstDate.setDate(firstDate.getDate() - 6);
    //console.log(firstDate.getDate());
    var our_time=our_date_split[3].split(":");
    firstDate.setHours(parseInt(our_time[0]), parseInt(our_time[1]), parseInt(our_time[2]));
    console.log(firstDate.getHours());

    for (var i = 0; i < outData.length; i++) {


        our_date_json= outData[i].DATE;
        //console.log(our_date_json);

        our_date_split= our_date_json.split(" ");

        our_time=our_date_split[3].split(":");
        console.log(our_time);
        var newDate = new Date(firstDate);
        newDate.setHours(parseInt(our_time[0]), parseInt(our_time[1]), parseInt(our_time[2]));

        //newDate.setHours(0, i, 0, 0);
        console.log(newDate);

        var a =outData[i].LOAD;
        var b = outData[i].MEMORY;
        var date_py=outData[i].DATE;

      //  console.log(date_py);

        chartData.push({
            date: newDate,
            value: a,
            volume: b
        });
    }
    return chartData;
}

var chart = AmCharts.makeChart("chartdiv", {

    type: "stock",
    "theme": "none",
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    categoryAxesSettings: {
        minPeriod: "mm"
    },

    dataSets: [{
        color: "#b0de09",
        fieldMappings: [{
            fromField: "value",
            toField: "value"
        }, {
            fromField: "volume",
            toField: "volume"
        }],

        dataProvider: chartData,
        categoryField: "date"
    }],


    panels: [{
    showCategoryAxis: false,
    title: "LLoad",
    percentHeight: 70,

    stockGraphs: [{
        id: "g1",
        valueField: "value",
        type: "smoothedLine",
        lineThickness: 2,
        bullet: "round"
    }],


    stockLegend: {
        valueTextRegular: " ",
        markerType: "none"
    }
},

    {
        title: "Memory",
        percentHeight: 70,
        stockGraphs: [{
            valueField: "volume",
            type: "smoothedLine",
            lineThickness: 2,
            bullet: "round"
        }],

        stockLegend: {
            valueTextRegular: " ",
            markerType: "none"
        }
    }
],

    chartScrollbarSettings: {
    graph: "g1",
        usePeriod: "10mm",
        position: "top"
},

chartCursorSettings: {
    valueBalloonsEnabled: true
},

periodSelector: {
    position: "top",
        dateFormat: "YYYY-MM-DD JJ:NN",
        inputFieldWidth: 150,
        periods: [{
        period: "hh",
        count: 1,
        label: "1 hour",
        selected: true

    }, {
        period: "hh",
        count: 2,
        label: "2 hours"
    }, {
        period: "hh",
        count: 5,
        label: "5 hour"
    }, {
        period: "hh",
        count: 12,
        label: "12 hours"
    }, {
        period: "MAX",
        label: "MAX"
    }]
},

panelsSettings: {
    usePrefixes: true
}
});
*/