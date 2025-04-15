import { ref,watch } from 'vue'
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skillsStore', () => {
  const strength = ref('');
  const strengthProficiency = ref(false);
  const dexterity = ref('');
  const dexterityProficiency = ref(false);
  const constitution = ref('');
  const constitutionProficiency = ref(false);
  const intelligence = ref('');
  const intelligenceProficiency = ref(false);
  const wisdom = ref('');
  const wisdomProficiency = ref(false);
  const charisma = ref('');
  const charismaProficiency = ref(false);
  const acrobatics = ref('');
  const acrobaticsProficiency = ref(false);
  const animalHandling = ref('');
  const animalHandlingProficiency = ref(false);
  const arcana = ref('');
  const arcanaProficiency = ref(false);
  const athletics = ref('');
  const athleticsProficiency = ref(false);
  const deception = ref('');
  const deceptionProficiency = ref(false);
  const history = ref('');
  const historyProficiency = ref(false);
  const insight = ref('');
  const insightProficiency = ref(false);
  const intimidation = ref('');
  const intimidationProficiency = ref(false);
  const investigation = ref('');
  const investigationProficiency = ref(false);
  const medicine = ref('');
  const medicineProficiency = ref(false);
  const nature = ref('');
  const natureProficiency = ref(false);
  const perception = ref('');
  const perceptionProficiency = ref(false);
  const perceptionPassive = ref(10);
  const performance = ref('');
  const performanceProficiency = ref(false);
  const persuasion = ref('');
  const persuasionProficiency = ref(false);
  const religion = ref('');
  const religionProficiency = ref(false);
  const sleightOfHand = ref('');
  const sleightOfHandProficiency = ref(false);
  const stealth = ref('');
  const stealthProficiency = ref(false);
  const survival = ref('');
  const survivalProficiency = ref(false);
  const otherProficiencies = ref('');

  watch(perception,(newVal:string) =>{
    const valueNumber = parseInt(newVal);
    if(!isNaN(valueNumber)){
      perceptionPassive.value = 10+valueNumber;
    }
  })

  return {strength, dexterity, constitution, intelligence, wisdom, charisma,
     acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation,
     medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival,
     strengthProficiency, dexterityProficiency, constitutionProficiency, intelligenceProficiency, wisdomProficiency,
     charismaProficiency, acrobaticsProficiency, animalHandlingProficiency, arcanaProficiency, athleticsProficiency,
     deceptionProficiency, historyProficiency, insightProficiency, intimidationProficiency, investigationProficiency,
     medicineProficiency, natureProficiency, perceptionProficiency, performanceProficiency, persuasionProficiency,
     religionProficiency, sleightOfHandProficiency, perceptionPassive, stealthProficiency, survivalProficiency,otherProficiencies}
})
