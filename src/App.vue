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
    <transition name="pageFade" mode="out-in" appear>
      <!--Transition did not want to seem to work adding the key directly to custom component-->
      <div key="elementA" v-if="page == 'Calculators'">
        <Calculator v-if="page == 'Calculators'" />
      </div>
      <AboutMe v-else />
      <!--<Calculator v-if="page == 'Calculators'" key="calcs" />-->
      <!--<div v-else key="aboutMe"><h1>HELLO WORLD</h1></div>-->
    </transition>
  </main>
  <footer></footer>
</template>

<script setup>
import { ref } from 'vue'
import Calculator from '@/components/pages/calculator.vue'
import AboutMe from '@/components/pages/about-me.vue'

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
