<template>
  <div class="backgroundImage">


    <div class="abilities">
      <!-- <img src="../assets/abilities.jpg"/> -->
      <input class="name" type="text" :value="abilitiesStore.characterName"/>
      <input class="classAndLevel" type="text" :value="abilitiesStore.classAndLevel"/>
      <input class="background" type="text" :value="abilitiesStore.background"/>
      <input class="playerName" type="text" :value="abilitiesStore.playerName"/>
      <input class="race" type="text" :value="abilitiesStore.race"/>
      <input class="alignment" type="text" :value="abilitiesStore.alignment"/>
      <input class="experience" type="text" :value="abilitiesStore.experience"/>
      <AbilityModifiers></AbilityModifiers>
      <span class="inspiration" @click="abilitiesStore.inspiration = !abilitiesStore.inspiration"  :value="abilitiesStore.inspiration">
        <span v-show="abilitiesStore.inspiration">X</span>
      </span>
      <input class="proficiencyBonus" type="text" :value="abilitiesStore.proficiencyBonus"/>
      <SkillModifiers></SkillModifiers>
      <input class="passivePerception" type="text" :value="skillsStore.perceptionPassive"/>
      <textarea class="otherProficiencies" type="text" :value="skillsStore.otherProficiencies"/>
      <ProtectionAndAttack></ProtectionAndAttack>
      <FeaturesAndTraits></FeaturesAndTraits>
    </div>
  </div>
</template>

<script lang="ts">
import { rollDice } from '@/util/roll';
import { defineComponent } from 'vue'
import { useAbilitiesStore } from '../stores/abilitiesStore.ts';
import AbilityModifiers from './AbilityModifiers.vue';
import SkillModifiers from './SkillModifiers.vue';
import { useSkillsStore } from '@/stores/skillsStore.ts';
import ProtectionAndAttack from './ProtectionAndAttack.vue';
import FeaturesAndTraits from './FeaturesAndTraits.vue';

export default defineComponent({
  name: 'AbilitiesDisplay',
  components: {AbilityModifiers,SkillModifiers,ProtectionAndAttack,FeaturesAndTraits},
  setup() {
    const abilitiesStore = useAbilitiesStore();
    const skillsStore = useSkillsStore();
    const roll = (value:number) => {
      if(!isNaN(value)){
        console.log(rollDice(20,value));
      }
    }

  return { abilitiesStore,roll,skillsStore };
  }
});
</script>

<style scoped>
.backgroundImage {
  background-image: url('../assets/abilities.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
}
.abilities {

  height: 76em;
  width: 76em;

}
.abilities img{
  object-fit: contain;
  vertical-align: bottom;
  width: 76em;
  height: 100%;
}

.name {
  width: 15em;
  height: 2em;
  position: absolute;
  left: 10em;
  top: 4em;
  font-size:20px;
  /* border: none; */
  background-color: transparent;

}
.classAndLevel {
  position: absolute;
  left: 39em;
  top:5em;
  width: 11.5em;
}

.background {
  position: absolute;
  top: 5em;
  width: 10em;
  left: 51em;
}

.playerName {
  position: absolute;
  top: 5em;
  width: 10em;
  left: 61.5em;
}

.race {
  position: absolute;
  top: 8em;
  width: 11.5em;
  left: 39em;
}
.alignment {
  position: absolute;
  top: 8em;
  width: 10em;
  left: 51em;
}

.experience{
  position: absolute;
  top: 8em;
  width: 10em;
  left: 61.5em;
}

.inspiration {
  position: absolute;
  top: 12.2em;
  left: 17.7em;
  height: 2.5em;
  width: 2.5em;
  color:black;
  cursor: pointer;
}
.inspiration span{
  display: block;
  font-size: 24px;
  text-align: center;
  user-select: none;
}

.proficiencyBonus{
  position:absolute;
  top:12.2em;
  left:13.4em;
  width: 1.8em;
  font-size: 20px;
  text-align: center;
  border: none;
  background-color: transparent;
}

.passivePerception{
  position: absolute;
  width: 1.8em;
  font-size: 20px;
  height: 2em;
  top: 42.2em;
  left: 8.7em;
  background-color: transparent;
  border: none;
  pointer-events: none;
  text-align: center;
}

.otherProficiencies{
  position: absolute;
  width: 15.5rem;
  font-size: 15px;
  height: 13em;
  top: 59.9em;
  left: 11.5em;
  background-color: transparent;
  border: none;
  scrollbar-width: none;
  resize: none;
  padding-left: 5px;
  padding-right: 5px;
}

</style>
