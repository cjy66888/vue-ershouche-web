(function get_r1_data() {
    var right1 = echarts.init(document.getElementById('rg_1'));
    var right1_option = {
        color: ['#96e876', "#df374f"],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['车辆数', '平均价格（万）'],
            textStyle: {
                color: "#fff"
            },
        },
        //修改图表大小
        grid: {
            top: '30px',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            },
            //修改刻度标签 相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            },
            //不显示x坐标轴的样式
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 1300,
                //修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
                // y坐标轴的样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                // y轴分割线颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },
            {
                type: 'value',
                min: 0,
                max: 80,
                //修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
                // y坐标轴的样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                // y轴分割线颜色
                splitLine: {
                    show: false
                }
            }
        ],
        series: [{
                name: "车辆数",
                type: 'bar',
                // 修改柱子宽度
                barWidth: '35%',
                data: [],
                // 修改柱子的圆角
                itemStyle: {
                    barBorderRadius: 5
                }
            },
            {
                name: "平均价格（万）",
                type: 'line',
                yAxisIndex: 1,
                data: [],
            }
        ]
    };
    $.ajax({
        url: "/r1",
        success: function(data) {
            right1_option.xAxis[0].data = data.h1;
            right1_option.series[0].data = data.z1;
            right1_option.series[1].data = data.z2;
            // left1_option.yAxis[1].data = data.z2;
            //把配置项给实例对象
            right1.setOption(right1_option)
        },
        error: function() {
            return 'false'
        }
    });
    setInterval(get_r1_data, 60000);
    // 让图表跟随屏幕自动适应
    window.addEventListener("resize", function() {
        right1.resize();
    });
})();