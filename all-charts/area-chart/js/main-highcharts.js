// This is Area Chart


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
                    pointInterval: Math.floor(60 * 24 * 3600 * 1000 / 1.82)
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