import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAbilitiesStore = defineStore('abilitiesStore', () => {
  const characterName = ref('');
  const classAndLevel = ref('');
  const background = ref('');
  const playerName = ref('');
  const race = ref('');
  const alignment = ref('');
  const experience = ref('');
  const strength = ref('');
  const strengthMod = ref(0);
  const dexterity = ref('');
  const dexterityMod = ref(0);
  const constitution = ref('');
  const constitutionMod = ref(0);
  const intelligence = ref('');
  const intelligenceMod = ref(0);
  const wisdom = ref('');
  const wisdomMod = ref(0);
  const charisma = ref('');
  const charismaMod = ref(0);
  const inspiration = ref(false)
  const proficiencyBonus = ref('');

  watch(strength, (newVal) => {
    let valueNumber = parseInt(newVal);
    if(!isNaN(valueNumber)){
      valueNumber = valueNumber % 2 === 0 ? valueNumber : valueNumber-1;
      strengthMod.value = Math.floor((valueNumber - 10) / 2);
    }
  })

  watch(dexterity, (newVal) => {
    let valueNumber = parseInt(newVal);
    if(!isNaN(valueNumber)){
      valueNumber = valueNumber % 2 === 0 ? valueNumber : valueNumber-1;
      dexterityMod.value = Math.floor((valueNumber - 10) / 2);
    }
  })

  watch(constitution, (newVal) => {
    let valueNumber = parseInt(newVal);
    if(!isNaN(valueNumber)){
      valueNumber = valueNumber % 2 === 0 ? valueNumber : valueNumber-1;
      constitutionMod.value = Math.floor((valueNumber - 10) / 2);
    }
  })

  watch(intelligence, (newVal) => {
    let valueNumber = parseInt(newVal);
    if(!isNaN(valueNumber)){
      valueNumber = valueNumber % 2 === 0 ? valueNumber : valueNumber-1;
      intelligenceMod.value = Math.floor((valueNumber - 10) / 2);
    }
  })

  watch(wisdom, (newVal) => {
    let valueNumber = parseInt(newVal);
    if(!isNaN(valueNumber)){
      valueNumber = valueNumber % 2 === 0 ? valueNumber : valueNumber-1;
      wisdomMod.value = Math.floor((valueNumber - 10) / 2);
    }
  })

    watch(charisma, (newVal) => {
    let valueNumber = parseInt(newVal);
    if(!isNaN(valueNumber)){
      valueNumber = valueNumber % 2 === 0 ? valueNumber : valueNumber-1;
      charismaMod.value = Math.floor((valueNumber - 10) / 2);
    }
  })



  return {characterName, classAndLevel, background,
     playerName, race, alignment, experience,
     strength, dexterity, constitution, intelligence,
     wisdom, charisma, strengthMod, dexterityMod, constitutionMod,
     intelligenceMod, wisdomMod, charismaMod,proficiencyBonus,
     inspiration}
})
