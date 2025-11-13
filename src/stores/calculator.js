import { ref, defineAsyncComponent, markRaw } from 'vue'
import { defineStore } from 'pinia'

import AutoLoanIcon from '@/assets/card-icons/auto-loan-icon.vue'

export const useCalculatorStore = defineStore('calculator', () => {
  //Will hold values for different calculators.
  //Of course, KeepAlive can essentially do the same thing when bringing
  //in the modals that will house the calculators.

  //A Card needs a description, icon, and name.
  const calcCards = [
    {
      name: 'Auto Loan',
      description: 'Calculate what an auto loan could look like for you.',
      //markRaw prevents additional overhead caused by the default reactive nature of components.
      //Here, these icons are brought in to make files easier to read and don't need to be reactive.
      icon: markRaw(AutoLoanIcon),
    },
  ]

  return {
    calcCards,
  }
})
