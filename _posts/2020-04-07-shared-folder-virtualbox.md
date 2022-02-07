---
layout: post
title: Shared folders in VirtualBox
excerpt:
tags: tools
categories: Tech
---

Shared folders in VirtualBox


# Mount automatically
Add current user to the group of vboxsf
```
sudo adduser [用户名] vboxsf
```
或者
```
sudo usermod -aG vboxsf $(whoami)
```

# Mount by self
Add the mount rule to `/etc/fstab`
```
vmshare /home/user/vmshare   vboxsf  rw,uid=1000,gid=1000,ttl=100        0       0
```