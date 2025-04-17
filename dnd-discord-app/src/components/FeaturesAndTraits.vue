<template>
  <div class="container">
    <textarea class="traits" v-model="featuresStore.personalityTraits"/>
    <textarea class="traits" v-model="featuresStore.ideals"/>
    <textarea class="traits" v-model="featuresStore.bonds"/>
    <textarea class="traits" v-model="featuresStore.flaws"/>
    <textarea class="features" v-model="featuresStore.featuresAndTraits"/>
  </div>
</template>

<script lang="ts">
import { useFeaturesStore } from '@/stores/featuresStore'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FeaturesAndTraits',
  setup() {
    const featuresStore = useFeaturesStore();
    return {featuresStore}
  }
})
</script>

<style scoped>
.container{
  position: absolute;
  top: 12em;
  width: 17em;
  left: 39em;
  height: 60em;
}

.traits:first-child{
  height: 5.5em;
}
.traits{
  margin-left: 1em;
  margin-top: 1.5em;
  height: 4em;
  width: 17.5em;
  border: none;
  resize: none;
  background-color: transparent;
  padding-left: 5px;
  padding-right: 5px;
  scrollbar-width: none;
}
.features{
  background-color: transparent;
  resize: none;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  margin-top:2.5em;
  margin-left: 0.2em;
  width: 19em;
  height: 39.8em;
  scrollbar-width: none;
}

</style>
