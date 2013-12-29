---
layout: post
title: Build Android Kernel
---

下载Android源码；   
下载kernel源码；

    export PATH=$(pwd)/prebuilt/linux-x86/toolchain/arm-eabi-4.4.0/bin:$PATH
    export ARCH=arm
    export SUBARCH=arm
    export CROSS_COMPILE=arm-eabi-
    cd msm8960-kernel
    make msm8960_defconfig
    make


