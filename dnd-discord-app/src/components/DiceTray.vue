<template>
  <div class="container">
    <div class="diceTrayHeader">
      <label>
        Number of dice
        <input type="number" v-model="diceNumber" class="diceInput">
      </label>
      <label>
        Modifier
        <input type="number" v-model="diceModifier" class="diceInput">
      </label>
    </div>
    <div class="diceTrayContainer">
      <div class="diceTray">
        <img class="rollDice" @click="rollDice(4)" src="@/assets/d4.png"/>
        <img class="rollDice" @click="rollDice(6)" src="@/assets/d6.png"/>
        <img class="rollDice" @click="rollDice(8)" src="@/assets/d8.png"/>
        <img class="rollDice" @click="rollDice(10)" src="@/assets/d10.png"/>
        <img class="rollDice" @click="rollDice(12)" src="@/assets/d12.png"/>
        <img class="rollDice" @click="rollDice(20)" src="@/assets/d20.png"/>
        <img class="rollDice" @click="rollDice(100)" src="@/assets/d10.png"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRollStore } from '../stores/rollStore';

export default defineComponent({
  name: 'DiceTray',
  setup () {
    const diceNumber = ref(1);
    const diceModifier = ref(0);
    const rollStore = useRollStore();

    const rollDice = (diceType:number=20) =>{
      console.log(diceType+100);

      rollStore.rollDice(diceType,diceModifier.value,diceNumber.value);
    }
    return {rollDice, diceNumber, diceModifier}
  }
})
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 25em;
  height: 50rem;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: auto;
}
.diceTrayHeader{
  width: 100%;
  height: 5em;
  background-color: rgb(255 255 255 / 6%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.diceTrayHeader label{
  display: flex;
  flex-direction: column;
}
.diceInput{
  height: 2em;
  width: 5em;
}

.diceTrayContainer{
  display: block;
  width: 100%;
  height: 100%;
  padding: 3em;
  background-image: url('../assets/blacksmithCropped.jpg');
  background-size: 110% 105%;
  background-repeat: no-repeat;
  background-position: center;
}

.diceTray{
  width: 100%;
  height:40em;
  background-color: rgba(26, 25, 25, 0.975);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.rollDice{
  cursor: pointer;
  width: 5em;
  margin-left: auto;
  margin-right: auto;
}
.rollDice:hover{
  transform: scale(1.1);
  transform: rotate(10deg);
  transition:linear 0.2s;
}

</style>
