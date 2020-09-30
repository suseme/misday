DV failed log tracing
===



```bash
export DATE=$(date +%Y%M%d%H%m%S)
mkdir -p /cache/dv_log_$DATE/
ps > /cache/dv_log_$DATE/ps.txt
top -n 1 > /cache/dv_log_$DATE/top.txt
logread > /cache/dv_log_$DATE/logread.txt
dmesg > /cache/dv_log_$DATE/dmesg.txt

echo 2 > /data/mcm-core/log_config.txt
cp -a /data/mcm-core/  /cache/dv_log_$DATE/

tar zcf /cache/dv_log_$DATE.tar.gz /cache/dv_log_$DATE/

adb pull /catch/dv_log_xxx.tar.gz

```

