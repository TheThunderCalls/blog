## JVM、JRE、JDK

### JVM

​	Java Virtual Machine，即Java虚拟机，运行在操作系统之上，存在于内存中，与内存打交道，与硬件没有直接交互，是Java语言实现跨平台的核心

​	JVM是一种抽象、虚拟出来的计算机，和实际的计算机一样，它具有指令集并使用不同的存储区域，负责执行指令，还要管理数据，内存和寄存器等

​	Java虚拟机是JRE的一部分，它是整个java实现跨平台的最核心的部分，负责解释执行字节码文件，是可运行java字节码文件的虚拟计算机。所有平台上的JVM向编译器提供相同的接口，而编译器只需要面向虚拟机，生成虚拟机能识别的代码，然后由虚拟机来解释执行

​	JVM主要负责运行Java编译器编译后的字节码文件(.class文件)。这些字节码只面向JVM，不同平台的JVM都是不同的，但是它们都提供了相同的接口。JVM是Java程序跨平台的关键部分，只要为不同平台实现了相应的虚拟机，编译后的Java字节码就可以在该平台上运行。把字节码编译成具体平台上的机器码执行。JVM自己无法执行，必须联合JRE中的Java基础和核心类库才能使用

### JRE

​	Java Runtime Environment，即Java运行环境，支持Java程序运行的标准环境，包含JVM标准实现及Java核心类库。JRE中包含了JVM，runtime class libraries和Java application launcher，这些是运行Java程序的必要组件。通过它，Java的开发者才得以将自己开发的程序发布到用户手中，让用户使用。

jre1.8目录包含：

​	bin：有java.exe但没有javac.exe，无法编译Java程序，但可以运行Java程序 [可以理解为JVM]

​	lib：Java基础和核心类库，如rt.jar，也包含JVM运行时需要的类库

### JDK

​	Java Development Kit，即Java开发工具包，是一个编写Java应用程序的开发环境，是Java的核心所在。

​	JDK是整个Java的核心，包括了JRE(Java运行环境)，同时在jdk文件夹bin目录中包含一些Java开发工具(例如：jconsole、javac、java、javadoc、native2ascii、jar等)。JDK = JRE + Java开发工具(编译器、反编译器、调试器等)

jdk1.8目录包含：

​	bin：一堆exe文件，可执行的开发工具

​	jre：java运行环境，包括JVM + Java基础和核心类库

​	lib：本地资源库，包含dt.jar + tools.jar的常用类库、开发依赖包

​	include：Java和JVM交互用的头文件









## Class文件、Jar包和war包

### class文件

#### 生成方案

​	class文件是通过编译Java源代码生成的，它包含了字节码和其他与类有关的元数据信息

##### 使用Java编译器(javac)

​	Java编译器(javac) 是Java开发工具包(JDK)的一部分，它可以将Java源代码编译成字节码文件(.class)。我们可以通过在命令行中运行javac命令来生成class文件。

##### 使用Java编译器提供的API

​	JavaCompiler 类的 run() 编译指定的Java源文件

##### 使用Java反射API

​	Java反射API提供了一种动态操作类和对象的机制，它可以在运行时生成类的实例、调用类的方法和访问类的字段等。我们可以使用Java反射API来动态生成一个Java类的字节码，并将其保存为class文件



##### 总结

​	生成Java class文件的两种方案：使用Java编译器和Java反射API。使用Java编译器可以轻松地将Java源代码编译成class文件，而使用Java反射API可以在运行时动态生成类的字节码并保存为class文件。



#### 执行class文件


