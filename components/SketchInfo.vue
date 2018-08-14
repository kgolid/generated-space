<template>
  <section class="info-container">
    <div class="info-links">
      <a href='/'>&lt; generated.space</a>
      <a style="float:right" :href="'https://www.github.com/kgolid/p5ycho/blob/master/' + path">github &gt;</a>
    </div>
    <div><p class="info-label">Name</p><h2 class="info-text">{{ title }}</h2></div>
    <div><p class="info-label">Date</p><p class="info-text">{{ date }}</p></div>
    <div><p class="info-label">Descr</p><p class="info-text">{{ description }}</p></div>
  </section>
</template>

<script>
export default {
  props: ['title', 'slug', 'date', 'path', 'description']
};
</script>

<style scoped>
.info-container {
  color: white;
  position: fixed;
  top: 0;
  margin: 15px;
  padding: 20px;
  background-color: #111;
  font-size: 0.8rem;
}

.info-container > div {
  margin-top: 10px;
}

.info-container .info-links {
  margin: -10px -10px 20px -10px;
}

.info-links a:hover {
  text-decoration: underline;
}

.info-label {
  display: inline-block;
  margin-right: 15px;
  vertical-align: top;
  text-align: right;
  text-transform: uppercase;
  width: 45px;
  font-size: 0.6rem;
}

.info-text {
  display: inline-block;
  width: 200px;
}
</style>