# Linux

## 简介

### 操作系统是什么

计算机是一台机器，它按照用户的要求接收信息、存储数据、处理数据，然后再将处理结果输出(文字、图片、音频、视频等)。计算机由硬件和软件组成：
			硬件是计算机来意工作的实体，包括显示器，键盘，鼠标，硬盘，CPU，主板等
			软件会按照用户的要求协调整台计算机的工作，比如windows、linux、Mac os、Android等操作系统，以及office、qq等应用程序

操作系统（Operation System， OS）是软件的一部分，它是硬件基础上的第一层软件，是硬件和其它软件沟通的桥梁（或者说接口、中间人、中介等）

操作系统会控制其它程序运行，管理系统资源，提供最基本的计算功能，如管理及配置内存，决定系统资源提供的优先次序等，同时还提供一些基本的服务程序，例如：

​	文件系统

​			提供计算机存储信息的结构，信息存储在文件中，文件主要存储在计算机的内部硬盘里，在目录的分层结构中组织文件。文件系统为操作系统提供了组织管理数据的方式

​	设备驱动程序

​		提供链接计算机的每个硬件设备的接口，设备驱动器使程序能够写入设备，而不需要了解执行每个硬件的细节

​	用户接口

​		操作系统需要为用户提供一种运行程序和访问文件系统的方法。如常用的windows图形界面，可以理解为一种用户与操作系统交互的方式

​	系统服务程序

​		当计算机启动时，会自启动许多系统服务程序，执行安装文件系统，启动网络服务，运行预定任务等操作

目前流行的服务器和 PC 端操作系统有 Linux、Windows、UNIX 等，手机操作系统有 Android、iOS、Windows Phone（简称 WP），嵌入式操作系统有 Windows CE、PalmOS、eCos、uClinux 等



### 系统结构



### 目录结构



### Linux一切皆文件

在Linux系统中，文件具体可分为以下几种类型：
1）普通文件
		类似mp4、pdf、html这样的，可以直接拿来使用的文件

2)目录文件
		目录即是文件

3）字符设备文件和块设备文件
		这些文件通常隐藏在/dev/目录下，当进行设备读取或外设交互时才会被使用
			例如：磁盘光驱属于块设备文件，串口设备则数据字符设备文件

4）套接字文件(socket)
	套接字文件一般隐藏在/var/run/目录下，用于进程间的网络通信

5)符号链接文件(symbolic link)
	类似与Windows中的快捷键，是指向另一个文件的简介指针(也就是软链接)

6）管道文件(pipe)
	主要用于进程间通信。



Linux使用注意事项
1）Linux严格区分大小写

2）Windows下的程序不能直接在Linux中使用

3）Linux不靠扩展名区分文件类型

4）Linux中所有内容(包括硬件设备)以文件形式保存
	Linux中所有内容都是以文件的形式保存和管理的(硬件设备也是文件)，这和windows完全不同，windows是通过设备管理器来管理硬件的。比如说，Linux的设备文件保存在/dev/目录中，硬件文件是/dev/sd[a-p]，光盘文件是/dev/hdc等

5)Linux中所有存储设备都必须在挂载之后才能使用
	Linux中所有的存储设备都有自己的设备文件名，这些设备文件必须在挂载之后才能使用，包括硬盘、U盘和光盘。
	挂载其实就是给这些存储设备分配盘符，只不过windows中的盘符用英文字母表示，而Linux中的盘符则是一个已经建立的空目录。我们把这些空目录叫做挂载点，把设备文件和挂载点(已建立的空目录)连接的过程叫做挂载

​		

## 命令

### swap -- 交换分区

查看进程对交换分区的占用情况

```shell
for i in $(ls /proc | grep "^[0-9]" | awk '$0>100'); do awk '/Swap:/{a=a+$2}END{print '"$i"',a/1024"M"}' /proc/$i/smaps;done| sort -k2nr | head
```



```shell
cat /proc/sys/vm/swappiness
```



```shell
swapoff -a
swapon -a
```

 

### kill -- 强制杀死进程

*<u>**遍历杀死多个进程**</u>*

```shell
ps -ef | grep tomcat | grep -v grep | cut -c 9-15 | xargs kill -9
```



### timeout -- 限制运行命令时间

​	如果在指定时间后仍在运行,则杀死该进程

```shell
timeout 5 tcpdump -i any dst host 192.168.27.67 and port 3306 -c 10 -X -v
```

​	5：tcpdump运行5s之后结束

### 文件管理



### 文档编辑

### 系统管理

### 磁盘管理

#### df -- 显示磁盘空间使用情况

##### 问题

###### df -h命令无响应

​	df -h命令和分区挂载有关，使用 mount 命令查看挂载情况，如果文件系统出问题需要及时卸载

### 文件传输

### 网络通讯

### 设备管理

#### mount | umount -- 【挂载 | 卸载】 文件系统



##### 卸载远程挂载的文件

```shell
umount -l ip:path
```

​	ip : 远程文件系统的IP地址

​	path : 挂载的具体路径【远程】

### 备份压缩

### 其他命令

## shell脚本

## 

## 应用

### 网络

### 防火墙