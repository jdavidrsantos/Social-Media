<script setup lang="ts">
// 监听全局复制事件
import { appWindow } from '@tauri-apps/api/window'
import { listenClip } from './composables'
if ((window as any).__TAURI__)
  appWindow.listen('ClipboardEvent', listenClip)
</script>

<template>
  <main font-sans px4 text="center gray-700 dark:gray-200">
    <Menu />
    <router-view />
    <Footer />

<div class="file" >
  <a  class="file" href="../PendingPC.xlsx" download="Pictures and Dynosheets Pending">
         <button type="button">Files Pending to Upload</button>
         <img src="../Excel-PNG-Image.png" alt="" srcset="">
         </a>
</div>

  </main>
</template>

<style scoped>
.file{
margin: 10px;
text-align: center;
justify-content: center;
align-items: center;
width: 40%;
  
  margin-left: auto;
  margin-right: auto;
  width: 50%;
   max-width: 100%;
 max-height: 100%;
}
.file img{
margin: 10px;
text-align: center;
justify-content: center;
align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
   max-width: 8%;
 max-height: 8%;

}

</style>>
