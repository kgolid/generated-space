<template>
  <section class="info-container">
    <p><a href='/'>generated.space</a>/{{ slug }}</p>
    <h2>{{ title }}</h2>
    <p>{{ date }} </p>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  props: ['title', 'slug', 'date', 'description']
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
}

.info-container {
  color: white;
  position: fixed;
  top: 0;
  margin: 10px;
  padding: 20px;
  width: 200px;
  background-color: #0f0f0f;
  font-size: 0.7em;
}

.info-container > * {
  margin: 10px;
}
</style>