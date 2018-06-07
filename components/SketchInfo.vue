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

