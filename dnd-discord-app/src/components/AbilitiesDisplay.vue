<template>
  <div class="backgroundImage">


    <div class="abilities">
       <CharacterInfoHeader class="characterHeader" :page-number="1"></CharacterInfoHeader>
      <AbilityModifiers></AbilityModifiers>
      <span class="inspiration" @click="abilitiesStore.inspiration = !abilitiesStore.inspiration"  :value="abilitiesStore.inspiration">
        <span v-show="abilitiesStore.inspiration">X</span>
      </span>
      <input class="proficiencyBonus" type="text" v-model="abilitiesStore.proficiencyBonus"/>
      <SkillModifiers></SkillModifiers>
      <input class="passivePerception" type="text" :value="skillsStore.perceptionPassive"/>
      <textarea class="otherProficiencies" type="text" v-model="skillsStore.otherProficiencies"/>
      <ProtectionAndAttack></ProtectionAndAttack>
      <FeaturesAndTraits></FeaturesAndTraits>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAbilitiesStore } from '../stores/abilitiesStore.ts';
import AbilityModifiers from './AbilityModifiers.vue';
import SkillModifiers from './SkillModifiers.vue';
import { useSkillsStore } from '@/stores/skillsStore.ts';
import ProtectionAndAttack from './ProtectionAndAttack.vue';
import FeaturesAndTraits from './FeaturesAndTraits.vue';
import CharacterInfoHeader from './CharacterInfoHeader.vue';

export default defineComponent({
  name: 'AbilitiesDisplay',
  components: {AbilityModifiers,SkillModifiers,ProtectionAndAttack,FeaturesAndTraits,CharacterInfoHeader},
  setup() {
    const abilitiesStore = useAbilitiesStore();
    const skillsStore = useSkillsStore();

  return { abilitiesStore,skillsStore };
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
  width: 59em;
  align-items: center;

}
.abilities img{
  object-fit: contain;
  vertical-align: bottom;
  height: 100%;
}
.characterHeader{
  margin-top: 4.7em !important;
}

.name {
  width: 15em;
  height: 2em;
  position: absolute;
  left: 3.7em;
  top: 4em;
  font-size:20px;
  /* border: none; */
  background-color: transparent;

}
.classAndLevel {
  position: absolute;
  left: 29.3em;
  top:5em;
  width: 11.5em;
}

.background {
  position: absolute;
  top: 5em;
  width: 10em;
  left: 41.5em;
}

.playerName {
  position: absolute;
  top: 5em;
  width: 10em;
  left: 52em;
}

.race {
  position: absolute;
  top: 8em;
  width: 11.5em;
  left: 29.3em;
}
.alignment {
  position: absolute;
  top: 8em;
  width: 10em;
  left: 41.5em;
}

.experience{
  position: absolute;
  top: 8em;
  width: 10em;
  left: 52em;
}

.inspiration {
  position: absolute;
  top: 12.2em;
  left: 9.3em;
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
  left:7em;
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
  left: 2.3em;
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
  left: 3em;
  background-color: transparent;
  border: none;
  scrollbar-width: none;
  resize: none;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
