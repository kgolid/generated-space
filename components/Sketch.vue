<template>
  <div class="sketch">
    <div class="sketch__title">{{ title }} -- {{ description }}</div>
    <div class="sketch__date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'date', 'description']
};
</script>