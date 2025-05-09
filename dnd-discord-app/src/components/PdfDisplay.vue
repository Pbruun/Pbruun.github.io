<template>
<div class="container">
  <AbilitiesDisplay></AbilitiesDisplay>
  <BackgroundDisplay></BackgroundDisplay>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AbilitiesDisplay from './AbilitiesDisplay.vue';
import BackgroundDisplay from './BackgroundDisplay.vue';

export default defineComponent({
  name: 'PdfDisplay',
  components: { AbilitiesDisplay,BackgroundDisplay },

  setup() {

    return {};
  }

})
</script>
<style scoped>
.container {
  position: relative;
  overflow-y: auto;
  height: 57.3em;
  overflow-x: hidden;
  scrollbar-width: none;
}
</style>
