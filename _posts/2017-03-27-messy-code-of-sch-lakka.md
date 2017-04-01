---
layout: post
title: Lakka的中文乱码问题
excerpt: Fix messy code of simple chinese on lakka
tags: lakka libretro game
categories: IT
---

1. SSH登录，具体步骤请参考官网[Accessing Lakka command line interface](http://www.lakka.tv/doc/Accessing-Lakka-command-line-interface/ "Accessing Lakka command line interface")。
2. 复制一个有中文字体的font.ttf文件到`/storage/assets/xmb/monochrome/`目录下。  
比如：
 - a. 将xx的字体拷贝到`\\lakka\System\`下并重命名为font.ttf;
 - b. SSH到lakka上，将字体移动到指定目录;
```
mv ~/system/font.ttf ~/assets/xmb/monochrome/
```
3. 重启下，可能也不需要重启，然后再设置为中文。


