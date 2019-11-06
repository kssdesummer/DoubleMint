import time
# 时间模块

startTime = time.perf_counter() # 现在的时间
print(startTime)
numTime = time.time()   # 本地时间戳
print(numTime)
nowTime = time.ctime(numTime)   # 时间字符串
print(nowTime)
tupleTime = time.localtime()    #  时间元组
print(tupleTime)
stopTime = time.perf_counter()
print(stopTime)
print(stopTime-startTime)

norTime = time.strptime("2019-11-06 20:59:20","%Y-%m-%d %H:%M:%S")
print(norTime)  # 输入指定格式提取到时间元组

strTime = time.strftime("%Y-%m-%d %H:%M:%S %A %P",
                        (2019,11,6,21,6,8,0,0,0)
                        )
print(strTime)  # 格式化时间字符串