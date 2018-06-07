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

<style>
.menu-item {
  display: inline-block;
  max-width: 200px;
  margin: 15px 30px;
  font-size: 11pt;
  font-weight: 400;
}

.menu-item:hover {
  text-decoration: underline;
}
</style>