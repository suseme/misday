# NvMedia2D NvSciSync API Usage

```c
/* ************ Init-time **********/
NvSciSyncModule   nvscisyncModule;
NvSciError        nverr;
NvSciSyncAttrList nvscisyncattr_w;
NvSciSyncAttrList nvscisyncattr_s;
NvSciSyncAttrList nvscisyncattr_unreconciled_h[2];
NvSciSyncAttrList nvscisyncattr_reconciled;
NvSciSyncAttrList ConflictAttrList;
NvSciSyncFence eofnvscisyncfence = NV_SCI_SYNC_FENCE_INITIALIZER;
NvSciSyncObj nvscisyncEOF, nvscisyncpre;
 
nvm2dhdl = NvMedia2DCreate(nvmdevice);
nverr = NvSciSyncModuleOpen(&nvscisyncModule);
 
/**********NvMedia 2D as signaler ************/
 
 
nverr =  NvSciSyncAttrListCreate(nvscisyncModule, &nvscisyncattr_s);
nvmstatus = NvMedia2DFillNvSciSyncAttrList(nvscisyncattr_s, NVMEDIA_SIGNALER);
nvscisyncattr_unreconciled_h[0] = nvscisyncattr_s;
nvscisyncattr_unreconciled_h[1] = get attribute list from the appropriate waiter;
nverr =  NvSciSyncAttrListReconcile(nvscisyncattr_unreconciled_h[],
             2 , &nvscisyncattr_reconciled, &ConflictAttrList);
nverr =  NvSciSyncObjAlloc(nvscisyncattr_reconciled, &nvscisyncEOF);
 
/**********NvMedia 2D as waiter ************/
 
 
nverr =  NvSciSyncAttrListCreate(&nvscisyncattr_w);
nvmstatus = NvMedia2DFillNvSciSyncAttrList(nvscisyncattr_w, NVMEDIA_WAITER);
 
/*If the signaler is also in the same process as the 2D Waiter, then
NvSciSyncAttrListReconcileAndObjAlloc or NvSciSyncAttrListReconcile and
NvSciSyncObjAlloc API pair has/have to be used to allocate nvscisyncpre NvSciScynObject.
If the signaler is in a different process/VM than the 2D Waiter, then
NvSciSyncAttrList export/import APIs and NvSciSyncObjIpc Export/Import APIs
have to be used allocate a NvSciSyncObject on signaler and waiter sides.
nvscisyncpre is the imported NvSciSyncObject on the waiter side */
 
/*All the NvSciSyncObjects(NvSciSyncObjects associated with PreFences, EOFFence) which will be used by NvMedia2D must be registered upfront. */
/* **********Start of Registration of NvSciSync Objects ************/
 
 nvmstatus = NvMedia2DRegisterNvSciSyncObj(nvm2dhdl, NVMEDIA_EOFSYNCOBJ, nvscisyncEOF);
 
/* Register all the NvSciSync objects which will be used to generate prefences for NvMedia2DBlit operation. nvscisyncpre is one such Pre NvSciSync object */
nvmstatus = NvMedia2DRegisterNvSciSyncObj(nvm2dhdl, NVMEDIA_PRESYNCOBJ, nvscisyncpre);
/**********End of Registration of NvSciSync Objects ************/
  
/*Allocate a NvMediaImage for input, say inputimg */
/*Allocate a NvMediaImage for output, say outputimg */
 
/******End of Init-time and Start of Run-time *********/
 
nvmstatus = NvMedia2DSetNvSciSyncObjforEOF(nvm2dhdl, nvscisyncEOF);
   
/*Get a nvscisyncfence from somewhere(maybe a eofnvscisyncfence of some other engine operation) which neeeds to be inserted as prefence for 2DBlit operation. prenvscisyncfence is one such NvSciSyncFence. */
 
nvmstatus = NvMedia2DInsertPreNvSciSyncFence(nvm2dhdl, prenvscisyncfence);
nvmstatus = NvMedia2DBlitEx(nvm2dhdl, outputimg, NULL, inputimg, NULL,
               2dblitparams, paramsout);
 
nvmstatus = NvMedia2DGetEOFNvSciSyncFence(nvm2dhdl, nvscisyncEOF, &eofnvscisyncfence);
   
  /*eofnvscisyncfence may be used as prefence for some other engine operation
  or application can decide to wait on CPU till their expiry using NvSciSyncWait API. */
 
  /* ************* End of Run time ****************
  /*Unregister all of the registered NvSciSync objects */
nvmstatus = NvMedia2DUnRegisterNvSciSyncObj(nvm2dhdl, nvscisyncEOF);
nvmstatus = NvMedia2DUnRegisterNvSciSyncObj(nvm2dhdl, nvscisyncpre);
NvSciSyncAttrListFree(nvscisyncattr_w);
NvSciSyncAttrListFree(nvscisyncattr_s);
NvSciSyncAttrListFree(nvscisyncattr_reconciled);
NvSciSyncObjFree(nvscisyncEOF);
NvSciSyncObjFree(nvscisyncpre);
NvSciSyncModuleClose(nvscisyncModule);
```