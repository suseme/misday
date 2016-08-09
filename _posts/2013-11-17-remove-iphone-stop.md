---
layout: post
title: 解除Iphone停用
categories: IT
tags: ios
---

输错了太多次密码，很不幸，iPhone被停用了。


使用xxx工具连上iphone，找到以下文件（未出轨的iphone恐怕有点困难）：  
/var/mobile/Library/Preferences/com.apple.springboard.plist
    
    <dict>
    ...
    	<key>SBDeviceLockBlockTimeIntervalSinceReferenceDate</key>
    	<real>0</real> # 锁定时间
    	<key>SBDeviceLockFailedAttempts</key>
    	<integer>0</integer> # 已输错的次数
    ...
    </dict>
    
修改以上两个值，重启iPhone。
