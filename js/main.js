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
            series: [{
                name: 'Equities',
                colorByPoint: true,
                data: [{
                    name: 'Increase',
                    y: 12
                }, {
                    name: 'Unchanged',
                    y: 40
                }, {
                    name: 'Decreased',
                    y: 47
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
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Avarage Revenue-Weighted',
            data: [0.47, 0.59, 0.71, 1.23, 0.48, 1.03, 1.48, 0.85, 1.45, 1.01]

        }, {
            name: 'Avarage Market Capitalization-Weighted',
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
            categories: ['Utilities', 'Telecom', 'Info Tech', 'Financials', 'Health Care', "Consumer Staples", "Consumer Discretionary", "Industrials", "Materials", "Energy"],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Revenue-Weighted',
            data: [10, 10, 8.5, 8, 11.6, 12.5, 10.2, 9.7, 9.3, 12]
        }, {
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
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'S&P 500',
            data: [15, 7, 5]
        }, {
            name: 'Revenue-Weighted',
            data: [85, 93, 95]
        }]
    });
});




$(function () {
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
            categories: ['1972', '1974', '1976', '1978', '1980', '1982', '1984', '1986', '1988', '1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014']
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
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Revenue-Weighted S&P 500 Index',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'S&P 500 Index',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});