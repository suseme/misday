
# NvSciBufModule

```c
NvSciBufModule module = NULL;
NvSciError err;
 
err = NvSciBufModuleOpen(&module);
if (err != NvSciError_Success) {
    goto fail;
}
 
/* ... */
 
 
NvSciBufModuleClose(module);
```

