(function get_r3_data() {
    var right_ciyun = echarts.init(document.getElementById('rg_3'));
    var ddd = [{ 'name': '肺炎', 'value': '12734670' }, { 'name': '实时', 'value': '12734670' }, { 'name': '新型', 'value': '12734670' }]
    var ciyun_option = {
        title: {
            text: "",
            textStyle: {
                color: '#fff'
            },
            left: 'left'
        },
        tooltip: {
            show: false
        },
        series: [{
            type: 'wordCloud',
            // gridSize: 1,
            // sizeRange: [12,55],
            /*
            绘制词云的形状, 值为回调函数 或 关键字, 默认 circle
            关键字:
            circle  圆形
            cardioid 心形
            diamond  菱形 正方形
            triangle-forward, triangle  三角形  
            pentagon 五边形
            star 星形
            */
            shape: 'circle',

            // The shape option will continue to apply as the shape of the cloud to grow.
            //词云轮廓图，支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串, 不包含白色区域; 可选选项
            // shape选项将随着云的形状增长而继续应用。
            // maskImage: maskImage,

            // 词云整个图表放置的位置 和 尺寸大小
            // left: 'center',
            // top: 'center',
            // width: '70%',
            // height: '80%',
            right: null,
            bottom: null,

            //词云文本大小范围,  默认为最小12像素，最大60像素。
            sizeRange: [12, 60],

            // 词云文字旋转范围和步长。 文本将通过旋转在[-90，90]范围内随机旋转步骤45
            // 如果都设置为 0 , 则是水平显示
            rotationRange: [-90, 90],
            rotationStep: 45,

            // 词云文本之间的距离, 距离越大，单词之间的间距越大, 单位像素
            gridSize: 3,

            //设置为true可以使单词部分在画布之外绘制, 允许绘制大于画布大小的单词
            drawOutOfBound: false,

            // 文本样式
            textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // 回调函数 或 颜色值
                color: function() {
                    // 默认 随机颜色
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                },
                // 鼠标hover的特效样式
                // emphasis: {
                //     shadowBlur: 10,
                //     shadowColor: '#333'
                // }
            },

            // data 数组格式, 必须有name和value属性, 
            data: ddd
        }]
    };
    $.ajax({
        url: "/ciyun",
        success: function(data) {
            ciyun_option.series[0].data = data.zhi;
            //把配置项给实例对象
            right_ciyun.setOption(ciyun_option)
        },
        error: function() {
            return 'false'
        }
    });
    setInterval(get_r3_data, 60000);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
        right_ciyun.resize();
    });
})()