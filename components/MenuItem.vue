<template>
  <a :href="'/sketch/' + slug">
    <div class="menu-item">
      <p>{{ title }}</p>
      </div>
  </a>
</template>

<script>
export default {
  props: ['title', 'slug', 'date', 'description']
};
</script>

