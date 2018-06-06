<template>
  <section class="info-container">
    <p><a href='/'>generated.space</a>/{{ $route.params.slug }}</p>
    <h2>{{ sketch.title }}</h2>
    <p>{{ sketch.description }}</p>
  </section>
</template>

<script>
import sanity from '@/static/sanity.js';

export default {
  asyncData(context) {
    const query = `*[_type == "sketch" && slug.current == "${context.params.slug}"] 
      {
        _id,title,
        created,
        description,
        path,
        background,
        "imageUrl": thumbnail.asset->url
      }[0...50]`;

    return sanity.fetch(query).then(sketches => {
      return { sketch: sketches[0] };
    });
  },
  head() {
    return {
      title: this.sketch.title,
      script: [{ src: 'https://cdn.rawgit.com/kgolid/p5ycho/master/' + this.sketch.path, type: 'module' }],
      style: [{ cssText: 'body { background-color:' + this.sketch.background + ' !important;}', type: 'text/css' }]
    };
  }
};
</script>

<style scoped>
.info-container {
  position: fixed;
  margin: 20px;
  padding: 20px;
  width: 200px;
  background-color: #e0e0e0;
}
</style>