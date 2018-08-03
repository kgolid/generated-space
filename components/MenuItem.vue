<template>
  <a :href="'/sketch/' + slug">
    <div class="link menu-item">
      <p>{{ title }} <span>{{ date }}</span></p>
      </div>
  </a>
</template>

<script>
export default {
  props: ['title', 'slug', 'date', 'description']
};
</script>

<style>
.menu-item {
  margin: 2px 0;
  font-weight: 600;
}

.menu-item span {
  font-weight: 400;
}
</style>
