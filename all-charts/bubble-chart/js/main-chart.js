// Custom Vertical Bar Chart
$(function () {
    var ctx = document.getElementById("custom-vertical-bar");
    var linedata = new Chart(ctx, {
            responsive: true,
            type: 'bar',
            data: {
                labels: ['Cons Disc', 'Cons Staples', 'Energy', 'Financials', 'HC', 'Industrials', 'Tech', 'Materials', 'Telecom', 'Utilities'],
                datasets: [
                    {

                        title : "Sinus",
                        label: "Avarage Revenue-Weighted",

                        // The properties below allow an array to be specified to change the value of the item at the given index
                        // String  or array - the bar color
                        backgroundColor: "rgba(191,217,22,1)",

                        // String or array - bar stroke color
                        borderColor: "rgba(191,217,22,1)",

                        // Number or array - bar border width
                        borderWidth: 1,

                        // String or array - fill color when hovered
                        hoverBackgroundColor: "rgba(191,217,22,0.8)",

                        // String or array - border color when hovered
                        hoverBorderColor: "rgba(191,217,22,1)",

                        // The actual data
                        data: [0.47, 0.59, 0.71, 1.23, 0.48, 1.03, 1.48, 0.85, 1.45, 1.01],

                        // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used.
                        yAxisID: "y-axis-0",
                    },
                    {
                        label: "Avarage Market Capitalization-Weighted",
                        backgroundColor: "rgba(0,0,0,1)",
                        borderColor: "rgba(220,220,220,1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(0,0,0,0.8)",
                        hoverBorderColor: "rgba(220,220,220,1)",
                        data: [1.03, 1.12, 1.10, 2.07, 1.79, 1.27, 2.60, 1.14, 1.54, 1.14]
                    }
                ]
            },
            options: {
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                }
            }
    });
});



// Custom Line Bar Chart
$(function () {
    var ctx = document.getElementById("custom-line-chart");
    var linedata = new Chart(ctx, {
            responsive: true,
            type: 'line',
            data: {
                labels: ['1972', '1974', '1976', '1978', '1980', '1982', '1984', '1986', '1988', '1990', '1992', '1994'],
                    datasets: [
                        {
                            label: "Revenue-Weighted S&P 500 Index",

                            // Boolean - if true fill the area under the line
                            fill: false ,

                            // String - the color to fill the area under the line with if fill is true
                            backgroundColor: "rgba(191,217,22,0.7)",

                            // The properties below allow an array to be specified to change the value of the item at the given index

                            // String or array - Line color
                            borderColor: "rgba(191,217,22,1)",

                            // String - cap style of the line. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
                            borderCapStyle: 'butt',

                            // Array - Length and spacing of dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
                            borderDash: [],

                            // Number - Offset for line dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
                            borderDashOffset: 0.0,

                            // String - line join style. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
                            borderJoinStyle: 'miter',

                            // String or array - Point stroke color
                            pointBorderColor: "rgba(0,0,0,1)",

                            // String or array - Point fill color
                            pointBackgroundColor: "#fff",

                            // Number or array - Stroke width of point border
                            pointBorderWidth: 1,

                            // Number or array - Radius of point when hovered
                            pointHoverRadius: 5,

                            // String or array - point background color when hovered
                            pointHoverBackgroundColor: "rgba(220,220,220,1)",

                            // Point border color when hovered
                            pointHoverBorderColor: "rgba(0,0,0,1)",

                            // Number or array - border width of point when hovered
                            pointHoverBorderWidth: 2,

                            // Tension - bezier curve tension of the line. Set to 0 to draw straight Wlines connecting points
                            tension: 0.1,

                            // The actual data
                            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],

                            // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used. First id is y-axis-0
                            yAxisID: "y-axis-0",
                        },
                        {
                            label: "S&P 500 Index",
                            fill: false,
                            backgroundColor: "rgba(0,0,0,1)",
                            borderColor: "rgba(0,0,0,1)",
                            pointBorderColor: "rgba(0,0,0,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(220,220,220,1)",
                            pointHoverBorderColor: "rgba(0,0,0,1)",
                            pointHoverBorderWidth: 2,
                            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                        }
                    ]
            },
            options: {
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                    xAxes: [{
                            display: false
                        }]
                }
            }
    });
});



// Custom Pie Chart
$(function () {
    var ctx = document.getElementById("custom-pie-chart");
    var linedata = new Chart(ctx, {
            responsive: true,
            type: 'pie',
            data: {
            labels: [
                    "Increase",
                    "Unchanged",
                    "Decreased"
                ],
                datasets: [
                    {
                        data: [12.1, 40.4, 47.5],
                        backgroundColor: [
                            "rgba(220,220,220,1)",
                            "rgba(0,0,0,1)",
                            "rgba(191,217,22,1)"
                        ],
                        hoverBackgroundColor: [
                            "rgba(220,220,220,0.7)",
                            "rgba(0,0,0,0.7)",
                            "rgba(191,217,22,0.7)"
                        ]
                    }]
            },
            options: {
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                }                                               
            }
    });
});


// Custom doughnut Chart
$(function () {
    var ctx = document.getElementById("custom-doughnut-chart");
    var linedata = new Chart(ctx, {
            responsive: true,
            type: 'doughnut',
            data: {
labels: [
        "Increase",
        "Unchanged",
        "Decreased"
    ],
    datasets: [
        {
            data: [12.1, 40.4, 47.5],
            backgroundColor: [
                "rgba(220,220,220,1)",
                "rgba(0,0,0,1)",
                "rgba(191,217,22,1)"
            ],
            hoverBackgroundColor: [
                "rgba(220,220,220,0.7)",
                "rgba(0,0,0,0.7)",
                "rgba(191,217,22,0.7)"
            ]
        }]
            },
            options: {
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                }
            }
    });
});




