# Java基础

## 操作符

在最底层，Java的数据通过使用操作符来操作的。

### 分类

#### 赋值

赋值使用操作符"="。表示取符号右边的值，把它复制到左边。右值可以使任何常数、变量或者表达式(只要能生成一个值就行了)。但左值必须是一个明确的、已命名的变量。【常数不能作为左值】

- 对于基本数据类型的赋值是很简单的。基本类型存储了实际的数值，而非指向一个对象的引用，所以在为其赋值的时候，是直接将一个地方的内容复制到了另一个地方。例如，对基本数据类型使用a=b复制，则b变量的值赋值给了a。如果修改a，b是不会受影响的
- 但对一个对象进行操作时，真正操作的是该对象的引用，即：如果将一个对象赋值给另一个对象，实际上是将"引用"从一个地方复制到另一个地方。此时修改被赋值对象的属性值时，源对象的该属性值也会改变



#### 算术操作符

Java的基本算术操作符与其他大多数程序设计语言是相同的。其中包括加号(+)、减号(-)、除号(/)、乘号(*)以及取模操作符(%)。整数的除法会直接去掉结果的小数位(去尾法)，而非四舍五入

##### +



#### 自动递增(++)和递减(--)

##### ++a 和 a++



#### 关系操作符

关系操作符生成的是一个boolean结果，计算的是操作数的值之间的关系。

##### ==



#### 逻辑操作符

与(&&)、或(||)、非(!) 能根据逻辑的参数关系，生成一个布尔值(true或false)



#### 按位操作符

是用来操作整数基本数据类型中的单个比特，即二进制位。按位操作符会对两个参数中对应的位执行布尔代数运算，并最终生成一个结果

与(&)：只有两个输入位都为1时，结果才为1；否则全为0

或(|)：只要两个输入位中有一个为1，结果就为1；当两个输入位全为0的时候结果才为0

异或(^)：当两个输入位一个为1，另一个为0时，结果才为1,；否则为0

非(!)：属于一元操作符，只对一个操作数进行操作。输入与输出位是相反的值



#### 位移操作符

只可用来处理整数类型

左位移操作符(<<)能按照操作符右侧指定的位数将操作符左边的操作数向左移动(高位丢弃，低位补0)，相当于 * (2^n)

右位移操作符(>>)[相当于 / (2^n)]

​	带符号：向右移指定的位数，高位补符号位(正数补0，负数补1)，低位丢弃

​	无符号：向右移指定的位数，高位补0，低位丢弃



#### 三元操作符

```java
boolean-exp ? value0 : value1
```

如果 boolean-exp 的结果为true，则整个操作符最终的结果则为 value0 的值。

如果 boolean-exp 的结果为false，则整个操作符最终的结果则为 value1 的值



## 控制执行流程

### boolean-expression

结果为 true 或者 false 的表达式，例如 a==b 、 a.equal(b)...



### if - else if - else

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



### switch

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



### for





### while



### do...while

### foreach



### return

### break & continue



## 面向对象





## 异常

## 泛型

## 注解

## 反射

## 数组

## 代码校验



