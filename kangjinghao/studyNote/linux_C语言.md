## Linux编辑器：

* vim 

* emacs

* c语言编译器：gcc编译器

## C语言基本语法：

1. 导入头文件

   #include <> 导入系统的

   1. stdio.h定义输入输出流

   #include " " 导入文件里的

2. 将mian函数与调用函数分开：

   ​	在vim里打开多个文件：

   1. ESC进入命令行：:sp 新文件的名字
     2. ESC进入命令行：ctrl + w + 下箭头，回到原来的的窗口
     3. 把除了main函数的，函数剪切，函数a行，ESC，a+dd 剪切
     4. ESC进入命令行：ctrl + w + 上箭头，新窗口
     5. ESC，：p 粘贴
     6. ESC进入命令行：ctrl + w + 下箭头，回到原来的的窗口，加上#include "新文件名"
     7. ESC,:wqa ，保存所有并退出
     8. `gcc demo.c -o mian.out` 文件单个名字就能运行，-o 表示将编译结果重命名

   分开编译：
   1. `gcc -c demo.c -o max.o`	//生成一个中间文件max.o
   
     2. `vim max.h` //写上max.o的参数，函数的类型，不要忘了加“；”
   
        	1. int max(int a,int b);
   
     3. 在demo加头文件 `#include "max.h"`
   
3. main函数：
   
   * 主函数：程序运行的时候第一个调用和寻找的函数，main(int argv,char* argc[])
   
     ​	argv：是执行了几个参数
   
     ​	argc[]:执行了什么参数
   
     ​	scanf("%d",&a)
   
     ​	printf("%d",a)
   
   * 标准的输入、输出、错误流：
   
     stdout：输出
   
     stdin：输入
   
      stderr：错误
   
     //printf("input")
   
     fprintf(stdout，"input")往文件里写入，默认
   
     //scanf("%d",&a)代码
   
     fscanf(stdin,"%d",&a)键盘输入
   
     fprintf(stderr,"error")//标准错误流
   

## 编译较大的源代码：

 + make:
   1. 可以把大型的分成很多个模块			
   2. 快速整理和编译源码
   3. 内部也是使用的gcc

+ 编码过程
  1. `make -v` //查看是否安装make
  2. `apt-get install make ` //没有的话就安装
  3.  `vim Makefile` //#注释；接着编写Makefile
  4. `hello.out:max.o min.o hello.c` //生存链接		
  5. tab（8空格）gcc max.o min.o hello.c -o hello.out
  6. `max.o:max.c`
  7. tab（8空格）gcc -c max.c
  8. `min.o:min.c`
  9. tab（8空格）gcc -c min.c
  10. make //编译了一个Makefile文件，生成了一个hello.out文件

* vim里面的命令：

  ​	剪切：命令行模式：ndd，从光标乡下n行

  ​	复制：nyy

  ​	粘贴：p

* 终端命令：
  删除.o文件：`rm *.o
  echo：命令echo $?

  ​		运行完一个文件之后，运行这个，然后返回值为0时表示成功

  ​		假如程序里面写的是return 101；在执行.c文件之后，echo得到的值是101，这个时候运行.out && ls，此时的ls是不会运行的，因为它的echo为101表示的是异常，虽然.out的结果年呢个执行，但之后的连接起来的其他命令不会执行



## 重定向：

* 输出流重定向：

  命令 1>> a.txt 将输出内容重定向到a.txt；其中1可以不写默认，追加模式

  命令 1> a.txt 	覆盖到a.txt

* 输入流重定向：

  命令 1< a.txt 将a.txt内容输出到命令；其中1可以不写默认

* 错误流重定向

  命令 2 >> a.txt 将标准的错误流重定向到a.txt  

## 管道的原理及应用：

​	管道就是相当与一个既输入又输出的通道，跟grep结合使用

​	grep ：相当于搜索

​	`ls /etc/ | grep ad`	//查找etc文件夹里所有带有ad的文件

​	a.out | b.out	//将a.out的输出结果当作b.out的输入流

## 指针：

​	即不同函数体间的传值，传值方传数值加取地址符号&a，接收方用指针指向接收值所在的位置*a取值

​	声明一个指针变量：int *a = &a

## gdb工具的使用：

​	用 gcc -g 文件名 编译的文件可以用gdb进行调试

​	gdb进入到调试模式

​	start 开始执行项目

​	回车=重复上一次操作

​	l：查看代码

​	n： 执行下一步

​	p 参数 ：查看参数的值

​	q ：退出

​	bt：函数堆栈，当前使用的函数在上面

​	f n：切换到数字n的堆栈

​	s：查看内存地址 



## 计算机中的数据表示方法：

​	1bytes = 8bit

## 内存管理：

​	32位操作系统只能呢个使用4G内存，2的32次幂。

​		cpu的地址总线是32位，寻址空间32位	

​		32位：给内存的编号只能到32个二进制位

 	操作系统会给所有的内存进行编号，编号就是唯一的内存字节的地址

​	内存分配：

​		栈和内存之间的是自由分配内存

![**系统内存分配**](/home/k/图片/系统内存分配.png)

栈：先进后出

 