<template>
  <button class="calcCard">
    <div class="iconWrapper">
      <component :is="card.icon" class="cardIcon" />
    </div>
    <p class="name">{{ card.name }}</p>
    <p class="description">{{ card.description }}</p>
  </button>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    default: {},
    required: true,
  },
})
</script>

<style scoped>
.calcCard {
  background-color: rgba(84, 84, 84, 0.48);
  width: 20rem;
  height: 15rem;
  border-radius: 8px;
  display: grid;
  padding: 1rem;
  border: none;
  transition: all 0.2s ease-in-out;
}

.calcCard:hover {
  filter: brightness(115%);
}

.iconWrapper {
  background: rgba(84, 84, 84, 0.3);
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.cardIcon {
  fill: hsla(160, 100%, 37%, 1);
  height: 5rem;
  place-self: center;
}

.name,
.description {
  color: lightgray;
  place-self: center;
}

.name {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.description {
  text-align: left;
}
</style>
