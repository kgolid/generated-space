<template>
  <div>
    <div class="headimg"></div>
    <Header />
    <section class="container">
      <div class="main-content">
        <MainMenu />
        <nuxt />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import MainMenu from '@/components/MainMenu';
import Footer from '@/components/Footer';

export default {
  components: { Header, MainMenu, Footer }
};
</script>

<style>
.headimg {
  width: 100%;
  height: 750px;
  background-image: url('~/assets/headimg_small.jpg');
  background-position: center;
  background-size: cover;
}
.container {
  background-color: white;
  color: #111;
}
.main-content {
  padding: 50px;
  padding-left: 100px;
}

@media (max-width: 500px) {
  .headimg {
    height: 500px;
  }
  .main-content {
    padding: 25px;
  }
}
</style>