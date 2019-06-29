<template>
  <section class="info-container">
    <div class="info-links">
      <a href="/">&lt; generated.space</a>
      <a v-if="gh_link" style="float:right" :href="gh_link">github &gt;</a>
    </div>
    <div class="info-body">
      <div>
        <p class="info-label">Name</p>
        <h2 class="info-text">{{ title }}</h2>
      </div>
      <div>
        <p class="info-label">Date</p>
        <p class="info-text">{{ date }}</p>
      </div>
      <div>
        <p class="info-label">Descr</p>
        <p class="info-text">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'slug', 'date', 'gh_link', 'description']
};
</script>

<style scoped>
.info-container {
  color: white;
  position: fixed;
  top: 0;
  margin: 15px;
  padding: 15px;
  background-color: #111;
  font-size: 0.8rem;
}

.info-body {
  padding: 10px;
  padding-top: 20px;
}

@media (max-width: 500px) {
  .info-container {
    min-width: 250px;
    margin: 10px;
    padding: 10px;
  }
  .info-body {
    display: none;
  }
}

.info-body > div {
  margin-top: 10px;
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