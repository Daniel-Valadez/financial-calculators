<template>
  <!--This renders the cards for all of the available calculators-->
  <div v-for="(card, index) in calcStore.calcCards" :key="index" class="cardWrapper">
    <CalcCard :card="card" />
  </div>
</template>

<script setup>
import { useCalculatorStore } from '@/stores/calculator.js'
import CalcCard from '../cards/calcCard.vue'

const calcStore = useCalculatorStore()
</script>

<style scoped></style>
