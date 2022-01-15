(function() {
    var right3 = echarts.init(document.querySelector(".pie2 .chart"));
    var right3_option = {
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
        ],
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
            bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            // 文字颜色
            textStyle: {
                color: "rgba(255, 255, 255, .5)",
                fontSize: "12",
            },
        },
        series: [{
            name: "地区分布",
            type: "pie",
            // 设置大小
            radius: ["10%", "70%"],
            // 设置图形位置
            center: ["50%", "50%"],
            roseType: "radius",
            // 图形文字
            label: {
                fontSize: 10,
            },
            // 链接图形和文字的线条
            labelLine: {
                // length 链接图形的线条
                length: 6,
                // length2链接文字的线条
                length2: 8,
            },
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
            ],
        }, ],
    };
    right3.setOption(right3_option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
        right3.resize();
    });
})();