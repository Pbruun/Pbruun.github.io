import {  ref } from 'vue'
import { defineStore } from 'pinia'
import { usePdfLoadStore } from './pdfLoadStore';

export const useRollStore = defineStore('rollStore', () => {
const listOfRolls = ref<string[]>([]);
const pdfLoadStore = usePdfLoadStore();
const rollDice = (diceType:number=20,modifier:number=0,numberOfDice:number=1, advantageOrDisadvantage:boolean=false,messageType:string='Custom Roll')=>{
  let diceRolled = 0;
  let diceRolledAdvantage = 0;
  let message = '';
  for(let i = 0; i < numberOfDice; i++){
    diceRolled += simpleDiceRoll(diceType);
  }
  if(advantageOrDisadvantage){
    diceRolledAdvantage = simpleDiceRoll(diceType);
    message = `Rolled (${diceRolled+modifier} | ${diceRolledAdvantage+modifier}) = (${diceRolled} | ${diceRolledAdvantage}) + ${modifier}`;
  }else{
    message = `Rolled ${diceRolled+modifier} = ${diceRolled} + ${modifier}`;
  }
  if(listOfRolls.value.length === 18){
    listOfRolls.value.shift();
  }
  if(pdfLoadStore.sendMessagesToDiscord){
    pdfLoadStore.sendDiscordMessage(message,messageType);
  }

  listOfRolls.value.push(message);
}

const simpleDiceRoll = (diceType:number=20)=>{
  return Math.floor(Math.random() * diceType)+1;
}

return {listOfRolls, rollDice, simpleDiceRoll}
})
