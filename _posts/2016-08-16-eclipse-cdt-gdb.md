---
layout: post
title: Use eclipse+cdt and gdb to debug remote application
tags: IT
categories: gdb eclipse cdt
---

Ignore the gdb and gdbserver install on pc and target board.

#1. Debugger configuration
Press Run > Debug configurations... on menu bar.

Select "C/C++ Remote Application" on left side and press new button on the toolbar.

Input the name for this debug configuration, then open the configuration dialog.
![Debug Configuration main tab](/img/2016-08-16-eclipse-cdt-gdb/01.gdb-main.png)

- Input the path of the target application in the "C/C++ Application" text editor.
- Select "Disable auto build", because we will debug the remote application.
- Then click the "Select other..." in bottom to select a launch mode.

Select the "Manual Remote Debugging Launcher"

![Select a luanch mode](/img/2016-08-16-eclipse-cdt-gdb/02.gdb-select-other.png)

Goto the Debugger tab.
![Debugger tab](/img/2016-08-16-eclipse-cdt-gdb/03.gdb-debugger-main.png)
On this tab, we could set the gdb path which run on PC.

In the "Shared Libraries" we could set the shared libraries used by the target application.

Then goto the "Connection" tab, set the ip/port of the target board.
![gdb connnction setup](/img/2016-08-16-eclipse-cdt-gdb/04.gdb-debugger-connection.png)

After that, we have finished the debugger configuration. You could select this configuration on the toolbar and start debugging.

On target board, find the pid of the target application and run gdbserver

```
ps -A | grep xxx  # find the pid of the target application, e.g. 123
...
gdbserver --attache 192.168.53.53:2345 123 # replace the ip/port of your board, must match configured above.
```

#2. Breakpoints properties
Double click the line number where you want to add a breakpoint, then in the breakpoints window will lists the breakpoints you added.

Right click the one you want to configure.
![Breakpoints properties](/img/2016-08-16-eclipse-cdt-gdb/05.gdb-breakpoint-common.png)

- Set a condition for this breakpoint, e.g. x==2, will stop when x value is 2.

And you could set actions to be done of this breakpoint.
![Actions of breakpoints](/img/2016-08-16-eclipse-cdt-gdb/06.gdb-breakpoint-actions.png)

- "New"|"Edit..."|"Delete" buttons to manager "Available actions" configured;
- "Attach" button to attach selected action to this breakpoint;
- "Remove" button to remove an action from this breakpoint;
- "Up"|"Down" buttons to control the sequence of actions;

Log action to log a message when breakpoint.
![Log action](/img/2016-08-16-eclipse-cdt-gdb/07.gdb-breakpoint-actions-log.png)

Resume action to let the breakpoint go throug after xx seconds, and the precision is lack.
![Resume action](/img/2016-08-16-eclipse-cdt-gdb/08.gdb-breakpoint-actions-resume.png)