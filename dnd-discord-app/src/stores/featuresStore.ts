import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFeaturesStore = defineStore('featuresStore', () => {
  const personalityTraits = ref('');
  const ideals = ref('');
  const bonds = ref('');
  const flaws = ref('');
  const featuresAndTraits = ref('');

  return {personalityTraits, ideals, bonds, flaws, featuresAndTraits}

});
