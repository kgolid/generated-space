<template>
  <div>
    <SketchInfo 
      :slug="$route.params.slug"
      :title="sketch.title"
      :date="sketch.created"
      :path="sketch.path"
      :description="sketch.description"
    />
    <Sketch 
      :path="sketch.path"
      :modular="sketch.modular_script"
      :background="sketch.background"
    />
  </div>
</template>

<script>
import sanity from '@/static/sanity.js';
import SketchInfo from '@/components/SketchInfo';
import Sketch from '@/components/Sketch';

export default {
  components: { SketchInfo, Sketch },

  asyncData(context) {
    const query = `*[_type == "sketch" && slug.current == "${context.params.slug}"] 
      {
        _id,title,
        created,
        description,
        path,
        modular_script,
        background,
        "imageUrl": thumbnail.asset->url
      }[0...50]`;

    return sanity.fetch(query).then(sketches => {
      return { sketch: sketches[0] };
    });
  },

  head() {
    return {
      title: this.sketch.title
    };
  }
};
</script>