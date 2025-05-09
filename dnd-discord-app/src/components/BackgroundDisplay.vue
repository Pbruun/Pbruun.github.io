<template>
  <div class="backgroundImage">
    <div class="background">
      <CharacterInfoHeader :page-number="2"></CharacterInfoHeader>
      <div class="appearanceAndAllies">
        <img :src="backgroundStore.appearance" class="appearance"/>
        <textarea class="allies" v-model="backgroundStore.allies"/>
        <div class="symbol-container">
          <input class="symbol-name" type="text" v-model="backgroundStore.symbolName"/>
          <!-- <img :src="backgroundStore.symbol" class="symbol"/> -->
        </div>
      </div>
      <div class="backstory-container">
          <textarea class="backstory" v-model="backgroundStore.backstory"/>
          <div class="feats-and-treasure">
            <textarea class="additional-feats" v-model="backgroundStore.additionalInfo"></textarea>
            <textarea class="treasure" v-model="backgroundStore.treasure"></textarea>
          </div>

        </div>
    </div>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CharacterInfoHeader from './CharacterInfoHeader.vue';
import { useBackgroundStore } from '@/stores/backgroundStore';
export default defineComponent({
  name: 'BackgroundDisplay',
  components: { CharacterInfoHeader },
  setup() {
    const backgroundStore = useBackgroundStore();
    return { backgroundStore };
  }
})
</script>
<style scoped>
.backgroundImage {
  background-image: url('../assets/background.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
}
:is(textarea, input){
  font-size: 13px;
}
.background {
  height: 76em;
  width: 59em;
  align-items: center;
}

.appearanceAndAllies{
  height: 21em;
  position: absolute;
  margin-top: 12.5em;
  margin-left: 3.3em;
  width: 59em;
  display: flex;
  flex-direction: row;
}
.appearance{
  height: 100%;
  margin-right: 2em;
  width: 16em;
}
.allies{
  height: 100%;
  width: 20em;
  border: none;
  background-color: transparent;
  resize: none;
  scrollbar-width: none;
}
.symbol-container{
  margin-left: 1.5em;
  margin-top: 2.2em;
  display: flex;
  flex-direction: column;
  width: 14em;
  height: 13em;
}
.symbol{
  width: 11em;
  margin: auto;
  height: 11em;
  object-fit: contain;
  color: transparent;
  background-color: transparent;

}
.symbol-name{
  border: none;
  background-color: transparent;
  text-align: center;
}

.backstory-container{
  display: flex;
  flex-direction: row;
  margin-top: 35.6em;
  width: 53em;
  margin-left: 3em;
  height: 38em;
  position: absolute
}
.backstory{
  height: 94%;
  width: 19em;
  margin-top: 1.5em;
  border: none;
  background-color: transparent;
  resize: none;
  padding: 5px;
  scrollbar-width: none;
}
.feats-and-treasure{
  margin-left: 1.5em;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35em;
  padding:5px;

}
.additional-feats{
  height: 53%;
  resize: none;
  border: none;
  scrollbar-width: none;
  background-color: transparent;
}
.treasure{
  margin-top: 2.5em;
  height: 40%;
  resize: none;
  border: none;
  background-color: transparent;
  scrollbar-width: none;
}

</style>
