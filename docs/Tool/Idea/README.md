# Idea

## Debugger

### 远程debugger调试

> 远程debugger就是断点打在本地环境，但是代码跑在远程服务器上

#### tomcat服务

1] 找到远程服务器的tomcat，找到bin目录，打开catalina.sh服务，开启远程debug，重启tomcat

![Idea远程debug-linux](/assets/img/Idea-debug-linux.png)

> CATALINA_OPTS="-server -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8788"

注：address：ip

2] idea配置远程连接

![image-20230804103902992](/assets/img/Idea-debug-idea.png)

#### JDK
> 可以直接在 IDEA 中的 Edit Configuration 配置 Remote JVM Debug

![image-20240105024246380](/assets/img/jdk9-remote-configure.png)

将Command line arguments for remote JVM 下的 arguments 使用到生成高产量稻谷的时候，在不同版本号下，所生成的 arguments 都不一致	

JDK 9 or later ：

```
-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:8788
```

JDK 5 - 8：

```
-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8788
```

JDK 4：

```
-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8788
```

