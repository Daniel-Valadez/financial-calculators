<template>
  <header>
    <nav>
      <button
        v-for="(button, index) in navOptions"
        :key="index"
        :title="button.title"
        class="navButton"
        @click="changePage(button.name)"
        :class="{ activeTab: page == button.name }"
      >
        {{ button.name }}
      </button>
    </nav>
  </header>
  <main>
    {{ page }}
    <transition mode="out-in" name="pageFade" appear>
      <Calculator v-if="page == 'Calculators'" key="Calculators" />
      <div v-else-if="page == 'About Me'" key="placeholder"><h1>HELLO WORLD</h1></div>
    </transition>
  </main>
  <footer></footer>
</template>

<script setup>
import { ref } from 'vue'
import Calculator from '@/components/pages/calculator.vue'

const page = ref('Calculators')

const navOptions = [
  {
    name: 'Calculators',
    title: 'View financial calculators available.',
  },
  {
    name: 'About Me',
    title: 'View more information about Daniel Valadez, the creator of this application.',
  },
]

const changePage = (nextPage) => {
  page.value = nextPage
}
</script>

<style scoped>
nav {
  height: 3rem;
  display: flex;
  justify-content: flex-end;
}

.navButton {
  background: transparent;
  border: none;
  transition: all 0.2s;
  color: lightgray;
  width: 6.5rem;
  transition: all 0.2s ease-in-out;
}

.activeTab {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.pageFade-enter-active,
.pageFade-leave-active {
  transition: opacity 0.2s ease; /* Adjust duration and easing as needed */
}

.pageFade-enter-from,
.pageFade-leave-to {
  opacity: 0;
}
</style>
