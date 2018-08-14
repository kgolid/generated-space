<template>
  <div class="main-menu">
    <nuxt-link to="/" exact><p class="link">Sketches</p></nuxt-link>
    <nuxt-link to="/about"><p class="link">About</p></nuxt-link>
    <div style="height:20px"></div>
    <a href="https://www.github.com/kgolid"><p class="link">GitHub</p></a>
    <a href="https://www.twitter.com/kgolid"><p class="link">Twitter</p></a>
    <a href="https://www.instagram.com/kgolid"><p class="link">Instagram</p></a>
    <div style="height:150px"></div>
  </div>
</template>
<style>
.main-menu {
  display: inline-block;
  width: 80px;
  text-align: right;
  padding-top: 25px;
}

.main-menu a {
  text-transform: uppercase;
  font-weight: 400;
}

.main-menu a p {
  margin: 2px;
}

.main-menu a.nuxt-link-active p {
  font-weight: 600;
}
</style>
