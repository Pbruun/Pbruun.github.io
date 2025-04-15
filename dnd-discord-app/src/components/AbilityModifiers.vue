<template>
<div class="abilityMods">
      <div class="abilityMod">
        <button class="rollStr abilityBtn" @click="roll(abilitiesStore.strengthMod)"></button>
        <input class="strength score" type="text" v-model="abilitiesStore.strength"/>
        <input class="strengthMod modifier" type="text" :value="abilitiesStore.strengthMod"/>
      </div>
      <div class="abilityMod">
        <button class="rollDex abilityBtn" @click="roll(abilitiesStore.dexterityMod)"></button>
        <input class="dexterity score" type="text" v-model="abilitiesStore.dexterity"/>
        <input class="dexterityMod modifier" type="text" :value="abilitiesStore.dexterityMod"/>
      </div>
      <div class="abilityMod">
        <button class="rollCon abilityBtn" @click="roll(abilitiesStore.constitutionMod)"></button>
        <input class="constitution score" type="text" v-model="abilitiesStore.constitution"/>
        <input class="constitutionMod modifier" type="text" :value="abilitiesStore.constitutionMod"/>
      </div>
      <div class="abilityMod">
        <button class="rollInt abilityBtn" @click="roll(abilitiesStore.intelligenceMod)"></button>
        <input class="intelligence score" type="text" v-model="abilitiesStore.intelligence"/>
        <input class="intelligenceMod modifier" type="text" :value="abilitiesStore.intelligenceMod"/>
      </div>
      <div class="abilityMod">
        <button class="rollWis abilityBtn" @click="roll(abilitiesStore.wisdomMod)"></button>
        <input class="wisdom score" type="text" v-model="abilitiesStore.wisdom"/>
        <input class="wisdomMod modifier" type="text" :value="abilitiesStore.wisdomMod"/>
      </div>
      <div class="abilityMod">
        <button class="rollCha abilityBtn" @click="roll(abilitiesStore.charismaMod)"></button>
        <input class="charisma score" type="text" v-model="abilitiesStore.charisma"/>
        <input class="charismaMod modifier" type="text" :value="abilitiesStore.charismaMod"/>
      </div>
    </div>

</template>

<script lang="ts">
import { rollDice } from '@/util/roll';
import { defineComponent } from 'vue'
import { useAbilitiesStore } from '../stores/abilitiesStore.ts';

export default defineComponent({
  name: 'AbilityModifiers',
  setup() {
    const abilitiesStore = useAbilitiesStore();
    const roll = (mod: number) => {
      if(!isNaN(mod)){
        console.log(rollDice(20,mod));
      }
    }
    return { abilitiesStore, roll };
  }
})
</script>
<style scoped>

.abilityMods{
  position: absolute;
  top: 13.6em;
  width: 4.3em;
  left: 12em;
  height: 40em;
  /* border: 1px solid black; */

}

.abilityMod{
  margin-bottom: 1.2em;
}

.abilityMod .score{
  width: 100%;
  font-size: 30px;
  background-color: transparent;
  border: none;
  text-align: center;
}

.abilityMod .modifier{
  width: 50%;
  margin-right: 1.2em;
  margin-left: 1.2em;
  pointer-events: none;
  text-align: center;
  background-color: transparent;
  border: none;
}

.abilityBtn{
  width: 100%;
  height: 1.5em;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
.abilityBtn:hover{
  transition: 0.2s linear;
  background-color: rgba(0, 0, 0, 0.5);
  outline: solid 1px rgb(49, 49, 49);

}
</style>
