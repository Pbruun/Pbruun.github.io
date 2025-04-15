<script setup lang="ts">
import DropZone from '@/components/DropZone.vue';
</script>

<template>
  <main>
    <div class="mainPage">
      <DropZone></DropZone>
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

.mainPage{
  display: flex;
    position: fixed;
    justify-self: anchor-center;
    height: 100%;
    width: 100%;
}

</style>
