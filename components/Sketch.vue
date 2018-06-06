<template>
  <nuxt-link :to="'/sketch/' + slug">
    <div class="sketch">{{ date }}: {{ title }} -- {{ description }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['title', 'slug', 'date', 'description']
};
</script>