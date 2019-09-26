### ssh的使用

sudo aprt install ssh  安装ssh包

ssh-keygen安装秘钥

ssh-copy-id  用户名@ip地址	连接用户，然后输入密码，加上copy-id 保存密码

ssh 用户名@ip地址	进入用户文件夹，可以用ll查看一下目录

exit 退回到自己的根目录下：

​		用sudo vi /etc/hosts 进入文件夹，将对方地址加入文件里，例如：192.168.192.** k 

​			那就是以后就不用输入用户的id，直接用 ==用户@k== 就可以访问

ssh ==用户@k== 进入对方目录下

exit 退回到自己的根目录下

scp kk@kk:/home/kk/zscz.tar.xz ~	将别人的某个文件复制到自己的文件目录下

 scp /home/k/图片/pic.jpeg kk@kk:/	将自己的复制的对方的文件目录下

#### 查看相关进程

sudo ps -e | grep ssh 查找相关的 sshd的进程

sudo kill 132564	关闭sshd 通道

systemctl start ssh	查看当前相关的进程

