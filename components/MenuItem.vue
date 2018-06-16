<template>
  <a :href="'/sketch/' + slug">
    <div class="menu-item">
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
  display: inline-block;
  max-width: 200px;
  margin: 2px 20px 2px 0;
  font-size: 0.75em;
  font-weight: 600;
}

.menu-item:hover {
  text-decoration: underline;
}

.menu-item span {
  font-weight: 200;
}
</style>