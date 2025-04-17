<template>
  <div class="container">
    <div class="firstRow">
      <input class="armorClass" type="text" v-model="protectionAndAttackStore.armorClass"/>
      <div class="initiativeContainer">
        <input class="initiative" type="text" v-model="protectionAndAttackStore.initiative"/>
        <button class="rollInitiative btn" @click="roll(protectionAndAttackStore.initiative)"></button>
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
        <input class="hitDice" type="text" v-model="protectionAndAttackStore.hitDice"/>
        <button class="rollHitDice btn"></button>
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
        <input class="attackBonus" type="text" v-model="protectionAndAttackStore.attack1Bonus"/>
        <input class="attackDamage" type="text" v-model="protectionAndAttackStore.attack1Damage"/>
      </div>
      <div class="attackContainer">
        <input class="attackName" type="text" v-model="protectionAndAttackStore.attack2Name"/>
        <input class="attackBonus" type="text" v-model="protectionAndAttackStore.attack2Bonus"/>
        <input class="attackDamage" type="text" v-model="protectionAndAttackStore.attack2Damage"/>
      </div>
      <div class="attackContainer">
        <input class="attackName" type="text" v-model="protectionAndAttackStore.attack3Name"/>
        <input class="attackBonus" type="text" v-model="protectionAndAttackStore.attack3Bonus"/>
        <input class="attackDamage" type="text" v-model="protectionAndAttackStore.attack3Damage"/>
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
import { useProtectionAndAttackStore } from '@/stores/protectionAndAttackStore';
import { useRollStore } from '@/stores/rollStore';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProtectionAndAttack',
  setup () {
    const protectionAndAttackStore = useProtectionAndAttackStore();
    const rollStore = useRollStore();
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

    const roll = (value:string) => {
      const valueNumber = parseInt(value);
      if(!isNaN(valueNumber)){
        rollStore.rollDice(20,valueNumber);
      }
    }
    return {
      protectionAndAttackStore,roll,dsSuccess,dsFailure

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
  width: 4.9em;
  margin-left: 1.8em;
  font-size:15px;
  height: 1em;

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
  width: 6.8em;
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
</style>
