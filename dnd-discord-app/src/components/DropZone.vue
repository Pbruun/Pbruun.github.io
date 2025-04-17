<template>
    <div @drop.prevent="onDrop" @dragenter.prevent @dragover.prevent class="dropzone" :class="pdfLoadStore.pdfArrayBuffer?'pdfActive':'pdfInactive'">
      <div v-if="pdfLoadStore.pdfArrayBuffer !== null">
        <PdfDisplay></PdfDisplay>
      </div>
      <div v-else class="addPdf">
        <span class="material-symbols-outlined">add</span>
      </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PdfDisplay from './PdfDisplay.vue';
import { usePdfLoadStore } from '@/stores/pdfLoadStore';
export default defineComponent({
    name: 'DropZone',
    components: { PdfDisplay },
    setup() {
      const pdfLoadStore = usePdfLoadStore();
      const onDrop = async (e: DragEvent) => {
        await pdfLoadStore.loadPdf(e);

      };
      return { onDrop,pdfLoadStore };
    }});

</script>


<style scoped>
.dropzone {
  height: 95vh;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}

.pdfInactive{
  background-color: rgba(39, 39, 39, 0.5);
  outline: 2px dashed #fff;
  width: 50em;
}

.pdfActive{
  background-color: transparent;
  border: none;
}
.addPdf{
  width: 100%;
  height: 100%;
  display: flex;
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  font-size: 10em;
  margin: auto;
  font-family: 'Material Symbols Outlined'!important;
}
@media(max-width:1660px){
  .dropzone{
    width: 100%;
  }
}

</style>
