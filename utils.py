# 导入模块
import pymysql


def get_conn():
    conn = pymysql.connect(host='127.0.0.1',
                           user='root',
                           password='123456',
                           db='mydb1',
                           charset="utf8")

    # 创建游标
    cursor = conn.cursor()
    return conn, cursor


def close_conn(conn, cursor):
    cursor.close()
    conn.close()


def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res


def get_h1_data():
    sql = "SELECT COUNT(*) FROM `data1` "
    res = query(sql)
    return res
# 大屏中间的车辆数


def get_h2_data():
    sql = "SELECT COUNT(DISTINCT `品牌`) FROM `data1` "
    res = query(sql)
    return res
# 大屏中间的品牌数


def get_h3_data():
    sql = "SELECT `城市`,COUNT(*) AS sum FROM `data1` group by `城市` "
    res = query(sql)
    return res
# 大屏中间的地图


def get_l1_data():
    sql = "SELECT `品牌`,COUNT(*) AS sum,ROUND(AVG(`价格（万）`),2) avg FROM `data1` group by `品牌` ORDER BY sum desc limit 0,10"
    res = query(sql)
    return res
# 左一柱形图


def get_r1_data():
    # sql = "SELECT `城市`,ROUND(AVG(`价格（万）`),2) avg FROM `tb2` group by `城市` ORDER BY avg desc limit 0,5"
    sql = "SELECT `车身结构`,COUNT(*) AS sum,ROUND(AVG(`价格（万）`),2) avg FROM `data1` group by `车身结构` ORDER BY sum desc limit 0,10"
    res = query(sql)
    return res
# 右一柱形图


def get_l2_data():
    sql = "SELECT fdj_pl,COUNT(*) AS sum,ROUND(AVG(`价格（万）`),2) avg FROM `data1` group by fdj_pl ORDER BY sum desc limit 0,10"
    res = query(sql)
    return res
# 左二柱形图


def get_r2_data():
    sql = "SELECT car_year,ROUND(AVG(`里程数（万公里）`),2) avg1,ROUND(AVG(`价格（万）`),2) avg2 FROM `data1` group by car_year ORDER BY car_year"
    res = query(sql)
    return res
# 右二折线图


def get_l3_data():
    sql = "select yearp as '车龄',count(*) as '计数' from(SELECT CASE when car_year>=0 and car_year<=2 then '0-2年' when car_year>2 and car_year<=5 then '3-5年' when car_year>5 and car_year<=8 then '6-8年' when car_year>8 and car_year<=10 then '8-10年' else '十年以上' END as yearp from `data1`)a GROUP BY yearp ORDER BY yearp"
    res = query(sql)
    # print(res)
    return res
# 左三饼形图


def get_r3_data():
    sql = "SELECT `城市`,COUNT(*) AS sum,ROUND(AVG(`价格（万）`),2) as avg FROM `data1` group by `城市` ORDER BY sum DESC LIMIT 20"
    res = query(sql)
    return res
# 右三词云图


if __name__ == '__main__':
    print(get_r3_data())
