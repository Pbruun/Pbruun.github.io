<template>
  <div class="container">
    <div class="firstRow">
      <input class="armorClass" type="text" v-model="protectionAndAttackStore.armorClass"/>
      <div class="initiativeContainer">
        <input class="initiative" type="text" v-model="protectionAndAttackStore.initiative"/>
        <button class="rollInitiative btn" @click="roll(protectionAndAttackStore.initiative)" @click.right.prevent="roll(protectionAndAttackStore.initiative,true)" value="Initiative"></button>
      </div>
      <input class="speed" type="text" v-model="protectionAndAttackStore.speed"/>
    </div>
    <div class="secondRow">
      <input class="maxHP" type="text" v-model="protectionAndAttackStore.maxHP"/>
      <input class="currentHP" type="text" v-model="protectionAndAttackStore.currentHP"/>
      <input class="tempHP" type="text" v-model="protectionAndAttackStore.tempHP"/>
    </div>

    <div class="thirdRow">
      <div class="hitDiceContainer">
        <input class="totalHitDice" type="text" v-model="protectionAndAttackStore.totalHitDice"/>
        <label class="spentHitDiceLabel">
          spent
          <input class="spentHitDice" type="text" v-model="spentHitDice"/>
        </label>

        <input class="hitDice" type="text" v-model="protectionAndAttackStore.hitDice" title="d<dice type>"/>
        <button class="rollHitDice btn" @click="rollHitDice" title="Rolls hit dice + constitution modifier"></button>
      </div>
      <div @click.right.prevent class="deathSaveContainer">
        <div class="success">
          <span class="dot" @click.left="dsSuccess(1)" @click.right.prevent="dsSuccess(-1)" :class="`${protectionAndAttackStore.deathSavesSuccess > 0 ? 'active' : ''}`"/>
          <span class="dot" @click.left="dsSuccess(1)" @click.right.prevent="dsSuccess(-1)" :class="`${protectionAndAttackStore.deathSavesSuccess > 1 ? 'active' : ''}`"/>
          <span class="dot" @click.left="dsSuccess(1)" @click.right.prevent="dsSuccess(-1)" :class="`${protectionAndAttackStore.deathSavesSuccess > 2 ? 'active' : ''}`"/>
        </div>
        <div class="failure">
          <span class="dot" @click.left="dsFailure(1)" @click.right.prevent="dsFailure(-1)" :class="`${protectionAndAttackStore.deathSavesFailure > 0 ? 'active' : ''}`"/>
          <span class="dot" @click.left="dsFailure(1)" @click.right.prevent="dsFailure(-1)" :class="`${protectionAndAttackStore.deathSavesFailure > 1 ? 'active' : ''}`"/>
          <span class="dot" @click.left="dsFailure(1)" @click.right.prevent="dsFailure(-1)" :class="`${protectionAndAttackStore.deathSavesFailure > 2 ? 'active' : ''}`"/>
        </div>
        <button class="rollDeathSave btn" @click="protectionAndAttackStore.rollDeathSave"></button>
      </div>
    </div>
    <div class="fourthRow">
      <div class="attackContainer">
        <input class="attackName" type="text" v-model="protectionAndAttackStore.attack1Name"/>
        <button class="material-symbols-outlined attackBtn" @click="rollAttack(protectionAndAttackStore.attack1Bonus)" @click.right.prevent="rollAttack(protectionAndAttackStore.attack1Bonus,true)" :value="`${protectionAndAttackStore.attack1Name} Attack`">swords</button>
        <input class="attackBonus" type="text" v-model="protectionAndAttackStore.attack1Bonus"/>
        <input class="attackDamage" type="text" v-model="protectionAndAttackStore.attack1Damage" title="<number of dice>d<dice type>+<modifier>"/>
        <button class="material-symbols-outlined attackBtn" @click="rollDamage(protectionAndAttackStore.attack1Damage)" :value="`${protectionAndAttackStore.attack1Name} Damage`">explosion</button>
      </div>
      <div class="attackContainer">
        <input class="attackName" type="text" v-model="protectionAndAttackStore.attack2Name"/>
        <button class="material-symbols-outlined attackBtn" @click="rollAttack(protectionAndAttackStore.attack2Bonus)" @click.right.prevent="rollAttack(protectionAndAttackStore.attack2Bonus,true)" :value="`${protectionAndAttackStore.attack2Name} Attack`">swords</button>
        <input class="attackBonus" type="text" v-model="protectionAndAttackStore.attack2Bonus"/>
        <input class="attackDamage" type="text" v-model="protectionAndAttackStore.attack2Damage" title="<number of dice>d<dice type>+<modifier>"/>
        <button class="material-symbols-outlined attackBtn" @click="rollDamage(protectionAndAttackStore.attack2Damage)" :value="`${protectionAndAttackStore.attack2Name} Damage`">explosion</button>
      </div>
      <div class="attackContainer">
        <input class="attackName" type="text" v-model="protectionAndAttackStore.attack3Name"/>
        <button class="material-symbols-outlined attackBtn" @click="rollAttack(protectionAndAttackStore.attack3Bonus)" @click.right.prevent="rollAttack(protectionAndAttackStore.attack3Bonus,true)" :value="`${protectionAndAttackStore.attack3Name} Attack`">swords</button>
        <input class="attackBonus" type="text" v-model="protectionAndAttackStore.attack3Bonus"/>
        <input class="attackDamage" type="text" v-model="protectionAndAttackStore.attack3Damage" title="<number of dice>d<dice type>+<modifier>"/>
        <button class="material-symbols-outlined attackBtn" @click="rollDamage(protectionAndAttackStore.attack3Damage)" :value="`${protectionAndAttackStore.attack3Name} Attack`">explosion</button>
      </div>
      <textarea class="attackOther" type="text" v-model="protectionAndAttackStore.attackOther"></textarea>
    </div>
    <div class="fifthRow">
      <div class="moneyContainer">
        <input class="money" type="text" v-model="protectionAndAttackStore.copper"/>
        <input class="money" type="text" v-model="protectionAndAttackStore.silver"/>
        <input class="money" type="text" v-model="protectionAndAttackStore.gold"/>
        <input class="money" type="text" v-model="protectionAndAttackStore.electrum"/>
        <input class="money" type="text" v-model="protectionAndAttackStore.platinum"/>
      </div>
      <textarea class="equipment" v-model="protectionAndAttackStore.equipment"/>
    </div>
  </div>
</template>

<script lang="ts">
import { useAbilitiesStore } from '@/stores/abilitiesStore';
import { useProtectionAndAttackStore } from '@/stores/protectionAndAttackStore';
import { useRollStore } from '@/stores/rollStore';
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'ProtectionAndAttack',
  setup () {
    const protectionAndAttackStore = useProtectionAndAttackStore();
    const rollStore = useRollStore();
    const spentHitDice = ref(0);
    const abilitiesStore = useAbilitiesStore();

    const dsSuccess = (value:number)=>{
      const result = protectionAndAttackStore.deathSavesSuccess + value;
      if(result >=0 && result <=3){
        protectionAndAttackStore.deathSavesSuccess = result;
      }
    }
    const dsFailure = (value:number)=>{
      const result = protectionAndAttackStore.deathSavesFailure + value;
      if(result >=0 && result <=3){
        protectionAndAttackStore.deathSavesFailure = result
      }
    }

    const roll = (value:string,advantageOrDisadvantage:boolean=false) => {
      const e  = event as PointerEvent;
      const t = e.target as HTMLButtonElement;
      const messageType = t ? t.value : 'Custom Roll';
      const valueNumber = parseInt(value);
      if(!isNaN(valueNumber)){
        rollStore.rollDice(20,valueNumber,1,advantageOrDisadvantage,messageType);
      }
    }
    const rollHitDice = () =>{
      const totalHitDice = isNaN(parseInt(protectionAndAttackStore.totalHitDice)) ? 0 : parseInt(protectionAndAttackStore.totalHitDice);
      if(spentHitDice.value < totalHitDice){
        spentHitDice.value++;
        const diceNumber = parseInt(protectionAndAttackStore.hitDice.split("d")[1]);
        const diceType = diceNumber? diceNumber: parseInt(protectionAndAttackStore.hitDice);
        const maxHP = isNaN(parseInt(protectionAndAttackStore.maxHP)) ? 0 : parseInt(protectionAndAttackStore.maxHP);
        const currentHP = isNaN(parseInt(protectionAndAttackStore.currentHP)) ? 0 : parseInt(protectionAndAttackStore.currentHP);
        if(diceType){
          const hitDiceRolled = rollStore.simpleDiceRoll(diceType)+abilitiesStore.constitutionMod;
          if(hitDiceRolled + currentHP >= maxHP){
            protectionAndAttackStore.currentHP = `${maxHP}`;
          }else{
            protectionAndAttackStore.currentHP = `${currentHP + hitDiceRolled}`;
          }

        }
    }
  }
  const rollAttack = (atkBonus:string,advantageOrDisadvantage:boolean=false) =>{
    const e  = event as PointerEvent;
    const t = e.target as HTMLButtonElement;
    const messageType = t ? t.value : 'Custom Roll';
    let atkBonusNumber:number = 0;
    if(atkBonus.includes("+")){
      atkBonusNumber = parseInt(atkBonus.split("+")[1]);
    }else{
      atkBonusNumber = parseInt(atkBonus);
    }
    if(!isNaN(atkBonusNumber)){
      rollStore.rollDice(20,atkBonusNumber,1,advantageOrDisadvantage,messageType);
    }
  }
  const rollDamage = (damage:string) => {
    const e  = event as PointerEvent;
    const t = e.target as HTMLButtonElement;
    const messageType = t ? t.value : 'Custom Roll';
    const damageSplit = damage.split("d");
    const diceTypeAndModifier = damageSplit[1].split("+");
    rollStore.rollDice(parseInt(diceTypeAndModifier[0]),parseInt(diceTypeAndModifier[1]),parseInt(damageSplit[0]),false,messageType)
  }
  return {
    protectionAndAttackStore,roll,dsSuccess,dsFailure,spentHitDice,rollHitDice,rollAttack,rollDamage

  }
  }
})
</script>

<style scoped>
.container{
  position: absolute;
  top: 12em;
  width: 17em;
  left: 21em;
  height: 42.5em;
}

.firstRow{
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left:0.5em;
  margin-top: 1em;
}

.firstRow input {
  display: block;
  width:4.5rem;
  height: 3rem;
  background-color: transparent;
  text-align: center;
  font-size:25px;
  margin-right: 0.4em;
  border:none;
}
.rollInitiative{
  width: 4.5rem;
  height: 1.5rem;
}
.btn{
  display: block;

  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.btn:hover{
  transition: 0.2s linear;
  background-color: rgba(0, 0, 0, 0.5);
  outline: solid 1px rgb(49, 49, 49);

}

.secondRow{
  margin-top: 0.9em;
  display: block;
  width: 100%;
  height: 11em;
}

.secondRow input {
  background-color: transparent;
  border: none;
}

.maxHP{
  height: 1em;
  width: 8em;
  font-size: 15px;
  margin-left:7em;
  margin-top:0.2em;
}

.currentHP{
  height: 1em;
  width: 5em;
  font-size: 30px;
  margin-top:0.3em;
  margin-left:1.9em;
  text-align: center;
}

.tempHP{
  height: 1em;
  width: 5em;
  font-size: 30px;
  margin-top:1.5em;
  margin-left:1.9em;
  text-align: center;

}

.thirdRow{
  margin-top: 0.6em;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5em;
}

.hitDiceContainer{
  display: block;
  margin-left: 1em;
  width: 6.5rem;
  height: 100%;
}

.hitDiceContainer input{
  background-color: transparent;
  border: none;
}

.totalHitDice{
  width: 1.4em;
  margin-left: 1.8em;
  font-size:15px;
  height: 1em;

}
.spentHitDiceLabel{
  font-size:9px;
  color: rgb(80, 80, 80)
}
.spentHitDice{
  width:1.4em
}
.hitDice {
  width: 4em;
  font-size: 25px;
  text-align: center;
}

.rollHitDice{
  width: 6.3rem;
  height: 1rem;
}

.deathSaveContainer{
  display: block;
  margin-left: 1em;
  width: 50%;
  height: 100%;
}
.deathSaveContainer .success,.failure{
  display: flex;
  flex-direction: row;
  margin-left: 3.8em;

}
.success{
  margin-top: 0.9em;
}
.failure{
  margin-top: 1em;
}

.dot{
  display: flex;
  width: 0.4em;
  height: 0.4em;
  border-radius: 10px;
  cursor: pointer;

}
.dot:not(:first-child){
  margin-left:19%;
}
.active {
  background-color: black;
}
.rollDeathSave{
  margin-left:0.5em;
  margin-top:0.8em;
  width: 6.3rem;
  height: 1rem;
}

.fourthRow{
  margin-top: 1.5em;
  height: 17.7em;
}
.attackContainer:first-child{
  margin-top: 2.4em;
}
.attackContainer{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.5em;
  margin-top: 0.5em;
}
.attackContainer input{
  background-color: transparent;
  border: none;

  margin-left: 0.7em;

}
.attackContainer .attackBonus{
  width: 3em;
}
.attackContainer .attackName,.attackDamage{
  width: 4.5em;
}

.attackOther {
  width: 100%;
  height: 12.2em;
  margin-top: 0.5em;
  background-color: transparent;
  border: none;
  resize: none;
  padding-left: 5px;
  padding-right: 5px;
  scrollbar-width: none;
}

.fifthRow {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1em;
  height: 16em;
  margin-left: 1.2em;
}
.moneyContainer{
display: flex;
flex-direction: column;
}
.money:first-child{
  margin-top: 1.2em;

}
.money{
  height: 2em;
  margin-top: 0.8em;
  width: 3em;
  background-color: transparent;
  border: none;
  text-align: center;
}
.equipment{
  width: 13.5em;
  height: 17em;
  margin-left: 1em;
  margin-top:0.5em;
  background-color: transparent;
  border: none;
  resize: none;
  padding-left: 5px;
  padding-right: 5px;
  scrollbar-width: none;
}
.material-symbols-outlined {
}
.attackBtn{
  align-self: center;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-size: 20px;
}
.attackBtn:hover{
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
}
</style>
