from collections import deque

# 容器
# list 列表
# 列表推导式
list3 = [x for x in range(10) if x %2 == 0]
print(list3)
# 列表的常用函数
List1 = []
List2 = []

List1.append("a")   # append 在列表最后添加元素
List2.append("a")

List1.extend(List2) # extend 合并两个列表

List1.insert(2,"b") # insert 在索引位置插入元素

List1.remove("a")   # remove 删除某个元素

List1.pop(1)    # pop 删除索引位置的元素,null删除最后一项

num = List1.count("a")  # count 统计某元素的出现的次数

List1.append("a")
List1.append("b")
List1.append("c")
List1.append("a")
List1.sort(reverse=True)    # sort 排序默认false正序

List2.clear()
List3 = List1.copy()    # copy 浅拷贝

List1.append("a")

# 列表实现堆栈:先入后出
list1 = [3,4,5]
list1.append(6)
list1.append(7)
print(list1.pop())
print(list1.pop())
print(list1.pop())
print(list1.pop())
print(list1.pop())

# 列表实现队列,先入先出,使用collections.deque
queue = deque(["alen","adle","bob"])
queue.append("garry")
queue.append("willen")
queue.popleft()
queue.popleft()
print(queue)