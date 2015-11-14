$(function () {
    Highcharts.setOptions({
        colors: ['#ffac37', '#4399ff']
    });
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                {
                    name: '挂科人数',
                    y: 40,
                    sliced: true,
                    selected: true
                },
                ['通过人数',   60],
                
               
            ]
        }]
    });
});
