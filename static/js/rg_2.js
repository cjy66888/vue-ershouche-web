(function get_r2_data() {
    // var right2 = echarts.init(document.getElementById('rg_2'));
    var right2 = echarts.init(document.getElementById('rg_2'));
    var right2_option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['平均里程', '平均价格（万）'],
            top: "0%",
            textStyle: {
                color: "rgba(255, 255, 255, .5)",
                fontSize: "12",
            },
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: [],
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            },
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 20,
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
            },
            {
                type: 'value',
                min: 0,
                max: 40,
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
            }
        ],
        series: [{
                name: '平均里程',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: "#0184d5",
                    width: "3"
                },
                //渐变色制作
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                color: "rgba(1,132,213,0.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1,132,213,0.1)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0,0,0,0.1)"
                },
                //设置拐点
                symbol: "circle",
                //拐点大小
                symbolSize: 7,
                //开始不显示拐点，鼠标经过时显示
                showSymbol: false,
                //设置拐点颜色及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221,220,107,.1)",
                    borderWidth: 12
                },
                data: []
            },
            {
                name: '平均价格（万）',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2,
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)",
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)",
                                },
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)",
                    },
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12,
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                yAxisIndex: 1,
                data: []
            }
        ]
    };
    $.ajax({
        url: "/r2",
        success: function(data) {
            right2_option.xAxis[0].data = data.h4;
            right2_option.series[0].data = data.z4;
            right2_option.series[1].data = data.q4;
            //把配置项给实例对象
            right2.setOption(right2_option)
        },
        error: function() {
            return 'false'
        }
    });
    setInterval(get_r2_data, 60000);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
        right2.resize();
    });
})();