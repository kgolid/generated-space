<template>
  <section class="container">
    <Sketch 
      v-for="s in sketches"
      :key="s.id"
      :title="s.title" 
      :slug="s.slug.current"
      :description="s.description"
      :date="s.created" />
  </section>
</template>

<script>
import Sketch from '@/components/Sketch';
import sanity from '@/static/sanity.js';

const query = '*[_type == "sketch"] {_id,title,slug,created,description}[0...50]';

export default {
  components: { Sketch },
  asyncData() {
    return sanity.fetch(query).then(sketches => {
      return { sketches: sketches };
    });
  }
};
</script>