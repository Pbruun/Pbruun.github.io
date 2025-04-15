import { ref } from 'vue'
import { defineStore } from 'pinia'
import { simpleDiceRoll } from '@/util/roll';

export const useProtectionAndAttackStore = defineStore('protectionAndAttackStore', () => {
  const armorClass = ref('');
  const initiative = ref('');
  const speed = ref('');
  const maxHP = ref('');
  const currentHP = ref('');
  const tempHP = ref('');
  const totalHitDice = ref('');
  const hitDice = ref('');
  const deathSavesSuccess = ref(0);
  const deathSavesFailure = ref(0);
  const attack1Name = ref('');
  const attack1Bonus = ref('');
  const attack1Damage = ref('');
  const attack2Name = ref('');
  const attack2Bonus = ref('');
  const attack2Damage = ref('');
  const attack3Name = ref('');
  const attack3Bonus = ref('');
  const attack3Damage = ref('');
  const attackOther = ref('');
  const copper = ref('');
  const silver = ref('');
  const electrum = ref('');
  const gold = ref('');
  const platinum = ref('');
  const equipment = ref('');

  const rollDeathSave = () => {
    const result = simpleDiceRoll()
    if(deathSavesFailure.value === 3 || deathSavesSuccess.value === 3){
      deathSavesFailure.value = 0;
      deathSavesSuccess.value = 0;
    }
    if (result === 1) {
      if(deathSavesSuccess.value === 2){
        deathSavesSuccess.value = 3;
      }else{
        deathSavesFailure.value += 2;
      }
    }else if (result === 20) {
      deathSavesSuccess.value = 3;
      deathSavesFailure.value = 0;
    } else if(result < 10){
      deathSavesFailure.value++;
    } else{
      deathSavesSuccess.value++;
    }

  }

  return { armorClass, initiative, speed, maxHP, currentHP, tempHP, totalHitDice, hitDice,
     deathSavesSuccess, deathSavesFailure, attack1Name, attack1Bonus, attack1Damage, attack2Name, attack2Bonus, attack2Damage,
     attack3Name, attack3Bonus, attack3Damage, attackOther, copper, silver, electrum, gold, platinum, equipment, rollDeathSave}
});
