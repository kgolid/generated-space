<template>
<div>
  <div class="headimg"></div>
  <Header/>
  <section class="container">
    <div class="main-content">
      <MainMenu/>
      <div class="menu-container">
        <MenuItem 
          v-for="s in sketches"
          :key="s.id"
          :title="s.title" 
          :slug="s.slug.current"
          :description="s.description"
          :date="s.dateFormatted" />
        </div>
      </div>
  </section>
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header';
import MenuItem from '@/components/MenuItem';
import MainMenu from '@/components/MainMenu';
import Footer from '@/components/Footer';
import sanity from '@/static/sanity.js';

const query = `*[_type == "sketch"] | order(created desc) {
    _id,title,slug,created,description
  }[0...50]`;

export default {
  components: { MenuItem, MainMenu, Header, Footer },
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
.headimg {
  width: 100%;
  height: 800px;
  background-image: url('~/assets/headimg_small.jpg');
  background-position: center;
  background-size: cover;
}

.logo {
  width: 100%;
}
.container {
  background-color: white;
  color: #111;
}

.main-content {
  padding: 50px;
  padding-left: 100px;
}

.menu-container {
  width: calc(100% - 130px);
  max-width: 1200px;
  columns: 200px 5;
  vertical-align: top;
  padding: 25px;
  padding-left: 50px;
  border-left: 1px solid #111;
  margin-left: 50px;
}
</style>
