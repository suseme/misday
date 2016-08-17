---
layout: post
title: Congestion control algorithms
excerpt: Congestion control algorithms
tags: tcp congestion
categories: IT
---

RFC5681

# 3. 拥塞控制算法

## 3.1 慢启动和拥塞避免
cwnd | 发送端
rwnd | 接收端
ssthresh | 决定使用哪种算法

IW

```
SWSS > 2190:
	IW = MIN(2 * SMSS, 2 segments)
SMSS > 1095 && SMSS <- 2190:
	IW = MIN(3 * SMSS, 3 segments)
SMSS <= 1095:
	IW = MIN(4 * SMSS, 4 segments)
```

cwnd < ssthresh | 使用慢启动算法
cwnd > ssthresh | 使用拥塞避免算法

慢启动算法

```
cwnd += min(N, SMSS)
```

拥塞避免算法

```
cwnd += 1 *　full-sized segment
cwnd += min(N, SMSS) # 每个RTT后
cwnd += SMSS * SMSS / cwnd # 常用的
```

发生超时重传时：
```
ssthresh = max(FlightSize / 2, 2 * SMSS)
cwnd = min(x, full-size segment)
```

## 3.2 快速重传/快速恢复

# 术语
- SEGMENT:
- SENDER MAXIMUM SEGMENT SIZE (SMSS): 
- RECEIVER MAXIMUM SEGMENT SIZE (RMSS):
- FULL-SIZED SEGMENT: 包含SMSS字节的segment
- RECEIVER WINDOW (rwnd): 最近通知到的接收窗口
- CONGESTION WINDOW (cwnd): 
- INITIAL WINDOW (IW): 初始的cwnd
- LOSS WINDOW (LW): 检测到丢包后的cwnd
- RESTART WINDOWN (RW): 重新开始传输的cwnd
- FLIGHT SIZE: 发送但是没有收到ack的数据大小
- DUPLICATE ACKNOWLEDGEMENT: 
- SELECTIVE ACKNOWLEDGEMENT (SACK): 
- Round-trip time (RTT): 

