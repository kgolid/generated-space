<template>
  <section class="container">
    <h1>Generated Space <span> // Beta</span></h1>
    <MenuItem 
      v-for="s in sketches"
      :key="s.id"
      :title="s.title" 
      :slug="s.slug.current"
      :description="s.description"
      :date="s.created" />
  </section>
</template>

<script>
import MenuItem from '@/components/MenuItem';
import sanity from '@/static/sanity.js';

const query = '*[_type == "sketch"] {_id,title,slug,created,description}[0...50]';

export default {
  components: { MenuItem },
  asyncData() {
    return sanity.fetch(query).then(sketches => {
      return { sketches: sketches };
    });
  }
};
</script>