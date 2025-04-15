<template>
    <div @drop.prevent="onDrop" @dragenter.prevent @dragover.prevent class="dropzone">
      <div v-if="pdfLoadStore.pdfArrayBuffer !== null">
        <PdfDisplay></PdfDisplay>
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
  width: 76em;
  height: 95vh;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px dashed #fff;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
