<script setup lang="ts">
import DiceTray from '@/components/DiceTray.vue';
import DropZone from '@/components/DropZone.vue';
import MessageDisplay from '@/components/MessageDisplay.vue';
import { useWindowSize } from '@vueuse/core';
import { usePdfLoadStore } from '@/stores/pdfLoadStore';
const { width, height } = useWindowSize();
const pdfLoadStore = usePdfLoadStore();
</script>

<template>
  <main>
    <div class="errorMessage" v-if="pdfLoadStore.errorMessage">
      {{ pdfLoadStore.errorMessage }}
    </div>
    <div class="mainPage">
      <div :style="{order: width > 1660 ? 2 : 1,display:'flex',flexDirection:'row' }">
        <div v-if="width < 1660" class="border"></div>
        <DropZone></DropZone>
        <div v-if="width < 1660" class="border"></div>
      </div>
      <div :style="{order: width > 1660 ? 1 : 2}" v-if="width > 1660" class="sideItems">
        <MessageDisplay></MessageDisplay>
      </div>
      <div :style="{order: width > 1660 ? 3 : 2}" v-if="width > 1660"  class="diceTray">
        <DiceTray></DiceTray>
      </div>
      <div v-if="width < 1660" class="secondRow">
        <div style="width: 30em;" class="sideItems">
          <MessageDisplay></MessageDisplay>
        </div>
        <div style="width: 30em;" class="diceTray">
          <DiceTray ></DiceTray>
        </div>
      </div>
    </div>

  </main>
</template>


<style scoped>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
}
.errorMessage{
  position: absolute;
  right:0;
  height: 5em;
  width:15em;
  color: rgb(221, 40, 40);
  font-weight: bold;
  text-align: center;
  background-color: #f8f8f8a6;
  top: 0;
  margin: 20px;
}
.mainPage{
  display: flex;
  height: 100%;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
  flex-direction: row;
  overflow-y: auto;
  overflow-x: hidden;
}
.diceTray{
  margin-left: auto;
}
.sideItems{
  margin-right: auto;
}
.border{
  width:100%;
  height:100%;
  max-width:25em;
}
 .secondRow{
  display: flex;
  flex-direction: row;
  order: 2;
  margin-top: 5em;
 }
@media(max-width:1660px){
  .mainPage{
    flex-direction: column;
  }
}
</style>
