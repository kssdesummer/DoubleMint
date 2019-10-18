### 安装docker ：

1.  ###### 网址：https://www.runoob.com/docker/ubuntu-docker-install.html

2.  ###### 安装和使用部分:

    1.  在终端查看ubuntu版本号3.10以上支持：`uname -r`
    2.  获取最新的安装包：`sudo wget -qO-https://get.docker.com/ | sh`
        1.  提示：`if you would like to use ...`安装成功
        2.  可以查看版本号：`docker -v`
        3.  切换非root用户运行：
            -   https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user
                1.  创建docker用户组：`sudo groupadd docker`
                2.  将用户添加到用户组：`sudo usermod -aG docker (换成你的用户名)`
                3.  重启docker服务：`newgrp docker`
                4.  运行测试文件：`docker run hello-world`
                5.  失败的话：`sudo chmod a+rw /var/run/docker.sock`
    3.  启动docker后台服务器：`sudo service docker start`
    4.  查看docker进程：`ps -af | grep docker`

### 安装docker-compose ：

1.  网址：http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html

2.  C部分：Ubuntu安装

    1.  获取并用curl方式安装（版本号替换1.2.4）：

        `sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

    2.  给docker-compose：`sudo chmod +x /usr/local/bin/docker-compose`

        1.  安装失败，检查路径，将compose链接到/usr/bin

            `sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`

    3.  测试：docker-compose --version

    4.  卸载：

        curl安装方式：`sudo rm /usr/local/bin/docker-compose`

        pip安装方式：`pip uninstall docker-compose`

### 熟悉命令

1.  基本命令`Docker Hello World`

    1.  在一个容器内运行一个应用程序：`docker run ubuntu:15.10 /bin/echo "Hello World"`

        -   实现效果：输出一个Hello World
        -   ubuntu：15.10 ：指定要运行的镜像，docker首先从本地查找镜像是否存在，不存在在docker Hub 下载镜像
        -   /bin/echo "Hello World"

    2.  运行交互式的容器（查看容器中的内容）

        -   `docker run -i -t ubuntu:15.10 /bin/bash` 
        -   -t：在容器中指定一个终端或者伪终端（操作与平常使用终端差不多）
        -   -i：允许对容器内的标准输入（stdin）进行交互

    3.  后台启动容器

        -   `docker run -d ubuntu:15.10 /bin/sh -c "while;do echo hello world;sleep 1;done"`
        -   以上代码：在镜像中运行一个程序每个1秒写入一个hello world
        -   输出的是一串id，我们可以通过id去看我们都写了什么
        -   首先看看正在运行的容器：`docker ps` -l参数查看最后一次创建的容器
        -   通过id或者NAMES查看`docker logs ID或名字`
        -   停止程序：`docker stop ID或名字`
        -   重启容器：`docker start ID或名字`
        -   删除运行的容器：`docker rm 名字` 在停止之后操作

    4.  运行一个web应用

        -   载入镜像：`docker pull training/webapp`
            -   出错查看可用ip：`dig @114.114.114.114 registry-1.docker.io`
            -   改配置文件：`sudo vim /etc/hosts `
            -   添加可用IP：`52.5.185.86 registry-1.docker.io`
            -   重新拉取、查看：`docker image ls`
        -   在拉取的镜像容器里运行Python Flask应用来运行一个web应用
            -   创建.py文件：`docker run -d -P training/webapp python app.py`
            -   -d ：容器后台运行 。
            -   -P ：将容器内部使用的网络端口映射到我们使用的主机（访问本机ip）
            -   -p ：设置默认端口。
                -   -p 5000:5000将默认的32769改为5000端口
                -   -p 127.0.0.1：5001:5000 映射网址是127.0.0.1:5001
            -   `docker ps`查看当前正在运行的容器
            -   在网页IP：端口即可访问
        -   `docker port ID或名字`   ：查看容器的端口映射：
        -   `docker logs -f ID或名字`  ：查看日志，容器内部的标准输出
        -   `docker topID或名字`  ：查看容器内部运行的进程
        -   `docker inspect ID或名字`  ：检查web应用程序，json记录docker的配置和状态信息

    5.  镜像使用

        -   `docker images` ：查看本机上的镜像

            -   **REPOSITORY：**表示镜像的仓库源
            -   **TAG：**镜像的标签
            -   **IMAGE ID：**镜像ID
            -   **CREATED：**镜像创建时间
            -   **SIZE：**镜像大小

        -   `docker pull ubuntu：13.10` ：下载新的镜像

        -   `docker search httpd` ：查找镜像

        -   `docker pull httpd` ：下载镜像

        -   `docker run httpd` ：运行镜像

        -   创建镜像：

            -   从已经创建的容器中更新镜像，并提交镜像

                -   更新之前，使用镜像创建一个容器：`docker run -t -i ubuntu:15.10 /bin/bash`
                -   进入容器内部使用`apt-get update`命令进行更新，然后退出容器，docker ps -l查看最后创建的容器的ID或名字
                -   提交容器副本：`docker commit -m="has update" -a="k" ID或名字 k/ubuntu:v1`
                    -   -m : 提交的描述信息
                    -   -a ：指定镜像作者
                    -   k/ubuntu:v1 : 指定创建的目标镜像名
                    -   `docker images` ： 查看新镜像
                    -   使用新的镜像启动容器：`docker run -t -i k/ubuntu:v1 /bin/bash`

            -   使用Dockerfile 指令来创建一个新的镜像

                -   `使用docker build` 从零开始创建一个新的镜像

                -   cnblogs.com/lsgxeva/p/8746644.html

                -   touch Dockerfile，然后进行编辑

                -   ```
                    FROM ubuntu:14.04
                    MAINTAINER KSs
                    RUN  /bin/sh -c apt-get install json
                    ```

    6.  容器连接

        -   `docker run -d -P --name appDemo training/webapp python app.py`  重命名

    7.  

### phpdocker配置

​	进入phpdocker.io网页，点击Genrator配置docker设置，打开MySql设置，提交，下载解压，在根目录创建public文件夹，进入创建index.php

### 启动服务

​	docker-compose up

​	网页访问：127.0.0.1:8090，可以访问到index.php网页

### 设置信息

端口号：8090

Mysql：8.0.x

MySql的root密码：1

数据库名字：KssDatabase

用户名：Kss

用户密码：1