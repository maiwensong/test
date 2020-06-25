$(document).ready(function(e){
    var myChart = echarts.init(document.getElementById("thirdSectioncenter"));    
        $.get('https://edu.telking.com/api/?type=month ').done(function (data){
            myChart.setOption({
                xAxis: {
                    data: data.data.xAxis
                },
                series : [
                    {   
                        name:'当日流水',
                        type:'line',
                        data:data.data.series 
                    },    
                ]
                ,title: {
                    left:'center',
                    text: '流水数据显示'
                },
                tooltip: {
                    trigger: 'axis'
                },
                dataZoom: [{
                    startValue: '05/09'
                }, {
                    type: 'inside'
                }],
                yAxis: {},
            });
        })

        

});