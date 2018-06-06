<template>
  <section class="container">
    <p>/{{ $route.params.id }}</p>
    <h2>{{ sketch.title }}</h2>
    <img :src='sketch.imageUrl'>
    <p>{{ sketch.description }}</p>
  </section>
</template>

<script>
import sanity from '@/static/sanity.js';

export default {
  asyncData(context) {
    const query = `*[_type == "sketch" && slug.current == "${context.params.id}"] 
      {_id,title,created,description,"imageUrl": thumbnail.asset->url}[0...50]`;
    return sanity.fetch(query).then(sketches => {
      return { sketch: sketches[0] };
    });
  }
};
</script>

<style scoped>
* {
  margin: 10px 20px;
}
img {
  max-width: 200px;
}
</style>