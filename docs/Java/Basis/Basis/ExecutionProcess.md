# 控制执行流程

## boolean-expression

结果为 true 或者 false 的表达式，例如 a==b 、 a.equal(b)...



## if - else if - else

```java
if(boolean-expression1) {
    statement1;
} else if(boolean-expression2) {
    statement2;
} else {
    statement3;
}
```

如果 boolean-expression1 为 true，则执行statement1；否则，如果 boolean-expression2 为 true，则执行statement2；否则执行statement3。



## switch

```java
switch (int-selector) {
    case int-value1:
        statement1;
        break;
    case int-value2:
        statement2;
        break;
    default:
        statement3;
}
```

其中，int-selector是一个能产生整数值的表达式，switch将这个表达式的结果与每个int-value值相比较。若有相符的，则执行对应的statement；否则，执行default后的statement。

int-selector：

- 在JDK1.5之前，只支持byte、short、char、int类型
- 在JDK1.5中，增加了枚举类与byte、short、char、int的包装类，对四个包装类的支持是因为java编译器在底层手动进行拆箱，而对枚举类的支持是因为枚举类有一个ordinal方法，该方法实际上是一个int类型的数值
- 在JDK1.7中，支持String类型，但实际上String类型有一个hashCode算法，结果也是int类型。而byte、short、char类型可以在不损失精度的情况下向上转型成int类型

​	总的来说，int-selector最终都只转换为int与int-value值进行比较

break:

​	如果 case 后对应的代码中没有 break; ，则当找到与int-selector相符的 int-value时，当前对应的statement以及之后的所有statement都将执行。



## for

```java
for (initialization; boolean-expression; step) {
	// statement
}
```

第一步： 对变量初始化，可以在initialization中创建新的变量

第二步：判断布尔表达式boolean-expression，如果表达式结果为true，则执行代码块statement；如果为false，则循环结束

第三步：执行statement完成后，执行step运算，一般是对循环变量进行加/减操作

第四步：在执行step之后，继续判断布尔表达式，按照第二步依次执行下去



## while

```java
while (booleam-expression) {
	// statement
}
```

当执行到 while 时，先判断布尔表达式 booleam-expression，如果该值返回 true，则执行 statement；否则，当前循环结束。在执行完statement之后，继续判断布尔表达式，依次循环



## do...while

```java
do {
	// statement
} while(boolean-expression);
```

do...while 和 while 的区别就是：do...while 先执行一次statement，再判断布尔表达式。即：无论布尔表达式结果为什么，do...while至少执行一次statement

## foreach

```
for (数据类型 变量 : 集合变量) {
	// statement
}
```

::: danger 注意

​	在Java 5中，引入了一种主要用于数组和集合遍历的增强型for循环，我们可以认为它是普通for循环的增强版

​	主要是用于处理数组或实现了 Iterable 接口的集合中的元素，而不必指定数组或集合的下标

​	foreach 循环处理集合时，底层使用的是 Iterable 迭代器，只用于遍历元素，而不能修改其中的元素

:::

数据类型： 应和数组|集合变量中保存的元素的数据类型一致

变量： 声明的一个变量，改变量的作用域范围为foreach循环

该循环是，从前往后正向遍历，每次遍历集合中的其中一个元素，即当前元素【变量】



## return

return 关键字有两种作用：a. 指定方法的返回值；b. 退出当前方法，不再继续执行当前方法之后的 statement



## break & continue

在任何循环语句的主体部分，都可以使用 break 或者 continue 控制循环的流程。

break 意味着强制退出循环，当前循环结束

continue 意味着停止执行当前的循环，直接执行下一次循环
