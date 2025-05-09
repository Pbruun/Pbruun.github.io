<template>
  <div class="header">
    <input class="name" type="text" v-model="abilitiesStore.characterName"/>
    <div class="infoBox" v-if="pageNumber === 1">
      <div class="row">
        <input class="infoInput" type="text" v-model="abilitiesStore.classAndLevel"/>
        <input class="infoInput" type="text" v-model="abilitiesStore.background"/>
        <input class="infoInput" type="text"v-model="abilitiesStore.playerName"/>
      </div>
      <div class="row">
        <input class="infoInput" type="text" v-model="abilitiesStore.race"/>
        <input class="infoInput" type="text" v-model="abilitiesStore.alignment"/>
        <input class="infoInput" type="text" v-model="abilitiesStore.experience"/>
      </div>
    </div>
    <div class="infoBox" v-if="pageNumber === 2">
      <div class="row">
        <input class="infoInput" type="text" v-model="backgroundStore.age"/>
        <input class="infoInput" type="text" v-model="backgroundStore.height"/>
        <input class="infoInput" type="text"v-model="backgroundStore.weight"/>
      </div>
      <div class="row">
        <input class="infoInput" type="text" v-model="backgroundStore.eyes"/>
        <input class="infoInput" type="text" v-model="backgroundStore.skin"/>
        <input class="infoInput" type="text" v-model="backgroundStore.hair"/>
      </div>
    </div>

  </div>

</template>

<script lang="ts">
import { useAbilitiesStore } from '@/stores/abilitiesStore';
import { useBackgroundStore } from '@/stores/backgroundStore';
import { defineComponent,ref, watch } from 'vue';
export default defineComponent({
  name: 'CharacterInfoHeader',
  props: {
    pageNumber:{type:Number,
      default:1
    }
  },
  setup() {
    const abilitiesStore = useAbilitiesStore();
    const backgroundStore = useBackgroundStore();

    return { abilitiesStore, backgroundStore };

  }
})
</script>

<style scoped>
.header{
  /* outline:1px solid black; */
  position: absolute;
  display: flex;
  margin-top: 5em;
  margin-left:5em;
}

.name{
  width: 15em;
  height: 2em;
  font-size:20px;
  border: none;
  background-color: transparent;
  margin-top: 0.5em;
  display: flex;
}
.infoBox{
  display: flex;
  font-size: 15px;
  flex-direction: column;
  margin-left: 0.5em;

}
.row{
  display: flex;
  flex-direction: row;
  margin-top:0.2em;
  margin-bottom: 1.3em;

}
.infoInput{
  width: 10em;
  margin-right: 0.5em;
  border:none;
  background-color: transparent;
}
.row .infoInput:first-child{
  width: 12em;
  margin-right: 0.3em;
}

</style>
