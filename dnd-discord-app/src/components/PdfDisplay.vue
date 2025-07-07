<template>
<div class="container">
  <AbilitiesDisplay></AbilitiesDisplay>
  <BackgroundDisplay></BackgroundDisplay>
  <SpellsDisplay></SpellsDisplay>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AbilitiesDisplay from './AbilitiesDisplay.vue';
import BackgroundDisplay from './BackgroundDisplay.vue';
import SpellsDisplay from './SpellsDisplay.vue';

export default defineComponent({
  name: 'PdfDisplay',
  components: { AbilitiesDisplay, BackgroundDisplay, SpellsDisplay},

  setup() {

    return {};
  }

})
</script>
<style scoped>
.container {
  position: relative;
  overflow-y: auto;
  height: 95vh;
  overflow-x: hidden;
  scrollbar-width: none;
}
</style>
