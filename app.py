# 导入模块
from flask import Flask
from flask import render_template
from flask import jsonify
import utils

# 创建flask对象
app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route('/h1')
def get_h1_data():
    data = utils.get_h1_data()
    return jsonify({"zhi": data})
# 屏幕中间的车辆数


@app.route('/h2')
def get_h2_data():
    data = utils.get_h2_data()
    return jsonify({"zhi": data})
# 屏幕中间的品牌数


@app.route('/h3')
def get_h3_data():
    data = utils.get_h3_data()
    d1 = []
    for h, z in data:
        h1 = {}
        h1.update({"name": h, "value": z})
        d1.append(h1)
    return jsonify({"zhi": d1})
# 屏幕中间的地图


@app.route('/l1')
def get_l1_data():
    data = utils.get_l1_data()
    h1 = []
    z1 = []
    z2 = []
    for h, z, c in data:
        h1.append(h)
        z1.append(int(z))
        z2.append(int(c))
    return jsonify({"h1": h1, "z1": z1, "z2": z2})
# 左一的柱形图


@app.route('/r1')
def get_r1_data():
    data = utils.get_r1_data()
    h1 = []
    z1 = []
    z2 = []
    for h, z, c in data:
        h1.append(h)
        z1.append(z)
        z2.append(c)
    return jsonify({"h1": h1, "z1": z1, "z2": z2})
# 右一的柱形图


@app.route('/l2')
def get_l2_data():
    data = utils.get_l2_data()
    h1 = []
    z1 = []
    z2 = []
    for h, z, c in data:
        h1.append(h)
        z1.append(z)
        z2.append(c)
    return jsonify({"h1": h1, "z1": z1, "z2": z2})
# 左二的柱形图


@app.route('/r2')
def get_r2_data():
    data = utils.get_r2_data()
    h4 = []
    z4 = []
    q4 = []
    for h, z, q in data:
        h4.append(str(h)+"年")
        z4.append(z)
        q4.append(q)
    return jsonify({"h4": h4, "z4": z4, "q4": q4})
# 右二的折线图


@app.route('/l3')
def get_l3_data():
    data = utils.get_l3_data()
    z5 = []
    for h, z in data:
        h5 = {}
        h5.update({"value": z, "name": h})
        z5.append(h5)
    return jsonify({"z5": z5})
# 左三的饼形图


@app.route('/ciyun')
def get_r3_data():
    data = utils.get_r3_data()
    z6 = []
    for h, z, c in data:
        h6 = {}
        h6.update({"name": h, "value": c})
        z6.append(h6)
    return jsonify({"zhi": z6})
# 右三的词云图


if __name__ == '__main__':
    app.run()
