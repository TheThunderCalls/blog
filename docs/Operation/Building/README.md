# 环境搭建

## Idea

## Java

### Windows

1] 下载并运行jdk-8-windows-x64.exe

2] 配置Java环境变量

| 变量名    | 变量值                                            |
| --------- | ------------------------------------------------- |
| JAVA_HOME | E:\java\jdk1.8【Java安装目录】                    |
| Path      | %JAVA_HOME%\bin【新增】                           |
| CLASSPATH | %JAVA_HOME%\lib;%JAVA_HOME%\lib\tool.jar;【新增】 |

3] 在cmd中，查看是否安装成功

> java -version

### Linux

1] 下载.tar.gz到Linux中，目录： /usr/local/java

2] 解压压缩包.tar.gz

> cd /usr/local/java
>
> tar -zxvf 

3] 配置环境变量

​	打开系统的环境变量文件，一般来说，是“/etc/profile”

​	在文件末尾添加：

```ini
export JAVA_HOME=/usr/local/java/jdk1.8.0_45
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

4] 更新环境变量

执行命令：

> source /etc/profile

5] 查看是否安装成功

执行命令：

> java -version

## Tomcat

### Windows

### Linux

1] 下载.tar.gz到Linux中，目录： /usr/local/tomcat

2] 解压压缩包.tar.gz

> cd /usr/local/tomcat
>
> tar -zxvf 

3] 配置环境变量[/etc/profile]

> export CATALINA_HOME=/usr/local/tomcat/tomcat8.5

4] 更新环境变量

执行命令：

> source /etc/profile

5] 启动tomcat

> cd /usr/local/tomcat/tomcat/bin
>
> ./startup.sh

6] 验证是否开启tomcat

在浏览器中访问 http://localhost:8080

非本地访问：1] 需要先关闭防火墙：service firewalld stop; 2] http://192.168.199.128:8080/



## MySQL

> 下载地址： https://dev.mysql.com/downloads/mysql/



### Windows

### Linux

> mysql-5.7.28-linux-glibc2.12-x86_64.tar.gz

0] 准备：卸载老版本MySQL

> find / -name mysql|xargs rm -rf

1] 解压压缩包.tar.gz

> cd /usr/local/mysql
>
> tar -zxvf 

2] 添加mysql用户及用户组

> groups mysql    #查询MySQL用户用户组是否存在
>
> groupadd mysql	
> useradd -r -g mysql mysql

3] 进入mysql解压目录更改权限

> cd /usr/local/mysql/mysql
>
> mkdir data
>
> chown -R mysql:mysql ./

注意：2] 3] 如果安装到root用户下，可以不执行用户[组]的修改，需要执行mkdir data

4] 添加mysql配置文件

/etc/my.cnf

```ini
[mysqld]
bind-address=0.0.0.0
port=3306
user=root
basedir=/usr/local/mysql/mysql
datadir=/usr/local/mysql/mysql/data
socket=/tmp/mysql.sock
log-error=/usr/local/mysql/mysql/mysql.err
pid-file=/usr/local/mysql/mysql/mysql.pid
character_set_server=utf8mb4
symbolic-links=0
explicit_defaults_for_timestamp=true
```

5] 初始化

> cd /usr/local/mysql/mysql/bin
>
> ./mysqld --defaults-file=/etc/my.cnf --basedir=/usr/local/mysql/mysql --datadir=/usr/local/mysql/mysql/data --user=root --initialize

密码：cat /usr/local/mysql/mysql/mysql.err

6] 将MySQL设置为系统服务

> cp /usr/local/mysql/mysql/support-files/mysql.server /etc/init.d/mysql

启动服务：

> service mysql start 

7] 登录

> ./mysql -uroot -p >sorHLjlo6ue

报错：./mysql: error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory

解决：

> sudo yum install libncurses*

8] 允许外部使用root用户访问并修改root用户密码

> use mysql
>
> update user set host = '%' where user = 'root';  
>
> ALTER USER 'root'@'%' identified by '123456';
>
> FLUSH PRIVILEGES;




