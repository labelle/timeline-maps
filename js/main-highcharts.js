// HIGHCHARTS 


$(function() {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    })
});


$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#pie-chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Equities (All)'
            },
            subtitle: {
            text: 'A look at changes in equities'
                },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top',
                borderWidth: 0,
                x: 0,
                y: 70,
                itemMarginBottom: 30,
            },
            series: [{
                name: 'Equities',
                colorByPoint: true,
                data: [{
                    color: 'rgba(0,0,0,1)',
                    name: 'Unchanged',
                    y: 48
                }, {
                    color: 'rgba(220,220,220,1)',
                    name: 'Decreased',
                    y: 40
                }, {
                    color: 'rgba(191,217,22,1)',
                    name: 'Increase',
                    y: 12
                }]
            }]
        });
    });
});




$(function () {
    $('#vertical-bar').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Price to Sales Ratio'
        },
        subtitle: {
            text: 'Revenue-weighted S&P 500 Index sectors (1972-2014)'
        },
        xAxis: {
            categories: [
                'Cons Disc',
                'Cons Staples',
                'Energy',
                'Financials',
                'HC',
                'Industrials',
                'Tech',
                'Materials',
                'Telecom',
                'Utilities'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Price to Sales Ratio'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0;">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            backgroundColor: "rgba(255,255,255,1)"
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 1
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 0,
            x: 0,
            y: 70,
            itemMarginBottom: 30,
        },
        series: [{
            pointWidth: 45,
            color: 'rgba(191,217,22,1)',
            name: 'Average Revenue-Weighted',
            data: [0.47, 0.59, 0.71, 1.23, 0.48, 1.03, 1.48, 0.85, 1.45, 1.01]

        }, {
            pointWidth: 36,
            color: 'rgba(0,0,0,1)',
            name: 'Average Market Capitalization-Weighted',
            data: [1.03, 1.12, 1.10, 2.07, 1.79, 1.27, 2.60, 1.14, 1.54, 1.14]

        }]
    });
});



$(function () {
    $('#horizontal-bar').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Annualized Performance'
        },
        subtitle: {
            text: 'Revenue-wighted vs. market capitalization-weighted sectors (1972-2014)'
        },
        xAxis: {
            categories: ['Utilities', 'Telecom', 'Info Tech', 'Financials', 'Health Care', "Cons Staples", "Cons Disc", "Industrials", "Materials", "Energy"],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'justify'
            },
            title: {
                text: null
            }
        },
        // tooltip: {
        //     valueSuffix: '%'
        // },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 0,
            x: 0,
            y: 70,
            itemMarginBottom: 30,
        },
        credits: {
            enabled: false
        },
        series: [{
            pointWidth: 10,
            color: 'rgba(191,217,22,1)',
            name: 'Revenue-Weighted',
            data: [10, 10, 8.5, 8, 11.6, 12.5, 10.2, 9.7, 9.3, 12]
        }, {
            pointWidth: 10,
            color: 'rgba(0,0,0,1)',
            name: 'Market Capitalization-Weighted',
            data: [10.4, 11.1, 9.5, 10.8, 13.4, 13.4, 10.5, 11.5, 10.6, 14.2]
        }]
    });
});




$(function () {
    $('#stacked-bar').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Revenue-Weighted Performance'
        },
        subtitle: {
            text: 'Percent of time Revenue-Weighted S&P 500 Index outperformance S&P 500 Index Net of Fees (1972-2014)'
        },
        xAxis: {
            categories: ['5 Year', '10 Year', '15 Year']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>',
            shared: true,
            backgroundColor: "rgba(255,255,255,1)"
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 0,
            x: 0,
            y: 70,
            itemMarginBottom: 30,
        },
        series: [{
            color: 'rgba(0,0,0,1)',
            name: 'S&P 500',
            data: [15, 7, 5]
        }, {
            color: 'rgba(191,217,22,1)',
            name: 'Revenue-Weighted',
            data: [85, 93, 95]
        }]
    });
});


$(function () {


    $.getJSON("../json/line-chart.json", function(json) {

        $('#line-chart').highcharts({
            title: {
                text: 'Revenue Weighted S&P 500 Index outperforms S&P 500 Index',
                x: -20 //center
            },
            subtitle: {
                text: 'Revenue-Weighted S&P 500 Index outperformed S&P 500 Index over the past 4 decades (1972-2015)',
                x: -20
            },
            xAxis: {
                // categories: ['1972', '1974', '1976', '1978', '1980', '1982', '1984', '1986', '1988', '1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014']
            type: "datetime"
            },
            yAxis: {
                title: {
                    text: 'Dollars'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            plotOptions: {
                series: {
                    pointStart: Date.UTC(1970, 0, 1),
                    pointInterval: 60 * 24 * 3600 * 1000
                }
            },
            tooltip: {
                valuePrefix: '$'
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top',
                borderWidth: 0,
                x: 0,
                y: 70,
                itemMarginBottom: 30,
            },
            series: [{
                color: "rgba(191,217,22,1)",
                name: "Revenue-Weighted S&P 500 Index",
                data: json[0]
            },
            {   
                color: "rgba(0,0,0,1)",
                name: "S&P 500 Index",
                data: json[1]
            }]
            
        });
    });
});



// Doughnut Chart

$(function () {

    $(document).ready(function () {

        $('#doughnut-chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Corporate Defined Benefit Plan Funding'
            },
            subtitle: {
            text: 'The majority of Corporate Defined Benefit Plans are over 80% funded.'
                },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top',
                borderWidth: 0,
                x: 0,
                y: 70,
                itemMarginBottom: 30,
            },
            series: [{
                name: 'Equities',
                colorByPoint: true,
                innerSize: '55%',
                data: [{
                    color: 'rgba(191,217,22,1)',
                    name: '81% - 99%',
                    y: 77
                }, {
                    color: 'rgba(0,0,0,1)',
                    name: '100% - 120%',
                    y: 14
                }, {
                    color: 'rgba(220,220,220,1)',
                    name: '60% - 80%',
                    y: 9
                }]
            }]
        });
    });
});



$(function () {
    $('#bubble-chart').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Production Comparison'
        },

        subtitle: {
            text: 'Revenue-weighted vs. market capitalization-weighted sectors (1972-2014)'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Range (miles)'
            },
            labels: {
                format: ''
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Capacity (tons)'
            },
            labels: {
                format: ''
            },
            maxPadding: 0.2,
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Range:</th><td>{point.x} miles</td></tr>' +
                '<tr><th>Capacity:</th><td>{point.y} tons</td></tr>' +
                '<tr><th>Comparison:</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 0,
            x: 0,
            y: 70,
            itemMarginBottom: 30,
            labelFormatter: function() {
                return this.name
            }
        },

        series: [{
            color: 'rgba(191,217,22,1)',
            name: 'Technology AAA',
            data: [
                { x: 1700, y: 65, z: 55.8, color: 'rgba(191,217,22,1)', country: 'Technology AAA' },
                { x: 1000, y: 25, z: 19.6, color: 'rgba(191,217,22,1)', country: 'Technology AAA' },
                { x: 180, y: 60.1, z: 19.6, color: 'rgba(191,217,22,1)', country: 'Technology AAA' },
                { x: 120, y: 13, z: 13.5,  color: 'rgba(191,217,22,1)', country: 'Technology AAA' }
            ]}, {
            color: 'rgba(0,0,0,1)',
            name: 'Technology BBB',
            data: [
                { x: 1300, y: 75, z: 65.7, color: 'rgba(0,0,0,1)', country: 'Technology BBB' },
                { x: 1000, y: 50, z: 19.6, color: 'rgba(0,0,0,1)', country: 'Technology BBB' },
                { x: 500, y: 35, z: 16.2, color: 'rgba(0,0,0,1)', country: 'Technology BBB' }
            ]}]


    });
});


$(function () {

    $.getJSON("../json/area-chart.json", function(json) {

        $('#area-chart').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Production Comparison'
            },
            subtitle: {
                text: 'Revenue-weighted vs. market capitalization-weighted sectors (1972-2015)'
            },
            xAxis: {
                // categories: ['1970', '1980', '1990', '2000', '2010', '2015'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                },
                type: "datetime"
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
                shared: true,
                backgroundColor: "rgba(255,255,255,1)"
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                },
                series: {
                    pointStart: Date.UTC(1970, 0, 1),
                    pointInterval: 60 * 24 * 3600 * 1000 
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top',
                borderWidth: 0,
                x: 0,
                y: 70,
                itemMarginBottom: 30,
            },

            // series: [{
            //     color: 'rgba(0,0,0,0.6)',
            //     name: 'Utilities',
            //     data: [3.98, 4.35, 4.23, 4.55, 3.24, 3.16]
            // }, {
            //     color: 'rgba(191,217,22,0.6)',
            //     name: 'Telecom',
            //     data: [4.08, 4.62, 5.29, 3.58, 2.93, 2.73]
            // }, {
            //     color: 'rgba(0,0,0,0.7)',
            //     name: 'Info Tech',
            //     data: [3.03, 4.59, 6.94, 9.08, 10.57, 10.75]
            // }, {
            //     color: 'rgba(191,217,22,0.7)',
            //     name: 'Financials',
            //     data: [3.22, 9.43, 12.68, 15.83, 13.76, 13.36]
            // }, {
            //     color: 'rgba(0,0,0,0.8)',
            //     name: 'Health Care',
            //     data: [2.28, 2.78, 4.22, 9.61, 11.68, 13.39]
            // }, {
            //     color: 'rgba(191,217,22,0.8)',
            //     name: 'Cons Staples',
            //     data: [12.4, 11.8, 11.99, 12.85, 15.41, 14.7]
            // }, {
            //     color: 'rgba(0,0,0,0.9)',
            //     name: 'Cons Disc',
            //     data: [21.92, 18.59, 21.96, 18.2, 13.83, 15.21]
            // }, {
            //     color: 'rgba(191,217,22,0.9)',
            //     name: 'Industrials',
            //     data: [16.19, 14.92, 13.73, 11.3, 11.03, 11.44]
            // }, {
            //         color: 'rgba(0,0,0,1)',
            //     name: 'Materials',
            //     data: [12.07, 8.99, 7.13, 3.88, 3.8, 3.56]
            // }, {
            //         color: 'rgba(191,217,22,1)',
            //     name: 'Energy',
            //     data: [21.05, 19.95, 11.82, 11.11, 13.75, 11.7]
            // }]



            series: [{
                color: 'rgba(0,0,0,0.6)',
                name: 'Utilities',
                data: json[0]
            }, {
                color: 'rgba(191,217,22,0.6)',
                name: 'Telecom',
                data: json[1]

            }, {
                color: 'rgba(0,0,0,0.7)',
                name: 'Info Tech',
                data: json[2]
            }, {
                color: 'rgba(191,217,22,0.7)',
                name: 'Financials',
                data: json[3]

            }, {
                color: 'rgba(0,0,0,0.8)',
                name: 'Health Care',
                data: json[4]

            }, {
                color: 'rgba(191,217,22,0.8)',
                name: 'Cons Staples',
                data: json[5]

            }, {
                color: 'rgba(0,0,0,0.9)',
                name: 'Cons Disc',
                data: json[6]

            }, {
                color: 'rgba(191,217,22,0.9)',
                name: 'Industrials',
                data: json[7]

            }, {
                color: 'rgba(0,0,0,1)',
                name: 'Materials',
                data: json[8]

            }, {
                color: 'rgba(191,217,22,1)',
                name: 'Energy',
                data: json[9]

            }]


           

        });
    });
});