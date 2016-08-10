---
layout: post
title: pyqt 编译ui文件qrc文件
categories: Python
tags: pyqt
---

+ 编译ui文件
```
D:\bin\Python27\Lib\site-packages\PyQt4\pyuic4.bat -x main.ui -o main.py
```

+ 编译qrc文件
```
D:\bin\Python27\Lib\site-packages\PyQt4\pyrcc4.exe res.qrc -o res_rc.py
```
