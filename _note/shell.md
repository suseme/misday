shell

===



# Linux SHELL if 命令参数说明


| | |
| ---- | ------------------------------------------------------------ |
| –b   | 当file存在并且是块文件时返回真                               |
| -c   | 当file存在并且是字符文件时返回真                             |
| -d   | 当pathname存在并且是一个目录时返回真                         |
| -e   | 当pathname指定的文件或目录存在时返回真                       |
| -f   | 当file存在并且是正规文件时返回真                             |
| -g   | 当由pathname指定的文件或目录存在并且设置了SGID位时返回为真   |
| -h   | 当file存在并且是符号链接文件时返回真，该选项在一些老系统上无效 |
| -k   | 当由pathname指定的文件或目录存在并且设置了“粘滞”位时返回真   |
| -p   | 当file存在并且是命令管道时返回为真                           |
| -r   | 当由pathname指定的文件或目录存在并且可读时返[回为真          |
| -s   | 当file存在文件大小大于0时返回真                              |
| -u   | 当由pathname指定的文件或目录存在并且设置了SUID位时返回真     |
| -w   | 当由pathname指定的文件或目录存在并且可执行时返回真。一个目录为了它的内容被访问必然是可执行的。 |
| -o   | 当由pathname指定的文件或目录存在并且被子当前进程的有效用户ID所指定的用户拥有时返回真。 |

复杂逻辑判断

| -a   | 与   |
| ---- | ---- |
| -o   | 或   |
| !    | 非   |



常见的shell函数参数

| $0   | Shell本身的文件名                                            |
| ---- | ------------------------------------------------------------ |
| $1   | Shell的第一个位置参数,一直到$9;当n>=10时,需要使用${n}来获取参数 |
| $#   | 传递到脚本的参数个数                                         |
| $*   | 以一个单字符串显示所有向脚本传递的参数                       |
| $$   | 脚本运行的当前进程ID号                                       |
| $!   | 后台运行的最后一个进程的ID号                                 |
| $@   | 与$*相同，但是使用时加引号，并在引号中返回每个参数。         |
| $-   | 显示Shell使用的当前选项，与set命令功能相同。                 |
| $?   | 显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。 |

 

# Shell 里面比较字符写法：

| -eq  | 等于         |
| ---- | ------------ |
| -ne  | 不等于       |
| -gt  | 大于         |
| -lt  | 小于         |
| -le  | 小于等于     |
| -ge  | 大于等于     |
| -z   | 空串         |
| =    | 两个字符相等 |
| !=   | 两个字符不等 |
| -n   | 非空串       |

 

# Conditional Logic on Files

| -a   | file exists.                                                 | 如果 FILE 存在则为真                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| -b   | file exists  and is a block special file.                    | 如果 FILE 存在且是一个块特殊文件则为真。                     |
| -c   | file exists  and is a character special file.                | 如果 FILE 存在且是一个字特殊文件则为真。                     |
| -d   | file exists  and is a directory.                             | 如果 FILE 存在且是一个目录则为真。                           |
| -e   | file exists  (just the same as -a).                          | 如果 FILE 存在则为真。                                       |
| -f   | file exists  and is a regular file.                          | 如果 FILE 存在且是一个普通文件则为真。                       |
| -g   | file exists  and has its setgid(2) bit set.                  | 如果 FILE 存在且已经设置了SGID则为真。                       |
| -G   | file exists  and has the same group ID as this process.      | 如果 FILE 存在且属有效用户组则为真。                         |
| -h   |                                                              | 如果 FILE 存在且是一个符号连接则为真。                       |
| -k   | file exists  and has its sticky bit set.                     | 如果 FILE 存在且已经设置了粘制位则为真。                     |
| -L   | file exists  and is a symbolic link.                         | 如果 FILE 存在且是一个符号连接则为真。                       |
| -n   | string  length is not zero.                                  |                                                              |
| -N   |                                                              | 如果 FILE 存在 and has been mod如果ied  since it was last read则为真。 |
| -o   | Named option  is set on.                                     | 如果 shell选项 "OPTIONNAME" 开启则为真。                     |
| -O   | file exists  and is owned by the user ID of this process.    | 如果 FILE 存在且属有效用户ID则为真。                         |
| -p   | file exists  and is a first in, first out (FIFO) special file or named pipe. | 如果 FILE 存在且是一个名字管道(F如果O)则为真。               |
| -r   | file exists  and is readable by the current process.         | 如果 FILE 存在且是可读的则为真。                             |
| -s   | file exists  and has a size greater than zero.               | 如果 FILE 存在且大小不为0则为真。                            |
| -S   | file exists  and is a socket.                                | 如果 FILE 存在且是一个套接字则为真。                         |
| -t   | file  descriptor number fildes is open and associated with a terminal device. | 如果文件描述符 FD 打开且指向一个终端则为真。                 |
| -u   | file exists  and has its setuid(2) bit set.                  | 如果 FILE 存在且设置了SUID (set user ID)则为真。             |
| -w   | file exists  and is writable by the current process.         | 如果 FILE 如果 FILE 存在且是可写的则为真。                   |
| -x   | file exists  and is executable by the current process.       | 如果 FILE 存在且是可执行的则为真。                           |
| -z   | string  length is zero.                                      |                                                              |

是用 -s 还是用 -f 这个区别是很大的！

 

From <http://www.jb51.net/article/34330.htm>

 

 

# 文档比较运算符

| f1 -nt f2            | 假如 f1比 f2新，则为真                           | [  /tmp/install/etc/services -nt /etc/services ] |
| -------------------- | ------------------------------------------------ | ------------------------------------------------ |
| f1 -ot f2            | 假如 f1比 f2旧，则为真                           | [  /boot/bzImage -ot arch/i386/boot/bzImage ]    |
| [ FILE1 -ef  FILE2 ] | 如果 FILE1 和 FILE2 指向相同的设备和节点号则为真 |                                                  |

 

# 字符串比较运算符 （请注意引号的使用，这是防止空格扰乱代码的好方法）

| -z  string             | 假如  string长度为零，则为真                                 | [  -z “$myvar” ]                 |
| ---------------------- | ------------------------------------------------------------ | -------------------------------- |
| -n  string             | 假如  string长度非零，则为真                                 | [  -n “$myvar” ]                 |
| String1  = string2     | 假如  string1和 string2相同，则为真                          | [  “$myvar” = “one two three” ]  |
| String1  != string2    | 假如  string1和 string2不同，则为真                          | [  “$myvar” != “one two three” ] |
| [ STRING1  < STRING2 ] | 如果 “STRING1” sorts before “STRING2”  lexicographically in the current locale则为真。 |                                  |
| [ STRING1  > STRING2 ] | 如果 “STRING1” sorts after “STRING2”  lexicographically in the current locale则为真。 |                                  |
| [ ARG1 OP  ARG2 ]      | “OP” is one of  -eq, -ne, -lt, -le, -gt or -ge. These arithmetic binary operators return true  if “ARG1” is equal to, not equal to, less than, less than or equal to,  greater than, or greater than or equal to “ARG2”, respectively. “ARG1” and  “ARG2” are integers. |                                  |
|                        |                                                              |                                  |

 

# 算术比较运算符

==============

| num1-eq  num2 | 等于       | [ 3 -eq  $mynum ] |
| ------------- | ---------- | ----------------- |
| num1-ne  num2 | 不等于     | [ 3 -ne  $mynum ] |
| num1-lt  num2 | 小于       | [ 3 -lt  $mynum ] |
| num1-le  num2 | 小于或等于 | [ 3 -le  $mynum ] |
| num1-gt  num2 | 大于       | [ 3 -gt  $mynum ] |
| num1-ge  num2 | 大于或等于 | [ 3 -ge  $mynum ] |

 

# shell判断文件,目录是否存在或者具有权限

```bash
#!/bin/sh

myPath="/var/log/httpd/"
myFile="/var /log/httpd/access.log"
```



## 这里的-x 参数判断$myPath是否存在并且是否具有可执行权限

```bash
if [ ! -x "$myPath" ]; then
  mkdir "$myPath"
fi
```

 

## 这里的-d 参数判断$myPath是否存在

```bash
if [ ! -d "$myPath" ]; then
  mkdir “$myPath”
fi
```



## 这里的-f参数判断$myFile是否存在

```bash
if [ ! -f “$myFile” ]; then
  touch “$myFile”
fi
```

 

## 其他参数还有-n,-n是判断一个变量是否是否有值

```bash
if [ ! -n “$myVar” ]; then
  echo “$myVar is empty”
  exit 0
fi
```

 

# 两个变量判断是否相等

```bash
if [ “$var1” = “$var2” ]; then
  echo ‘$var1 eq $var2’
else
  echo ‘$var1 not eq $var2’
fi
```

注意：if 的格式，语句中的空格不能少。



---

 

# shell 判断语句

流程控制 “if” 表达式 如果条件为真则执行then后面的部分：

```bash
if ...; then
  ...
elif ...; then
  ...
else
  ...
fi
```

 

大多数情况下，可以使用测试命令来对条件进行测试。比如可以比较字符串、判断文件是否存在及是否可读等等… 通常用” [ ] “来表示条件测试。注意这里的空格很重要。要确保方括号的空格。

|                     |                                             |
| ------------------- | ------------------------------------------- |
| `[ -f "somefile" ]` | 判断是否是一个文件                          |
| `[ -x "/bin/ls" ]`  | 判断/bin/ls是否存在并有可执行权限           |
| `[ -n "$var" ]`     | 判断$var变量是否有值                        |
| `[ ""$a" = "$b" ]`  | 判断$a和$b是否相等                          |
| `[ -r file ]`       | 用户可读为真                                |
| `[ -w file ]`       | 用户可写为真                                |
| -x file             | 用户可执行为真                              |
| -f file             | 文件为正规文件为真                          |
| -d file             | 文件为目录为真                              |
| -c file             | 文件为字符特殊文件为真                      |
| -b file             | 文件为块特殊文件为真                        |
| -s file             | 文件大小非0时为真                           |
| -t file             | 当文件描述符(默认为1)指定的设备为终端时为真 |



---



含条件选择的shell脚本

对于不含变量的任务简单shell脚本一般能胜任。但在执行一些决策任务时，就需要包含if/then的条件判断了。shell脚本编程支持此类运算，包括比较运算、判断文件是否存在等。基本的if条件命令选项有： -eq —比较两个参数是否相等（例如，if [ 2 –eq 5 ]）

-ne —比较两个参数是否不相等

-lt —参数1是否小于参数2

-le —参数1是否小于等于参数2

-gt —参数1是否大于参数2

-ge —参数1是否大于等于参数2

-f — 检查某文件是否存在（例如，if [ -f “filename” ]）

-d — 检查目录是否存在

 

几乎所有的判断都可以用这些比较运算符实现。

 

 

# $( )与\` \`

=======

在bash中，$( )与\` \`（反引号）都是用来作命令替换的。

命令替换与变量替换差不多，都是用来重组命令行的，先完成引号里的命令行，然后将其结果替换出来，再重组成新的命令行。

 

在操作上，这两者都是达到相应的效果，但是建议使用$( )，理由如下： 

1. ｀｀很容易与''搞混乱，尤其对初学者来说。
2. 在多层次的复合替换中，｀｀必须要额外的跳脱处理（反斜线），而$( )比较直观。
3. 最后，$( )的弊端是，并不是所有的类unix系统都支持这种方式，但反引号是肯定支持的。

 

# ${ }变量替换

一般情况下，$var与${var}是没有区别的，但是用${ }会比较精确的界定变量名称的范围 

```bash
$ A=B
$ echo ${A}B

BB
```

 

# 取路径、文件名、后缀

先赋值一个变量为一个路径，如下：

`file=/dir1/dir2/dir3/my.file.txt`

 

| 命令        | 解释                            | 结果                       |
| ----------- | ------------------------------- | -------------------------- |
| ${file#*/}  | 拿掉第一条 / 及其左边的字符串   | dir1/dir2/dir3/my.file.txt |
| ${file##*/} | 拿掉最后一条 / 及其左边的字符串 | my.file.txt                |
| ${file#*.}  | 拿掉第一个 . 及其左边的字符串   | file.txt                   |
| ${file##*.} | 拿掉最后一个 . 及其左边的字符串 | txt                        |
| ${file%/*}  | 拿掉最后一条 / 及其右边的字符串 | /dir1/dir2/dir3            |
| ${file%%/*} | 拿掉第一条 / 及其右边的字符串   | (空值)                     |
| ${file%.*}  | 拿掉最后一个 . 及其右边的字符串 | /dir1/dir2/dir3/my.file    |
| ${file%%.*} | 拿掉第一个 . 及其右边的字符串   | /dir1/dir2/dir3/my         |

记忆方法如下： 

1. \# 是去掉左边(在键盘上 # 在 $ 之左边)
2. % 是去掉右边(在键盘上 % 在 $ 之右边)
3. 单一符号是最小匹配;两个符号是最大匹配
4. *是用来匹配不要的字符，也就是想要去掉的那部分
5. 还有指定字符分隔号，与*配合，决定取哪部分

 

## 取子串及替换

 

| 命令              | 解释                               | 结果                           |
| ----------------- | ---------------------------------- | ------------------------------ |
| ${file:0:5}       | 提取最左边的 5 个字节              | /dir1                          |
| ${file:5:5}       | 提取第 5 个字节右边的连续 5 个字节 | /dir2                          |
| ${file/dir/path}  | 将第一个 dir 提换为 path           | /path1/dir2/dir3/my.file.txt   |
| ${file//dir/path} | 将全部 dir 提换为 path             | /path1/path2/path3/my.file.txt |
| ${#file}          | 获取变量长度                       | 27                             |

 

## 根据状态为变量赋值

| 命令                 | 解释                                                  | 备注                 |
| -------------------- | ----------------------------------------------------- | -------------------- |
| ${file-my.file.txt}  | 若 $file 没设定,则使用 my.file.txt 作传回值           | 空值及非空值不作处理 |
| ${file:-my.file.txt} | 若 $file 没有设定或为空值,则使用 my.file.txt 作传回值 | 非空值时不作处理     |
| ${file+my.file.txt}  | 若$file 设为空值或非空值,均使用my.file.txt作传回值    | 没设定时不作处理     |
| ${file:+my.file.txt} | 若 $file 为非空值,则使用 my.file.txt 作传回值         | 没设定及空值不作处理 |
| ${file=txt}          | 若 $file 没设定,则回传 txt ,并将  $file 赋值为  txt   | 空值及非空值不作处理 |
| ${file:=txt}         | 若 $file 没设定或空值,则回传 txt ,将  $file 赋值为txt | 非空值时不作处理     |
| ${file?my.file.txt}  | 若 $file 没设定,则将 my.file.txt 输出至 STDERR        | 空值及非空值不作处理 |
| ${file:?my.file.txt} | 若 $file没设定或空值,则将my.file.txt输出至STDERR      | 非空值时不作处理     |

 

## tips:

以上的理解在于, 你一定要分清楚 unset 与 null 及 non-null 这三种赋值状态. 一般而言, : 与 null 有关, 若不带 : 的话, null 不受影响, 若带 : 则连 null 也受影响.

 

# 数组

 ```bash
A="a b c def"  # 定义字符串

A=(a b c def)  # 定义字符数组b
 ```

 

| 命令     | 解释                            | 结果             |
| -------- | ------------------------------- | ---------------- |
| ${A[@]}  | 返回数组全部元素                | a b c def        |
| ${A[*]}  | 同上                            | a b c def        |
| ${A[0]}  | 返回数组第一个元素              | a                |
| ${#A[@]} | 返回数组元素总个数              | 4                |
| ${#A[*]} | 同上                            | 4                |
| ${#A[3]} | 返回第四个元素的长度，          | 即def的长度    3 |
| A[3]=xyz | 则是将第四个组数重新定义为  xyz |                  |

 

# $(( ))与整数运算

## bash中整数运算符号

| 符号      | 功能                      |
| --------- | ------------------------- |
| + - *  /  | 分别为加、减、乘、除      |
| %         | 余数运算                  |
| & \|  ^ ! | 分别为“AND、OR、XOR、NOT” |

在 $(( )) 中的变量名称,可于其前面加 $ 符号来替换,也可以不用。

```bash
$ a=5;b=7;c=2
$ echo $((a+b*c))
19

$ echo $(($a+$b*$c))
19
```

 

## 进制转换

$(( ))可以将其他进制转成十进制数显示出来。用法如下：

echo $((N#xx))

其中，N为进制，xx为该进制下某个数值，命令执行后可以得到该进制数转成十进制后的值。

 ```bash
$ echo $((2#110))  # 二进制转十进制
6

$ echo $((16#2a))  ＃ 十六进制转十进制
42

$ echo $((8#11))  ＃ 八进制转十进制
9
 ```

 

## (( ))重定义变量值

 

```bash
$ a=5;b=7
$ ((a++));echo $a
6

$ ((a--));echo $a
5

$ ((a<b));echo $?
0
```



使用(( ))作整数测试时，不要跟[ ]的整数测试搞混乱了。

  

# zip

 ```bash
zip 

unzip xxx.zip
 ```



# Kill special process

```bash
sudo kill -9 $(ps -aux | grep Can | grep -v grep |awk '{print $2}')
```

