---
layout: post
title: C & C++ & Posix standard header files
excerpt:
tags: c c++ posix
categories: Tech
excerpt: Posix standard header files list
---

The C POSIX library is a specification of a C standard library for POSIX systems. It was developed at the same time as the ANSI C standard. Some effort was made to make POSIX compatible with standard C; POSIX includes additional functions to those introduced in standard C.

# ISO C标准定义的头文件(28项)
Header files | Remark
---|---
<assert.h> | 验证程序断言 Contains the assert macro, used to assist with detecting logical errors and other types of bug in debugging versions of a program.
<complex.h> C99 | 支持复数算术运算 A set of functions for manipulating complex numbers.
<ctype.h> | 字符类型 Defines set of functions used to classify characters by their types or to convert between upper and lower case in a way that is independent of the used character set (typically ASCII or one of its extensions, although implementations utilizing EBCDIC are also known).
<errno.h> | 出错码 For testing error codes reported by library functions.
<fenv.h> C99 | 浮点环境 Defines a set of functions for controlling floating-point environment.
<float.h> | 浮点常量
<inttypes.h> | 整型格式转换
<iso646.h> NA1 | 替代关系操作符宏
<limits.h> | 实现常量
<locale.h> | 局部类别
<math.h> | 数学常量
<setjmp.h> | 非局部goto
<signal.h> | 信号
<stdarg.h> | 可变参数表
<stdatomic.h> C11 | For atomic operations on data shared between threads.
<stdbool.h> C99 | 布尔类型和值
<stddef.h> | 标准定义
<stdint.h> C99 | 整型
<stdio.h> | 标准I/O库
<stdlib.h> | 实用程序库函数
<stdnoreturn.h> C11 | For specifying non-returning functions.
<string.h> | 字符串操作
<tgmath.h> C99 | 通用类型数学宏
<threads.h> C11 | Defines functions for managing multiple Threads as well as mutexes and condition variables.
<time.h> | 时间和日期
<uchar.h> C11 | Types and functions for manipulating Unicode characters.
<wchar.h> NA1 | 扩展的多字节和宽字符支持
<wctype.h> NA1 | 宽字符分类和映射支持

---

<assert.h>      Contains the assert macro, used to assist with detecting logical errors and other types of bug in debugging versions of a program.
<complex.h> C99 A set of functions for manipulating complex numbers.
<ctype.h>       Defines set of functions used to classify characters by their types or to convert between upper and lower case in a way that is independent of the used character set (typically ASCII or one of its extensions, although implementations utilizing EBCDIC are also known).
<errno.h>       For testing error codes reported by library functions.
<fenv.h>    C99 Defines a set of functions for controlling floating-point environment.
<float.h>       Defines macro constants specifying the implementation-specific properties of the floating-point library.
<inttypes.h>    C99 Defines exact width integer types.
<iso646.h>  NA1 Defines several macros that implement alternative ways to express several standard tokens. For programming in ISO 646 variant character sets.
<limits.h>      Defines macro constants specifying the implementation-specific properties of the integer types.
<locale.h>      Defines localization functions.
<math.h>        Defines common mathematical functions.
<setjmp.h>      Declares the macros setjmp and longjmp, which are used for non-local exits.
<signal.h>      Defines signal handling functions.
<stdalign.h>    C11 For querying and specifying the alignment of objects.
<stdarg.h>      For accessing a varying number of arguments passed to functions.
<stdatomic.h>   C11 For atomic operations on data shared between threads.
<stdbool.h> C99 Defines a boolean data type.
<stddef.h>      Defines several useful types and macros.
<stdint.h>  C99 Defines exact width integer types.
<stdio.h>       Defines core input and output functions
<stdlib.h>      Defines numeric conversion functions, pseudo-random numbers generation functions, memory allocation, process control functions
<stdnoreturn.h> C11 For specifying non-returning functions.
<string.h>      Defines string handling functions.
<tgmath.h>  C99 Defines type-generic mathematical functions.
<threads.h> C11 Defines functions for managing multiple Threads as well as mutexes and condition variables.
<time.h>        Defines date and time handling functions
<uchar.h>   C11 Types and functions for manipulating Unicode characters.
<wchar.h>   NA1 Defines wide string handling functions.
<wctype.h>  NA1 Defines set of functions used to classify wide characters by their types or to convert between upper and lower case

---

# C++ 标准库头文件
Refer to [cppreference.com](http://zh.cppreference.com/w/cpp/header)

## 工具库

Header files | Remark
---|---
<cstdlib> | 通用工具：程序控制、动态内存分配、随机数、排序与查找
<csignal> | 信号管理的函数与宏常量
<csetjmp> | 保存到执行环境的宏，及跳到执行环境的函数
<cstdarg> | 变长参数列表的处理
<typeinfo> | 运行时类型信息工具
<typeindex>(C++11 起) | std::type_index
<type_traits>(C++11 起) | 编译时类型信息
<bitset> | std::bitset 类模板
<functional> | 函数对象、函数调用、绑定操作、引用包装
<utility> | 多种工具组件
<ctime> | C 风格时间/日期工具
<chrono> | (C++11 起)	C++ 时间工具
<cstddef> | 标准宏和类型定义
<initializer_list> (C++11 起) | std::initializer_list 类模板
<tuple> (C++11 起) | std::tuple 类模板
<any> (C++17 起) | std::any 类
<optional> (C++17 起) | std::optional 类模板
<variant> (C++17 起) | std::variant 类模板
<compare> (C++20 起) | 三路比较运算符支持
<version> (C++20 起) | 提供依赖实现的库信息

### 动态内存管理
Header files | Remark
---|---
<new> | 低层内存管理工具
<memory> | 高层内存管理工具
<scoped_allocator> (C++11 起) | 嵌套分配器类
<memory_resource> (C++17 起) | 多态分配器及内存资源

### 数值极限
Header files | Remark
---|---
<climits> | 整数类型极限
<cfloat> | 浮点类型极限
<cstdint> (C++11 起) | 定长整数及其他类型的极限
<cinttypes> (C++11 起) | 格式化宏、 intmax_t 及 uintmax_t 数学工具及转换
<limits> | 查询算术类型属性的标准化方式

### 错误处理
Header files | Remark
---|---
<exception> | 异常处理工具
<stdexcept> | 标准异常对象
<cassert> | 将其参数与零比较的条件性编译宏
<system_error> (C++11 起) | 定义std::error_code，平台依赖的错误码
<cerrno> | 含有最近一次错误号的宏

## 字符串库
Header files | Remark
---|---
<cctype> | 确定字符数据中所含类型的函数
<cwctype> | 确定宽字符数据中所含类型的函数
<cstring> | 多种窄字符串处理函数
<cwchar> | 多种宽及多字节字符串处理函数
<cuchar> (C++11 起) | C 风格 Unicode 字符转换函数
<string> | std::basic_string 类模板
<string_view> (C++17 起) | std::basic_string_view 类模板
<charconv> (C++17 起) | std::to_chars 与 std::from_chars

## 容器库
Header files | Remark
---|---
<array> (C++11 起) | std::array 容器
<vector> | std::vector 容器
<deque> | std::deque 容器
<list> | std::list 容器
<forward_list> (C++11 起) | std::forward_list 容器
<set> | std::set 及 std::multiset 关联容器
<map> | std::map 及 std::multimap 关联容器
<unordered_set> (C++11 起) | std::unordered_set 及 std::unordered_multiset 无序关联容器
<unordered_map> (C++11 起) | std::unordered_map 及 std::unordered_multimap 无序关联容器
<stack> | std::stack 容器适配器
<queue> | std::queue 及 std::priority_queue 容器适配器
<span> (C++20 起) | std::span 视图

## 算法库
Header files | Remark
---|---
<algorithm> | 操作于容器上的算法
<execution> (C++17) | 算法并行版本的预定义执行策略

## 迭代器库
Header files | Remark
---|---
<iterator> | 容器迭代器

## 数值库
Header files | Remark
---|---
<cmath> | 常用数学函数
<complex> | 复数类型
<valarray> | 表示和操作值的数组的类
<random> (C++11 起) | 随机数生成器及分布
<numeric> | 容器中值的数值运算
<ratio> (C++11 起) | 编译时有理数算术
<cfenv> (C++11 起) | 浮点环境访问函数

## 输入/输出库
Header files | Remark
---|---
<iosfwd> | 所有输入/输出库中的类的前置声明
<ios> | std::ios_base 类、std::basic_ios 类模板及数个 typedef
<istream> | std::basic_istream 类模板及数个 typedef
<ostream> | std::basic_ostream 、 std::basic_iostream 类模板及数个typedef
<iostream> | 数个标准流对象
<fstream> | std::basic_fstream 、 std::basic_ifstream 、 std::basic_ofstream 类模板及数个typedef
<sstream> | std::basic_stringstream 、 std::basic_istringstream 、 std::basic_ostringstream 类模板及数个 typedef
<syncstream> (C++20 起) | std::basic_osyncstream 、 std::basic_syncbuf 及 typedef
<strstream> (弃用) | std::strstream 、 std::istrstream 、 std::ostrstream
<iomanip> | 控制输入输出格式的帮助函数
<streambuf> | std::basic_streambuf 类模板
<cstdio> | C 风格输入输出函数

## 本地化库
Header files | Remark
---|---
<locale> | 本地化工具
<clocale> | C 本地化工具
<codecvt> (C++11 起)(C++17 中弃用) | Unicode 转换设施

## 正则表达式库
Header files | Remark
---|---
<regex> (C++11 起) | 支持正则表达式处理的类、算法及迭代器

## 原子操作库
Header files | Remark
---|---
<atomic> (C++11 起) | 原子操作库

## 线程支持库
Header files | Remark
---|---
<thread> (C++11 起) | std::thread 类及支持函数
<mutex> (C++11 起) | 互斥原语
<shared_mutex> (C++14 起) | 共享的互斥原语
<future> (C++11 起) | 异步计算的原语
<condition_variable> (C++11 起) | 线程等待条件

## 文件系统库
Header files | Remark
---|---
<filesystem> (C++17 起) | std::path 类及支持函数

## 实验性库
Header files | Remark
---|---
<experimental/algorithm> (库基础 TS) | 标准库扩展及并行扩展
<experimental/any> (库基础 TS) | 标准库扩展
<experimental/chrono> (库基础 TS) | 标准库扩展
<experimental/deque> (库基础 TS) | 标准库扩展
<experimental/execution_policy> (并行 TS) | 并行扩展
<experimental/exception_list> (并行 TS) | 并行扩展
<experimental/filesystem> (文件系统 TS) | 文件系统库
<experimental/forward_list> (库基础 TS) | 标准库扩展
<experimental/future> (库基础 TS) | 标准库扩展
<experimental/list> (库基础 TS) | 标准库扩展
<experimental/functional> (库基础 TS) | 标准库扩展
<experimental/map> (库基础 TS) | 标准库扩展
<experimental/memory> (库基础 TS) | 标准库扩展
<experimental/memory_resource> (库基础 TS) | 标准库扩展
<experimental/numeric> (并行 TS) | 并行扩展
<experimental/optional> (库基础 TS) | 标准库扩展
<experimental/ratio> (库基础 TS) | 标准库扩展
<experimental/regex> (库基础 TS) | 标准库扩展
<experimental/set> (库基础 TS) | 标准库扩展
<experimental/string> (库基础 TS) | 标准库扩展
<experimental/string_view> (库基础 TS) | 标准库扩展
<experimental/system_error> (库基础 TS) | 标准库扩展
<experimental/tuple> (库基础 TS) | 标准库扩展
<experimental/type_traits> (库基础 TS) | 标准库扩展
<experimental/unordered_map> (库基础 TS) | 标准库扩展
<experimental/unordered_set> (库基础 TS) | 标准库扩展
<experimental/utility> (库基础 TS) | 标准库扩展
<experimental/vector> (库基础 TS) | 标准库扩展

# Posix
POSIX.1
## POSIX标准定义的必须的头文件(26项)
Header files | Remark
---|---
<dirent.h> | 目录项
<fcntl.h> | 文件控制
<fnmatch.h> | 文件名匹配类型
<glob.h> | 路径名模式匹配类型
<grp.h> | 组文件
<netdb.h> | 网络数据库操作
<pwd.h> | 口令文件
<regex.h> | 正则表达式
<tar.h> | tar归档值
<termios.h> | 终端I/O
<unistd.h> | 符号常量
<utime.h> | 文件时间
<wordexp.h> | 字扩展类型
<arpa/inet.h> | Internet定义
<net/if..h> | 套接字本地接口
<netinet/in.h> | Internet地址族
<netinet/tcp.h> | 传输控制协议定义
<sys/mman.h> | 内存管理声明
<sys/select.h> | select函数
<sys/socket.h> | 套接字接口
<sys/stat.h> | 文件状态
<sys/times.h> | 进程时间
<sys/types.h> | 基本系统数据类型
<sys/un.h> | UNIX域套接字定义
<sys/utsname.h>  |系统名
<sys/wait.h> | 进程控制

## POSIX标准定义的XSI扩展头文件(26项)
Header files | Remark
---|---
<cpio.h> | cpio归档值
<dlfcn.h> | 动态链接
<fmtmsg.h> | 消息显示结构
<ftw.h> | 文件树漫游
<iconv.h> | 代码集转换实用程序
<langinfo.h> | 语言信息常量
<libgen.h> | 模式匹配函数定义
<monetary.h> | 货币类型
<ndbm.h> | 数据库操作
<nl_types.h> | 消息类别
<poll.h> | 轮询函数
<search.h> | 搜索表
<strings.h> | 字符串操作
<syslog.h> | 系统出错日志记录
<ucontext.h> | 用户上下文
<ulimit.h> | 用户限制
<utmpx.h> | 用户帐户数据库
<sys/ipc.h> | IPC
<sys/msg.h> | 消息队列
<sys/resource.h> | 资源操作
<sys/sem.h> | 信号量
<sys/shm.h> | 共享存储
<sys/statvfs.h> | 文件系统信息
<sys/time.h> | 时间类型
<sys/timeb.h> | 附加的日期和时间定义
<sys/uio.h> | 矢量I/O操作
 
## POSIX标准定义的可选头文件(8项)
Header files | Remark
---|---
<aio.h> | 异步I/O
<mqueue.h> | 消息队列
<pthread.h> | 线程
<sched.h> | 执行调度
<semaphore.h> | 信号量
<spawn.h> | 实时spawn接口
<stropts.h> | XSI STREAMS接口
<trace.h> | 时间跟踪

---

<aio.h> Asynchronous input and output   Issue 5
<arpa/inet.h>   Functions for manipulating numeric IP addresses (part of Berkeley sockets)  Issue 6
<assert.h>  Verify assumptions   ??
<complex.h> Complex Arithmetic, see C mathematical functions     ??
<cpio.h>    Magic numbers for the cpio archive format   Issue 3
<dirent.h>  Allows the opening and listing of directories   Issue 2
<dlfcn.h>   Dynamic linking Issue 5
<errno.h>   Retrieving Error Number  ??
<fcntl.h>   File opening, locking and other operations  Issue 1
<fenv.h>    Floating-Point Environment (FPE), see C mathematical functions   ??
<float.h>   Floating-point types, see C data types   ??
<fmtmsg.h>  Message display structures  Issue 4
<fnmatch.h> Filename matching   Issue 4
<ftw.h> File tree traversal Issue 1
<glob.h>    Pathname "globbing" (pattern-matching)  Issue 4
<grp.h> User group information and control  Issue 1
<iconv.h>   Codeset conversion facility Issue 4
<inttypes.h>    Fixed sized integer types, see C data types  ??
<iso646.h>  Alternative spellings, see C alternative tokens  ??
<langinfo.h>    Language information constants – builds on C localization functions Issue 2
<libgen.h>  Pathname manipulation   Issue 4
<limits.h>  Implementation-defined constants, see C data types   ??
<locale.h>  Category macros, see C localization functions    ??
<math.h>    Mathematical declarations, see C mathematical functions  ??
<monetary.h>    String formatting of monetary units Issue 4
<mqueue.h>  Message queue   Issue 5
<ndbm.h>    NDBM database operations    Issue 4
<net/if.h>  Listing of local network interfaces Issue 6
<netdb.h>   Translating protocol and host names into numeric addresses (part of Berkeley sockets)   Issue 6
<netinet/in.h>  Defines Internet protocol and address family (part of Berkeley sockets) Issue 6
<netinet/tcp.h> Additional TCP control options (part of Berkeley sockets)   Issue 6
<nl_types.h>    Localization message catalog functions  Issue 2
<poll.h>    Asynchronous file descriptor multiplexing   Issue 4
<pthread.h> Defines an API for creating and manipulating POSIX threads  Issue 5
<pwd.h> passwd (user information) access and control    Issue 1
<regex.h>   Regular expression matching Issue 4
<sched.h>   Execution scheduling    Issue 5
<search.h>  Search tables   Issue 1
<semaphore.h>   POSIX semaphores    Issue 5
<setjmp.h>  Stack environment declarations   ??
<signal.h>  Signals, see C signal handling   ??
<spawn.h>   Process spawning    Issue 6
<stdarg.h>  Handle Variable Argument List    ??
<stdbool.h> Boolean type and values, see C data types    ??
<stddef.h>  Standard type definitions, see C data types  ??
<stdint.h>  Integer types, see C data types  ??
<stdio.h>   Standard buffered input/output, see C file input/output  ??
<stdlib.h>  Standard library definitions, see C standard library     ??
<string.h>  Several String Operations, see C string handling     ??
<strings.h> Case-insensitive string comparisons Issue 4
<stropts.h> Stream manipulation, including ioctl    Issue 4
<sys/ipc.h> Inter-process communication (IPC)   Issue 2
<sys/mman.h>    Memory management, including POSIX shared memory and memory mapped files    Issue 4
<sys/msg.h> POSIX message queues    Issue 2
<sys/resource.h>    Resource usage, priorities, and limiting    Issue 4
<sys/select.h>  Synchronous I/O multiplexing    Issue 6
<sys/sem.h> XSI (SysV style) semaphores Issue 2
<sys/shm.h> XSI (SysV style) shared memory  Issue 2
<sys/socket.h>  Main Berkley sockets header Issue 6
<sys/stat.h>    File information (stat et al.)  Issue 1
<sys/statvfs.h> File System information Issue 4
<sys/time.h>    Time and date functions and structures  Issue 4
<sys/times.h>   File access and modification times  Issue 1
<sys/types.h>   Various data types used elsewhere   Issue 1
<sys/uio.h> Vectored I/O operations Issue 4
<sys/un.h>  Unix domain sockets Issue 6
<sys/utsname.h> Operating system information, including uname   Issue 1
<sys/wait.h>    Status of terminated child processes (see wait) Issue 3
<syslog.h>  System error logging    Issue 4
<tar.h> Magic numbers for the tar archive format    Issue 3
<termios.h> Allows terminal I/O interfaces  Issue 3
<tgmath.h>  Type-Generic Macros, see C mathematical functions    ??
<time.h>    Type-Generic Macros, see C date and time functions   ??
<trace.h>   Tracing of runtime behavior (DEPRECATED)    Issue 6
<ulimit.h>  Resource limiting (DEPRECATED in favor of <sys/resource.h>) Issue 1
<unistd.h>  Various essential POSIX functions and constants Issue 1
<utime.h>   inode access and modification times Issue 3
<utmpx.h>   User accounting database functions  Issue 4
<wchar.h>   Wide-Character Handling, see C string handling   ??
<wctype.h>  Wide-Character Classification and Mapping Utilities, see C character classification  ??
<wordexp.h> Word-expansion like the shell would perform