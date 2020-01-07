var dynamic_values = [0, 0, 0, 0, 0, 0, 0, 0];
var power_sum = 0;
var load_sum = 0;
var table_index = [2, 3, 4, 5, 6, 7, 9, 10];
var price = 0;
var date = 0;
/**
 * In order to synchronize tooltips and crosshairs, override the
 * built-in events with handlers defined on the parent element.
 */
['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementsByClassName("box_left_top")[0].addEventListener(
        eventType,
        function (e) {
            var chart,
                point,
                i,
                event;
            var area_chart = Highcharts.charts[0];
            var pie_chart = Highcharts.charts[3];
            //console.log(Highcharts.charts);
            dynamic_values = [area_chart.series[0].searchPoint(e, true)['y'],
                area_chart.series[1].searchPoint(e, true)['y'],
                area_chart.series[2].searchPoint(e, true)['y'],
                area_chart.series[3].searchPoint(e, true)['y'],
                area_chart.series[4].searchPoint(e, true)['y'],
                area_chart.series[5].searchPoint(e, true)['y'],
                area_chart.series[6].searchPoint(e, true)['y'],
                area_chart.series[7].searchPoint(e, true)['y'],];
            date = Highcharts.dateFormat('%d %b, %I:%M %p', area_chart.series[0].searchPoint(e, true)['x']);
            power_sum = 0;
            load_sum = 0;
            for(i = 0; i < dynamic_values.length - 2; i++) {
                power_sum += dynamic_values[i];
            }
            for (i = 6; i < dynamic_values.length; i++) {
                load_sum += dynamic_values[i];
            }
            generate_table();
            if(Highcharts.charts[3]['userOptions']['chart']['type'] == 'pie'){
                Highcharts.charts[3].update({
                    title:{
                        text: '<b>' + Math.round(power_sum) + 'Mw' + '</b>',
                    }
                })
            }
            //console.log(pie_points[0]['y'])
            // if(!pie_points[0]['y']){
            //     pie_points[0] = {'y':0};
            // }
            for(i = 0; i < pie_chart.series[0].data.length; i++) {
                pie_chart.series[0].data[i].update(dynamic_values[i]);
            }


            for (i = 0; i < 3; i = i + 1) {
                chart = Highcharts.charts[i];
                // Find coordinates within the chart
                event = chart.pointer.normalize(e);
                // Get the hovered point
                if (i == 0) {
                    points = [chart.series[0].searchPoint(e, true),
                        chart.series[1].searchPoint(e, true),
                        chart.series[2].searchPoint(e, true),
                        chart.series[3].searchPoint(e, true),
                        chart.series[4].searchPoint(e, true),
                        chart.series[5].searchPoint(e, true),
                        chart.series[6].searchPoint(e, true),
                        chart.series[7].searchPoint(e, true),
                    ];

                    if (points[0] && points[1] && points[2] && points[3]
                        && points[4] && points[5] && points[6] && points[7]) {
                        // if (!points[0].series.visible) {
                        //     points.shift();
                        //     secSeriesIndex = 0;
                        // }
                        // if (!points[secSeriesIndex].series.visible) {
                        //     points.splice(secSeriesIndex, 1);
                        // }
                        if (points.length) {
                            // chart.tooltip.refresh(points); // Show the tooltip
                            chart.xAxis[0].drawCrosshair(e, points[0]); // Show the crosshair
                        }
                    }
                }
                else {
                    point = chart.series[0].searchPoint(event, true);
                    if(i == 1) {
                        price = point.y;
                    }
                    if (point) {
                        point.highlight(e);
                    }
                }
            }
        }
    );
});

['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementsByClassName("box_left_bottom_container up")[0].addEventListener(
        eventType,
        function (e) {
            var chart,
                point,
                i,
                event;
            var area_chart = Highcharts.charts[0];
            var pie_chart = Highcharts.charts[3];
            //console.log(Highcharts.charts);
            dynamic_values = [area_chart.series[0].searchPoint(e, true)['y'],
                area_chart.series[1].searchPoint(e, true)['y'],
                area_chart.series[2].searchPoint(e, true)['y'],
                area_chart.series[3].searchPoint(e, true)['y'],
                area_chart.series[4].searchPoint(e, true)['y'],
                area_chart.series[5].searchPoint(e, true)['y'],
                area_chart.series[6].searchPoint(e, true)['y'],
                area_chart.series[7].searchPoint(e, true)['y'],];
            power_sum = 0;
            load_sum = 0;
            date = Highcharts.dateFormat('%d %b, %I:%M %p', area_chart.series[0].searchPoint(e, true)['x']);
            for(i = 0; i < dynamic_values.length - 2; i++) {
                power_sum += dynamic_values[i];
            }
            for (i = 6; i < dynamic_values.length; i++) {
                load_sum += dynamic_values[i];
            }
            for(i = 0; i < pie_chart.series[0].data.length; i++) {
                pie_chart.series[0].data[i].update(dynamic_values[i]);
            }
            if(Highcharts.charts[3]['userOptions']['chart']['type'] == 'pie'){
                Highcharts.charts[3].update({
                    title:{
                        text: "<b>" + Math.round(power_sum) + 'Mw' + "</b>",
                    }
                })
            }
            generate_table();


            for (i = 0; i < 3; i = i + 1) {
                chart = Highcharts.charts[i];
                // Find coordinates within the chart
                event = chart.pointer.normalize(e);
                // Get the hovered point
                if (i == 0) {
                    points = [chart.series[0].searchPoint(e, true),
                        chart.series[1].searchPoint(e, true),
                        chart.series[2].searchPoint(e, true),
                        chart.series[3].searchPoint(e, true),
                        chart.series[4].searchPoint(e, true),
                        chart.series[5].searchPoint(e, true),
                        chart.series[6].searchPoint(e, true),
                        chart.series[7].searchPoint(e, true),
                    ];

                    if (points[0] && points[1] && points[2] && points[3]
                        && points[4] && points[5] && points[6] && points[7]) {
                        // if (!points[0].series.visible) {
                        //     points.shift();
                        //     secSeriesIndex = 0;
                        // }
                        // if (!points[secSeriesIndex].series.visible) {
                        //     points.splice(secSeriesIndex, 1);
                        // }
                        if (points.length) {
                            chart.tooltip.refresh(points[0]); // Show the tooltip
                            chart.xAxis[0].drawCrosshair(e, points[0]); // Show the crosshair
                        }
                    }
                }
                else {
                    point = chart.series[0].searchPoint(event, true);

                    if (point) {
                        point.highlight(e);
                    }
                }
            }
        }
    );
});

['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementsByClassName("box_left_bottom_container down")[0].addEventListener(
        eventType,
        function (e) {
            var chart,
                point,
                i,
                event;
            var area_chart = Highcharts.charts[0];
            var pie_chart = Highcharts.charts[3];
            //console.log(Highcharts.charts);
            dynamic_values = [area_chart.series[0].searchPoint(e, true)['y'],
                area_chart.series[1].searchPoint(e, true)['y'],
                area_chart.series[2].searchPoint(e, true)['y'],
                area_chart.series[3].searchPoint(e, true)['y'],
                area_chart.series[4].searchPoint(e, true)['y'],
                area_chart.series[5].searchPoint(e, true)['y'],
                area_chart.series[6].searchPoint(e, true)['y'],
                area_chart.series[7].searchPoint(e, true)['y'],];
            power_sum = 0;
            load_sum = 0;
            date = Highcharts.dateFormat('%d %b, %I:%M %p', area_chart.series[0].searchPoint(e, true)['x']);
            for(i = 0; i < dynamic_values.length - 2; i++) {
                power_sum += dynamic_values[i];
            }
            for (i = 6; i < dynamic_values.length; i++) {
                load_sum += dynamic_values[i];
            }
            for(i = 0; i < pie_chart.series[0].data.length; i++) {
                pie_chart.series[0].data[i].update(dynamic_values[i]);
            }
            if(Highcharts.charts[3]['userOptions']['chart']['type'] == 'pie'){
                Highcharts.charts[3].update({
                    title:{
                        text: "<b>" + Math.round(power_sum) + 'Mw' + "</b>",
                    }
                })
            }
            generate_table();


            for (i = 0; i < 3; i = i + 1) {
                chart = Highcharts.charts[i];
                // Find coordinates within the chart
                event = chart.pointer.normalize(e);
                // Get the hovered point
                if (i == 0) {
                    points = [chart.series[0].searchPoint(e, true),
                        chart.series[1].searchPoint(e, true),
                        chart.series[2].searchPoint(e, true),
                        chart.series[3].searchPoint(e, true),
                        chart.series[4].searchPoint(e, true),
                        chart.series[5].searchPoint(e, true),
                        chart.series[6].searchPoint(e, true),
                        chart.series[7].searchPoint(e, true),
                    ];

                    if (points[0] && points[1] && points[2] && points[3]
                        && points[4] && points[5] && points[6] && points[7]) {
                        // if (!points[0].series.visible) {
                        //     points.shift();
                        //     secSeriesIndex = 0;
                        // }
                        // if (!points[secSeriesIndex].series.visible) {
                        //     points.splice(secSeriesIndex, 1);
                        // }
                        if (points.length) {
                            //console.log(points);
                            chart.tooltip.refresh(points[0]); // Show the tooltip
                            chart.xAxis[0].drawCrosshair(e, points[0]); // Show the crosshair
                        }
                    }
                }
                else {
                    point = chart.series[0].searchPoint(event, true);

                    if (point) {
                        point.highlight(e);
                    }
                }
            }
        }
    );
});

/**
 * Override the reset function, we don't need to hide the tooltips and
 * crosshairs.
 */
Highcharts.Pointer.prototype.reset = function () {
    return undefined;
};

/**
 * Highlight a point by showing tooltip, setting hover state and draw crosshair
 */
Highcharts.Point.prototype.highlight = function (event) {
    event = this.series.chart.pointer.normalize(event);
    this.onMouseOver(); // Show the hover marker
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};

/**
 * Synchronize zooming through the setExtremes event handler.
 */
function syncExtremes(e) {
    var thisChart = this.chart;

    if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(
                        e.min,
                        e.max,
                        undefined,
                        false,
                        { trigger: 'syncExtremes' }
                    );
                }
            }
        });
    }
}


var temp_config = {
    chart:{
        backgroundColor: '#ece9e6'
    },
    title: {
        text: null,
        align: 'left'
    },
    //
    subtitle: {
        // color:rgba(200, 200, 200, 1)
        text: "Temperature <span style='color:rgba(130, 130, 130, 0.8); font-size: 14px'> ℉ </span>",
        align: 'left'
    },

    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%a %d %b', this.value);
            },
            enabled: true,
        },
        gridLineWidth: 1,
        gridLineDashStyle: 'longdash',
        events: {
            setExtremes: syncExtremes
        },
        crosshair: true,
    },

    yAxis: {
        title: {
            // text: 'Number of Employees'
            text: null
        },
        min: 0,
        max: 100,
        tickInterval: 20,
        gridLineDashStyle: 'longdash',
    },
    legend: {
        // layout: 'vertical',
        // align: 'right',
        // verticalAlign: 'middle',
        enabled: false
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },


    series: [{
        name: 'Installation',
        // step: true,
        // data: [58,
        //     57,
        //     57,
        //     56,
        //     56,
        //     55,
        //     55,
        //     55,
        //     54,
        //     54,
        //     54,
        //     54,
        //     55,
        //     56,
        //     59,
        //     60,
        //     61,
        //     65,
        //     67,
        //     69,
        //     70,
        //     72,
        //     72,
        //     71,
        //     71,
        //     72,
        //     72,
        //     69,
        //     71,
        //     69,
        //     70,
        //     69,
        //     69,
        //     68,
        //     68,
        //     67,
        //     66,
        //     66,
        //     65,
        //     65,
        //     65,
        //     65,
        //     64,
        //     64,
        //     64,
        //     63,
        //     62,
        //     60,
        //     60,
        //     59,
        //     58,
        //     58,
        //     58,
        //     57,
        //     57,
        //     57,
        //     56,
        //     56,
        //     56,
        //     56,
        //     57,
        //     59,
        //     60,
        //     61,
        //     64,
        //     67,
        //     69,
        //     72,
        //     73,
        //     73,
        //     74,
        //     73,
        //     73,
        //     74,
        //     72,
        //     72,
        //     73,
        //     70,
        //     71,
        //     70,
        //     70,
        //     69,
        //     68,
        //     68,
        //     67,
        //     67,
        //     67,
        //     67,
        //     67,
        //     66,
        //     66,
        //     66,
        //     66,
        //     66,
        //     66,
        //     65,
        //     65,
        //     65,
        //     65,
        //     65,
        //     65,
        //     64,
        //     62,
        //     62,
        //     61,
        //     61,
        //     61,
        //     60,
        //     61,
        //     62,
        //     64,
        //     68,
        //     70,
        //     69,
        //     74,
        //     74,
        //     74,
        //     74,
        //     75,
        //     75,
        //     74,
        //     74,
        //     74,
        //     73,
        //     73,
        //     74,
        //     73,
        //     73,
        //     73,
        //     73,
        //     71,
        //     70,
        //     69,
        //     69,
        //     69,
        //     69,
        //     69,
        //     68,
        //     68,
        //     67,
        //     69,
        //     68,
        //     67,
        //     67,
        //     66,
        //     66,
        //     66,
        //     66,
        //     66,
        //     66,
        //     66,
        //     65,
        //     65,
        //     65,
        //     65,
        //     65,
        //     66,
        //     67,
        //     69,
        //     70,
        //     72,
        //     74,
        //     74,
        //     78,
        //     76,
        //     78,
        //     77,
        //     78,
        //     77,
        //     76,
        //     75,
        //     75,
        //     76,
        //     78,
        //     74,
        //     72,
        //     74,
        //     73,
        //     72,
        //     73,
        //     73,
        //     73,
        //     72,
        //     70,
        //     69,
        //     69,
        //     68,
        //     68,
        //     68,
        //     68,
        //     67,
        //     67,
        //     67,
        //     66,
        //     66,
        //     65,
        //     65,
        //     65,
        //     64,
        //     65,
        //     64,
        //     64,
        //     67,
        //     67,
        //     69,
        //     73,
        //     76,
        //     78,
        //     82,
        //     84,
        //     86,
        //     87,
        //     89,
        //     91,
        //     92,
        //     93,
        //     95,
        //     96,
        //     95,
        //     97,
        //     97,
        //     91,
        //     83,
        //     82,
        //     79,
        //     78,
        //     78,
        //     83,
        //     82,
        //     80,
        //     77,
        //     80,
        //     80,
        //     79,
        //     78,
        //     77,
        //     78,
        //     78,
        //     78,
        //     80,
        //     79,
        //     81,
        //     80,
        //     80,
        //     79,
        //     80,
        //     78,
        //     78,
        //     74,
        //     74,
        //     74,
        //     74,
        //     74,
        //     74,
        //     77,
        //     77,
        //     81,
        //     81,
        //     80,
        //     84,
        //     85,
        //     85,
        //     85,
        //     87,
        //     88,
        //     88,
        //     86,
        //     87,
        //     88,
        //     87,
        //     86,
        //     84,
        //     82,
        //     80,
        //     79,
        //     77,
        //     75,
        //     74,
        //     73,
        //     73,
        //     72,
        //     71,
        //     70,
        //     69,
        //     68,
        //     68,
        //     67,
        //     67,
        //     67,
        //     66,
        //     65,
        //     65,
        //     64,
        //     63,
        //     63,
        //     62,
        //     62,
        //     61,
        //     61,
        //     61,
        //     62,
        //     63,
        //     64,
        //     65,
        //     67,
        //     68,
        //     69,
        //     71,
        //     72,
        //     71,
        //     70,
        //     70,
        //     70,
        //     71,
        //     69,
        //     70,
        //     70,
        //     69,
        //     69,
        //     69,
        //     68,
        //     67,
        //     66,
        //     66,
        //     66,
        //     65,
        //     65,
        //     66,
        //     65,
        //     65,
        //     65,
        //     64,
        //     63,
        //     62,
        //     62,
        //     61],
        pointStart: 1571580000 * 1000,
        pointInterval: 30 * 60 * 1000,
        color:'#9d2a3b',
        tooltip: {
            valueSuffix: ' ' + '℉'
        }
    }],


    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },

    tooltip: {
        positioner: function () {
            return {
                // right aligned
                x: this.chart.chartWidth - this.label.width,
                y: 10 // align to title
            };
        },
        borderWidth: 0,
        backgroundColor: 'none',
        pointFormat: '{point.y}',
        headerFormat: '',
        shadow: false,
        style: {
            fontSize: '16px'
        },
    },
}

var area_config= {
    chart: {
        type: 'areaspline',
        backgroundColor: '#ece9e6',
    },
    title: {
        text: null,
        align: 'left'
    },
    subtitle: {
        // color:rgba(200, 200, 200, 1)
        text: "Generation <span style='color:rgba(130, 130, 130, 0.8); font-size: 14px'> MW </span>",
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%a %d %b', this.value);
            },
            enabled: true,
        },
        gridLineWidth: 1,
        gridLineDashStyle: 'longdash',
        events: {
            setExtremes: syncExtremes
        },
        crosshair:true,
    },
    yAxis: {
        title: {
            // text: 'Number of Employees'
            text: null
        },
        min: -1000,
        max: 9000,
        tickInterval: 1000,
        gridLineDashStyle: 'longdash',
    },
    legend: {
        // layout: 'vertical',
        // align: 'right',
        // verticalAlign: 'middle',
        enabled: false
    },
    series:[
        {
            name: "Rooftop Solor",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data:[],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:'#F8E71C',
        },
        {
            name: "Wind",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data: [],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:'#437607',
        },
        {
            name: "Hydro",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data:[],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:"#4582B4",
        },
        {
            name: "Gas CCGT",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data:[],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:"#FDB462",
        },
        {
            name: "Distillate",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data:[],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:"#F35020",
        },
        {
            name: "Black Coal",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data:[],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:"#121212",
        },
        {
            name: "Exports",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data:[],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:"#977AB1",
        },
        {
            name: "Pump",
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            data:[],
            tooltip: {
                valueSuffix: ' ' + 'MW'
            },
            color:"#88AFD0",
        },
    ],
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        },
        series:{
            stacking: "normal",
            states:{
                inactive:{
                    opacity:1
                }
            }
        }
    },
    tooltip: {
        shared: false,
        positioner: function () {
            return {
                // right aligned
                x: this.chart.chartWidth - this.label.width,
                y: 10 // align to title
            };
        },
        borderWidth: 0,
        backgroundColor: 'none',
        formatter: function() {
            var date_time = Highcharts.dateFormat('%d %b, %I:%M:%S %p', this.x);
            console.log();
            return date_time + '|' + this.series['userOptions']['name'] + ": "+ '<b>' + this.y + 'Mw '+ '</b>' + '| Total:' + '<b>' + Math.round(power_sum) + 'Mw' + '</b>';
        },
        headerFormat: '',
        shadow: false,
        style: {
            fontSize: '14px'
        },
    },
}

var price_config = {
    chart:{
        backgroundColor: '#ece9e6'
    },
    title: {
        text: null,
        align: 'left'
    },
    subtitle: {
        // color:rgba(200, 200, 200, 1)
        text: "Price <span style='color:rgba(130, 130, 130, 0.8); font-size: 14px'> $/MWh </span>",
        align: 'left'
    },
    yAxis: {
        title: {
            // text: 'Number of Employees'
            text: null
        },
        // type:"logarithmic",
        min: -100,
        max: 400,
        tickInterval: 100,
        gridLineDashStyle: 'longdash',
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%a %d %b', this.value);
            },
            enabled: true,
        },
        gridLineWidth: 1,
        gridLineDashStyle: 'longdash',
        events: {
            setExtremes: syncExtremes
        },
        crosshair: true,
    },
    series:[
        {
            name:'price',
            step: true,
            data: [],
            pointStart: 1571580000 * 1000,
            pointInterval: 30 * 60 * 1000,
            color:'#9d2a3b',
            tooltip: {
                valueSuffix: ' ' + '$'
            }
        }
    ],
    tooltip: {
        positioner: function () {
            return {
                // right aligned
                x: this.chart.chartWidth - this.label.width,
                y: 10 // align to title
            };
        },
        borderWidth: 0,
        backgroundColor: 'none',
        pointFormat: '{point.y}',
        headerFormat: '',
        shadow: false,
        style: {
            fontSize: '16px'
        },
    },
}

var pie_config = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#ece9e6'
    },
    title: {
        text: '<b>' + 0 + 'Mw' + '</b>',
        align: 'center',
        verticalAlign: 'middle',
        font:"Georgia"
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        innerSize: '50%',
        colorByPoint: true,
        data: [{
            name: 'solar',
            y: dynamic_values[0],
            color:'#F8E71C',
        }, {
            name: 'wind',
            y: dynamic_values[1],
            color:'#437607',
        }, {
            name: 'hydro',
            y: dynamic_values[2],
            color:"#4582B4",
        }, {
            name: 'gas',
            y: dynamic_values[3],
            color:"#FDB462"
        }, {
            name: 'distillate',
            y: dynamic_values[4],
            color:"#F35020",
        }, {
            name: 'black goal',
            y: dynamic_values[5],
            color:"#121212",
        }, ]
    }]
};

Highcharts.ajax({
    url: 'assets/springfield.json',
    type: 'GET',
    success: function (data) {
        for(i = 0; i < data.length; i++) {
            console.log(i + ', ' + data[i]['id']);
        }
        console.log(data[0]['history']['data']);
        var coal_data = data[0]['history']['data'];
        var distillate_data = data[1]['history']['data'];
        var gas_data = data[2]['history']['data'];
        var hydro_data = data[3]['history']['data'];
        var pumps_data = get_negative_list(data[4]['history']['data']);
        var wind_data = data[5]['history']['data'];
        var exports_data = get_negative_list(data[6]['history']['data']);
        var solar_data = data[7]['history']['data'];
        var price_data = data[8]['history']['data'];
        var temp_data = data[10]['history']['data'];
        //get data for area chart
        var source_type_data = [solar_data, wind_data, hydro_data, gas_data, distillate_data, coal_data, exports_data, pumps_data];
        var area_config_series = area_config['series'];
        for(i = 0; i < source_type_data.length; i++){
            area_config_series[i]['data'] = source_type_data[i];
        }
        price_config['series'][0]['data'] = price_data;
        temp_config['series'][0]['data'] = temp_data;

        console.log(temp_config);
        Highcharts.chart(
            document.getElementsByClassName("box_left_top")[0],
            area_config);

        Highcharts.chart(
            document.getElementsByClassName("box_left_bottom_container up")[0],
            price_config);

        Highcharts.chart(
            document.getElementsByClassName("box_left_bottom_container down")[0],
            temp_config);

        Highcharts.chart(
            document.getElementsByClassName("box_right_bot")[0],
            pie_config);
    }

});


function generate_table(){
    //console.log(document.getElementById("legend_table").rows[0].cells[0]);
    var table = document.getElementById("legend_table");
    for(i = 0; i < table_index.length; i++) {
        var usage_cell = table.rows[table_index[i]].cells[1];
        var prop_cell = table.rows[table_index[i]].cells[2];
        var usage = dynamic_values[i];
        var prop = Math.round(1000000*(usage / power_sum)) / 10000 + '%';
        if(usage == 0){
            usage = '-';
        }
        if(prop == '0%'){
            prop = '-';
        }
        usage_cell.innerHTML = usage;
        prop_cell.innerHTML = prop;
    };
    var caption = table.caption;
    var total_cell = table.rows[1].cells[1];
    var price_cell = table.rows[1].cells[3];
    var loads_cell = table.rows[8].cells[1];
    // var date_cell = table.rows[0].cells[3];
    var net_cell = table.rows[11].cells[1];
    var renewable_cell = table.rows[12].cells[2];
    caption.innerHTML = date;
    total_cell.innerHTML = Math.round(power_sum);
    price_cell.innerHTML = price;
    loads_cell.innerHTML = load_sum;
    // date_cell.innerHTML = date;
    net_cell.innerHTML = Math.round(power_sum + load_sum);
    var renewable_prop = [table.rows[2].cells[2].innerHTML.replace('%',''),
        table.rows[3].cells[2].innerHTML.replace('%',''),
        table.rows[4].cells[2].innerHTML.replace('%','')];
    for (i = 0; i < renewable_prop.length; i++) {
        if(Number(renewable_prop[i])){
            renewable_prop[i] = Number(renewable_prop[i]);
        }
        else {
            renewable_prop[i] = 0;
        }
    }
    var renewable_total = 0;
    for (i = 0; i < renewable_prop.length; i++) {
        renewable_total += renewable_prop[i];
    }
    ;
    renewable_cell.innerHTML = Math.round(1000 * renewable_total) / 1000 + '%';
}

function get_negative_list(list){
    var result = [];
    for (i = 0; i < list.length; i++){
        result.push(-1 * list[i]);
    }
    return result;
}

$('#pie').click(function () {
    Highcharts.charts[3].update({
        chart: {
            type: 'pie',
        },
        title:{
            text: Math.round(power_sum) + 'Mw',
        }
    });
});

$('#bar').click(function () {
    Highcharts.charts[3].update({
        chart: {
            type: 'bar',
        },
        title:{
            text: null,
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        // console.log(this.y);
                        // console.log(sum);
                        return Math.round(1000000*(this.y / power_sum)) / 10000 + '%';
                    },
                }
            }
        },
        xAxis: {
            categories: ['Solar', 'Wind', 'Hydro', 'Gas', 'Distillate', 'Black Coal'],
        },
        yAxis: {
            title: {
                // text: 'Number of Employees'
                text: null
            },
            labels: {
                enabled: false,
            },
        },
        legend: {
            enabled: false
        },
        exporting:{
            showTable: true,
        }
    });
});