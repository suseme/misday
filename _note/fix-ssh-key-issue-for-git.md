Fix ssh key issue for git
===

If you are beset with by this issue,

```
$ git pull
load pubkey "/c/Users/wvg1szh/.ssh/id_rsa": invalid format
```

Try to repair the public key,
```
ssh-keygen -f ./id_rsa -y > ./id_rsa.pub
```

