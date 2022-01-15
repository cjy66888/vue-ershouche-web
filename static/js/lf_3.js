(function get_l3_data() {
    var left3 = echarts.init(document.getElementById('lf_3'));
    var left3_option = {
        // color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom: "0%",
            //修改小图标大小
            itemWidth: 10,
            itemHeight: 10,
            // 文字颜色
            textStyle: {
                color: "rgba(255, 255, 255, .5)",
                fontSize: "12",
            },
        },
        series: [{
            name: '车龄',
            type: 'pie',
            //修改饼形图的大小，radius第一个值的内圆半径，第二个是外圆
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            // roseType: "area",
            label: {
                show: true,
                position: 'outside',
                emphasis: { //文本样式
                    show: true, //展示
                    textStyle: { //文本样式
                        fontSize: '10',
                        fontWeight: '600',
                    }
                }
            },
            // 链接图形和文字的线条
            labelLine: {
                normal: {
                    show: true, //引导线显示
                    // length 链接图形的线条
                    length: 8,
                    // length2链接文字的线条
                    length2: 10,
                }
            },
            data: [],
        }]
    };
    $.ajax({
        url: "/l3",
        success: function(data) {
            left3_option.series[0].data = data.z5;
            //把配置项给实例对象
            left3.setOption(left3_option)
        },
        error: function() {
            return 'false'
        }
    });
    setInterval(get_l3_data, 60000);
    window.addEventListener("resize", function() {
        left3.resize();
    });
})()