<template>
  <div class="container">
    <div class="savingThrows">
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.strengthProficiency ? 'proficient' : ''}`" @click="skillsStore.strengthProficiency = !skillsStore.strengthProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.strength"/>
        <button class="skillBtn" @click="roll(skillsStore.strength)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.dexterityProficiency ? 'proficient' : ''}`" @click="skillsStore.dexterityProficiency = !skillsStore.dexterityProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.dexterity"/>
        <button class="skillBtn" @click="roll(skillsStore.dexterity)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.constitutionProficiency ? 'proficient' : ''}`" @click="skillsStore.constitutionProficiency = !skillsStore.constitutionProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.constitution"/>
        <button class="skillBtn" @click="roll(skillsStore.constitution)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.intelligenceProficiency ? 'proficient' : ''}`" @click="skillsStore.intelligenceProficiency = !skillsStore.intelligenceProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.intelligence"/>
        <button class="skillBtn" @click="roll(skillsStore.intelligence)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.wisdomProficiency ? 'proficient' : ''}`" @click="skillsStore.wisdomProficiency = !skillsStore.wisdomProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.wisdom"/>
        <button class="skillBtn" @click="roll(skillsStore.wisdom)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.charismaProficiency ? 'proficient' : ''}`" @click="skillsStore.charismaProficiency = !skillsStore.charismaProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.charisma"/>
        <button class="skillBtn" @click="roll(skillsStore.charisma)"></button>
      </div>



    </div>
    <div class="skills">
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.acrobaticsProficiency ? 'proficient' : ''}`" @click="skillsStore.acrobaticsProficiency = !skillsStore.acrobaticsProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.acrobatics"/>
        <button class="skillBtn" @click="roll(skillsStore.acrobatics)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.animalHandlingProficiency ? 'proficient' : ''}`" @click="skillsStore.animalHandlingProficiency = !skillsStore.animalHandlingProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.animalHandling"/>
        <button class="skillBtn" @click="roll(skillsStore.animalHandling)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.arcanaProficiency ? 'proficient' : ''}`" @click="skillsStore.arcanaProficiency = !skillsStore.arcanaProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.arcana"/>
        <button class="skillBtn" @click="roll(skillsStore.arcana)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.athleticsProficiency ? 'proficient' : ''}`" @click="skillsStore.athleticsProficiency = !skillsStore.athleticsProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.athletics"/>
        <button class="skillBtn" @click="roll(skillsStore.athletics)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.deceptionProficiency ? 'proficient' : ''}`" @click="skillsStore.deceptionProficiency = !skillsStore.deceptionProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.deception"/>
        <button class="skillBtn" @click="roll(skillsStore.deception)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.historyProficiency ? 'proficient' : ''}`" @click="skillsStore.historyProficiency = !skillsStore.historyProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.history"/>
        <button class="skillBtn" @click="roll(skillsStore.history)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.insightProficiency ? 'proficient' : ''}`" @click="skillsStore.insightProficiency = !skillsStore.insightProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.insight"/>
        <button class="skillBtn" @click="roll(skillsStore.insight)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.intimidationProficiency ? 'proficient' : ''}`" @click="skillsStore.intimidationProficiency = !skillsStore.intimidationProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.intimidation"/>
        <button class="skillBtn" @click="roll(skillsStore.intimidation)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.investigationProficiency ? 'proficient' : ''}`" @click="skillsStore.investigationProficiency = !skillsStore.investigationProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.investigation"/>
        <button class="skillBtn" @click="roll(skillsStore.investigation)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.medicineProficiency ? 'proficient' : ''}`" @click="skillsStore.medicineProficiency = !skillsStore.medicineProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.medicine"/>
        <button class="skillBtn" @click="roll(skillsStore.medicine)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.natureProficiency ? 'proficient' : ''}`" @click="skillsStore.natureProficiency = !skillsStore.natureProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.nature"/>
        <button class="skillBtn" @click="roll(skillsStore.nature)"></button>
      </div>      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.perceptionProficiency ? 'proficient' : ''}`" @click="skillsStore.perceptionProficiency = !skillsStore.perceptionProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.perception"/>
        <button class="skillBtn" @click="roll(skillsStore.perception)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.performanceProficiency ? 'proficient' : ''}`" @click="skillsStore.performanceProficiency = !skillsStore.performanceProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.performance"/>
        <button class="skillBtn" @click="roll(skillsStore.performance)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.persuasionProficiency ? 'proficient' : ''}`" @click="skillsStore.persuasionProficiency = !skillsStore.persuasionProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.persuasion"/>
        <button class="skillBtn" @click="roll(skillsStore.persuasion)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.religionProficiency ? 'proficient' : ''}`" @click="skillsStore.religionProficiency = !skillsStore.religionProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.religion"/>
        <button class="skillBtn" @click="roll(skillsStore.religion)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.sleightOfHandProficiency ? 'proficient' : ''}`" @click="skillsStore.sleightOfHandProficiency = !skillsStore.sleightOfHandProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.sleightOfHand"/>
        <button class="skillBtn" @click="roll(skillsStore.sleightOfHand)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.stealthProficiency ? 'proficient' : ''}`" @click="skillsStore.stealthProficiency = !skillsStore.stealthProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.stealth"/>
        <button class="skillBtn" @click="roll(skillsStore.stealth)"></button>
      </div>
      <div class="skill">
        <span class="proficiencyDot" :class="`${skillsStore.survivalProficiency ? 'proficient' : ''}`" @click="skillsStore.survivalProficiency = !skillsStore.survivalProficiency" />
        <input class="modifier" type="text" v-model="skillsStore.survival"/>
        <button class="skillBtn" @click="roll(skillsStore.survival)"></button>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useSkillsStore } from '../stores/skillsStore.ts';
import { rollDice } from '@/util/roll.ts';

export default defineComponent({
  name: 'SkillModifiers',
  setup(){
    const skillsStore = useSkillsStore();
    const roll = (value:string) => {
      const valueNumber = parseInt(value);
      if(!isNaN(valueNumber)){
        console.log(rollDice(20,valueNumber));
      }
    }
    return { skillsStore,roll };
  }
})
</script>

<style scoped>
.container{
  position: absolute;
  top: 19em;
  width: 11em;
  left: 17.5em;
  height: 36.5em;
}

.savingThrows{
  width: 100%;
  height: 10em;
  margin-bottom: 1.1em;
}
.skill:first-child{
  margin-top:0.5em;
}
.skill{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.3em;
  /* border: 1px solid black; */

}
.proficiencyDot{
  display: flex;
  width: 0.4em;
  height: 0.4em;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
  margin-top:4.7%;
  margin-left:9%;
  border-radius: 10px;
  cursor: pointer;

}
.proficient{
  background-color: black;
}

.modifier {
  display: flex;
  width: 2em;
  height: 1.4em;
  margin-left: 0.5em;
  text-align: center;
  background-color: transparent;
  border: none;

}
.skillBtn{
  display: flex;
  width: 7em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.skillBtn:hover{
  transition: 0.2s linear;
  background-color: rgba(0, 0, 0, 0.5);
  outline: solid 1px rgb(49, 49, 49);
}
</style>
