
# Git:

​	Git是linus用c写的一个分布式版本控制系统

​	Github网站：为开源项目免费提供Git存储，jQuery，PHP，Ruby等

## 集中式：

​	版本库放在中央服务器，用时需要联网

## 分布式：

​	每个电脑上都有一个版本库，安全性高，不用联网，极其强大的分支管理

## 版本库：

​	repository，目录，这个目录里的所有文件都能被Git管理，每个文件的修改/删除，Git都能跟踪，方便查找历史和将来还原。但是无法跟踪二进制数据的变动，只能得到文件变大了多少kb，但是具体做了什么操作，控制系统无法得知。

## 工作区：

​	就是电脑里能看到的目录

## 暂存区：

​	需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

## 版本库（repository）：

​	![仓库流程](/home/k/图片/仓库流程.png)

​	工作区有一个隐藏的.git，这个不算工作区，而是版本库。

​	有些不愿被追踪的文件可以放在一个新建文件夹.gitignore里面

​	Git的版本库中有一个stage（index）的暂存区，还有个自动创建的分支master，以及之乡master的指针HEAD。

​	把文件添加到版本库里的步骤分两步：1.git add 添加 2.git commit 提交更改

​	因为Git自动创建了唯一一个分支master，所以commit就是往naster上提交更改

​	add 之后 commit 会将之前的所有加入的提交更改，加入第一次修改，add完了，再次修改，但是没有add添加，这时候只会提交第一次修改内容。

## 从本地连接添加远程仓库：

​	前提是本地已经有git控制库

1. 首先在github上创建一个git仓库
2. 然后在git仓库的目录下，`git  remote add origin 仓库网址`，与github上建立连

3. 然后将本地的仓库全部推送到github远程上，`git push -u origin master`

## 从本地克隆远程库：

​	假设本地没有库

​	1. `git  clone https://github.com/kssdesummer/gitskills`   ,将远程的控制库克隆到当前目录下。

​	2. ls	，可以看到当前目录下多出来远程的相关内容

## 创建/合并/删除新的分支：

​	1. `git branch 分支名`		创建分支

​	2. `git checkout 分支名`	切换分支

​	3. `git merge	分支名`		合并指定分支

​	4. `git checkout -d 分支名`		删除指定分支

## 解决冲突：

​	出现的原因是在分支上和master对统一文件作出了修改，并add/commit

​	将文件重新编辑后commit，使用 `git log --graph --pretty=oneline --abbrev-commit	`查看当前分支情况，然后无需合并可以直接删除

## 分支管理策略：

​	一般情况下合并分支用Fast forwad模式，删除分支后，会丢掉分支信息。

​	所以使用禁用，`git merge --no-ff -m "说明" 分支名`	；就是合并不删除原分支的历史纪录，可以看到做个合并，创建新的commit

### 分支策略：

​	平常开发在master用来提交信息，别的分支用来工作，工作之后用来合并到master分支上统一提交

## Bug分支：

​	当你正在工作时，你的本分支无法提交，又要处理bug，这时用stash功能把正在进行的“储藏”起来，修复bug之后再继续工作。

​	1. `git stash`		//存储当前分支

​	2. 修复bug

​	3. `git checkout 分支名`		//切换会你的存储的分支

​	4. `git stash list`		//查找原来的工作

​	5. 恢复工作：

​							 1.` git stash apply@{0}`		//恢复id是{0}不删除，用git stash drop 删除

​							 2. `git stash pop`		//恢复的同时把stash内容也删除了

## 远程分支：

​	`git push orgin dev `；就是将dev分支的内容退送给远程



##  git的命令行基本操作：

1. `git init`	//初始化一个git管理库
 	2.  `ls -ah`		//查看是否有.git文件，有则成功
 	3. `touch readme.txt`		//创建一个新的文本文档，用于测试git的用法
 	4. `vim readme.txt`			//编辑填入内容   i   ESC=> :wq 
  5. `git add readme.txt`		//告诉git添加一个文档git add . //添加当前目录下的所有文档
  6. `git commit -a -m ""` //添加并提交已修改的文档
  7. `git commit -m "wrote a readme file"	`	//提交    -m 是添加提交说明
  8. `git log`  	//查看之前的操作	--pretty=oneline  单行显示，方便查看	
  9. `git reset --hard HEAD^`		//退回往上的一个版本，HEAD~100就是往上一个版本
  10. `git reset --hard 版本号`		//只需要知道版本的前几位数字
  11. `git  reflog`		//查看每次命令
  12. `git status`		//查看暂存区的所有文件
  13. `git diff HEAD -- readme.txt`		//查看工作区和版本库里最新版本区别
  14. `git check -- readme.txt`		//将在提交前使用，r如果已提交则无法还原，eadme.txt文件在工作区的修改全部撤销掉，回到add或commit
  15. `git status`		//查看暂存区的在状态
  16. `git rm readme.txt` 	//删除工作区里的文件同时也要删除暂存区的文件
  17. `git commit -m "delete"	`	//提交删除命令
  18. `git remote add origin https://github.com/kssdesummer/learngit`		//(远程库网址)连接远程库，origin是指远程库的名字，可以另外设置，如果连接的远程库较多，则需要区别
  19. `git push -u origin master	`	//将本地库的所有信息推送到远程库上，输入账号密码
  20. `git remote -v	`	//查看项目远程地
  21. `git branch -a`		//查看当前所在分支（红色），以及其他分支
  22. `git  remote show origin`		//查看当前仓库其本信息
  23. `git remote rm origin`		//删除远程库origin
  24. `git checkout -b dev`		//创建并切换到dev分支 ：`git branch dev` ;  `dit checkout dev
  25. `git branch	`	//查看当前分支，代*为当前分支
  26. `git checkout master`		//切换会master分支
  27. `git merge dev`		//将指定分支合并到master上
  28. `git branch -d dev`		//删除指定分
  29. `git merge --no-ff -m "说明" 分支名`		//合并分支时禁止Fast forward模式，就是合并不删除原分支的历史纪录，可以看到做个合并，创建新的commit
  30. `git branch -D 分支名`		//删除未合并的分支
  31. `git pull origin master --allow-unrelated-histories` //拉取历史版本



### 放弃追踪

git reset HEAD 文件名

git rm -r --cached 文件名　　//不删除本地文件

git rm -r --f 文件名 　//删除本地文件



### 暂存修改

git stash 存储

git stash apply 恢复

git stash list 查看存储列表

git stash apply stash@{1}  恢复最近一次存储



相关链接 : https://blog.csdn.net/u012702547/article/details/78957937

# linux 常见命令

 1. `sudo apt-get install `包名   ：安装一个包

 2.  `cat`： 查看文件内容

 3. `chmod`：改变权限

 4. `diff`：对比两个文件的差异

 5. `find`：查找文件

 6. `touch`：创建文件或文件夹

 7. `mkdir`：创建文件夹

 8. `tar -zxvf 压缩包名`：解压包

 9. `vim 文档名`：编辑文本

 10. `mv 文件 地址`：移动文件

 11. `cp 文件 地址`：复制文件

     



# webstorm 的安装

​	https://www.linuxidc.com/Linux/2017-08/146059.htm

​	解压：`tar -zxvf WebStorm-191.8026.27.tar.gz`

​	激活码:

​	https://blog.csdn.net/lt326030434/article/details/90229298





## Github 加速

### 1 获取GitHub官方CDN地址

打开https://www.ipaddress.com/

查询以下三个链接的DNS解析地址 

1. github.com 
2. assets-cdn.github.com
3. github.global.ssl.fastly.net

修改hosts文件 : C:\Windows\System32\drivers\etc

​	ubuntu :cd ~/   == >su ==>  cd /etc/  ==>  vi hosts

将下面粘贴在最后一行:

github.com  192.30.253.112

assets-cdn.github.com 185.199.108.153

github.global.ssl.fastly.net 151.101.185.194

最后在终端,刷新dns

sudo /etc/init.d/networking restart 

###  无法切换分支

​	报错:工作区中下列未跟踪的文件将会因为检出操作而被覆盖:

解决办法: git clean -d -fx  清除未跟踪文件

https://blog.csdn.net/qq_28114645/article/details/79711923



#### 存储github登录密码

git fetch 先刷新远程库

git config --global credential.helper store  存储github登录密码



### 小组推送内容

1. 进行操作之前在dev先将远程dev分支拉下来	pull
2. checkout dev-kangjinghao 然后pull 远程dev-kang ，拉远程 dev
3. 操作 add commit
4. push 远程 dev-kangjinghao 



组长：
加班内容：
拉取远程所有组员的分支到本地；拉取远程dev分支到本地dev分支；
将本地所有组员的内容合并到本地dev分支上；
再将本地dev推送到远程dev分支上。

产生冲突:
查看冲突是由哪个组员提交的以及冲突的分支是哪个组员的。

<<<<<<<<<

当前最新内容

`==========================`

本地库内容

`>>>>>>>>>>>>>>>>>>>>>`