/**
 * Created by Nikhil Reddy on 20-09-2016.
 */
/**
 * Created by Nikhil Reddy on 19-09-2016.
 */


/*              <!--
 var chartData = generateChartData();

 function generateChartData() {
 var outData = [{"NAME":"DELL-PC","DATE":"Tue Sep  6 11:06:38 2016","LOAD":6,"MEMORY_TOTAL":0,"MEMORY":4948},{"NAME":"DELL-PC","DATE":"Tue Sep  6 11:04:52 2016","LOAD":5,"MEMORY_TOTAL":0,"MEMORY":5137},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:18:21 2016","LOAD":0,"MEMORY_TOTAL":8094,"MEMORY":3318},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:18:05 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3330}];
 var chartData = [];


 for (var i = 0; i < outData.length; i++) {

 var load = 6;
 var mem = outData[i].MEMORY;

 chartData.push({

 value: load
 //document.write(6);
 });
 }


 return chartData;
 }
 */
var chartData = generateChartData();

function generateChartData() {
    var chartData = [];
    var outData = [{"NAME":"DELL-PC","DATE":"Tue Sep  6 11:06:38 2016","LOAD":6,"MEMORY_TOTAL":0,"MEMORY":4948},{"NAME":"DELL-PC","DATE":"Tue Sep  6 11:04:52 2016","LOAD":5,"MEMORY_TOTAL":0,"MEMORY":5137},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:18:21 2016","LOAD":0,"MEMORY_TOTAL":8094,"MEMORY":3318},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:18:05 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3330},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:17:48 2016","LOAD":0,"MEMORY_TOTAL":8094,"MEMORY":3332},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:15:58 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3342},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:15:45 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3345},{"NAME":"DELL-PC","DATE":"Fri Sep 16 12:15:37 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3339},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:43:51 2016","LOAD":0,"MEMORY_TOTAL":8094,"MEMORY":3542},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:43:43 2016","LOAD":0,"MEMORY_TOTAL":8094,"MEMORY":3552},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:33:44 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3386},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:33:38 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3392},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:33:29 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3402},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:33:21 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3412},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:33:14 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3421},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:33:08 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3428},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:33:02 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3433},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:32:55 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3436},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:29:24 2016","LOAD":3,"MEMORY_TOTAL":8094,"MEMORY":3194},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:28:49 2016","LOAD":2,"MEMORY_TOTAL":8094,"MEMORY":3216},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:27:53 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3235},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:27:24 2016","LOAD":0,"MEMORY_TOTAL":8094,"MEMORY":3075},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:14:41 2016","LOAD":1,"MEMORY_TOTAL":8094,"MEMORY":3479},{"NAME":"DELL-PC","DATE":"Fri Sep 16 11:03:51 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4062},{"NAME":"DELL-PC","DATE":"Fri Sep 16 10:08:01 2016","LOAD":2,"MEMORY_TOTAL":0,"MEMORY":3913},{"NAME":"DELL-PC","DATE":"Fri Sep 16 10:01:05 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4383},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:51:49 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4145},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:42:20 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4743},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:42:13 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4745},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:40:56 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4616},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:40:50 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4611},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:37:27 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4809},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:21:05 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4831},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:19:34 2016","LOAD":1,"MEMORY_TOTAL":0,"MEMORY":4808},{"NAME":"DELL-PC","DATE":"Fri Sep 16 09:18:34 2016","LOAD":0,"MEMORY_TOTAL":0,"MEMORY":4692}];

    var firstDate = new Date(2012, 0, 1);
    firstDate.setDate(firstDate.getDate() - 1000);
    firstDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < outData.length; i++) {
        var newDate = new Date(firstDate);
        newDate.setHours(0, i, 0, 0);

        var a =outData[i].LOAD;
        var b = outData[i].MEMORY;

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
            title: "Volume",
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