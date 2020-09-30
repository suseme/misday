sed



sed的正则匹配

 

正则匹配IP和子网掩码

```bash
[root@localhost log]# ifconfig |sed -n '2p'
[root@localhost log]# ifconfig |sed -n '2p' | sed -r 's#.*r:(.*) B.*k:(.*)#\1 \2#g' 
# (.*)表示匹配的项,之后可以用\1取出第一个括号内匹配的内容，\2取出第二个括号内匹配的内容 
```



