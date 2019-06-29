<template>
<div class="menu-container">
  <MenuItem 
    v-for="s in sketches"
    :key="s.id"
    :title="s.title" 
    :slug="s.slug.current"
    :description="s.description"
    :date="s.dateFormatted" />
</div>
</template>
<script>
import MenuItem from '@/components/MenuItem';
import sanity from '@/static/sanity.js';

const query = `*[_type == "sketch"] | order(created desc) {
    _id,title,slug,created,description
  }`;

export default {
  layout: 'Frontpage',
  components: { MenuItem },
  asyncData() {
    return sanity.fetch(query).then(sketches => {
      return {
        sketches: sketches.map(s => {
          let array = s.created.split('-');
          s.dateFormatted = array[1] + array[2];
          return s;
        })
      };
    });
  }
};
</script>

<style scoped>
.menu-container {
  display: inline-block;
  width: calc(100% - 130px);
  max-width: 1000px;
  columns: 200px 4;
  vertical-align: top;
  margin-left: 50px;
  padding: 25px 0 25px 50px;
  border-left: 1px solid #111;
}

@media (max-width: 500px) {
  .menu-container {
    width: calc(100% - 80px);
    margin-left: 0;
    padding-left: 25px;
    border-left: none;
  }
}
</style>
