import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBackgroundStore = defineStore('backgroundStore', () => {
  const age = ref('');
  const height = ref('');
  const weight = ref('');
  const eyes = ref('');
  const skin = ref('');
  const hair = ref('');
  const appearance = ref('');
  const allies = ref('');
  const symbol = ref('');
  const symbolName = ref('');
  const backstory = ref('');
  const additionalInfo = ref('');
  const treasure = ref('');
  return {age, height, weight, eyes, skin, hair, appearance, allies, symbol, symbolName, backstory, additionalInfo, treasure}

});
