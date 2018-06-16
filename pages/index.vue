<template>
  <section class="container">
    <div class="header-container">
      <img src="~/assets/logo_bw.jpg"/>
    </div>
    <div class="menu-container">
      <MenuItem 
        v-for="s in sketches"
        :key="s.id"
        :title="s.title" 
        :slug="s.slug.current"
        :description="s.description"
        :date="s.dateFormatted" />
      </div>
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

<style>
img {
  width: 100%;
  padding: 20px;
}
.container {
  color: #111;
  width: 900px;
  margin: 160px auto;
  padding: 50px;
  background-color: white;
}

.header-container {
  display: inline-block;
  width: 200px;
}
.menu-container {
  height: 200px;
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  vertical-align: top;
  padding-left: 50px;
}
</style>