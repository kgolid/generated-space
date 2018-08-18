<template>
<div class="menu-container">
  <p><span class="emphasised">Generated Space</span> is the result of a year-long endeavour to make computers do unexpected things.</p>
  <br/>
  <p>It presents a wide range of different generative algorithms; from organic flow fields and particle systems to rigid fractals and grammar-based shapes.  Some more serious than others.</p>
  <p>All the code is open source and available on GitHub, so feel free to change and improve upon any sketches that interests you.</p>
  <br/>
  <p>For any questions or inquiries, feel free to contact me.  ~Kjetil</p>

  
</div>
</template>

<script>
export default {
  layout: 'Frontpage'
};
</script>

<style scoped>
.menu-container {
  display: inline-block;
  width: calc(100% - 130px);
  max-width: 700px;
  columns: 250px 2;
  vertical-align: top;
  padding: 25px 0 25px 50px;
  padding-left: 50px;
  border-left: 1px solid #111;
  margin-left: 50px;
}

.emphasised {
  font-weight: 700;
}

@media (max-width: 500px) {
  .menu-container {
    margin-left: 0;
    padding-left: 25px;
    border-left: none;
  }
}
</style>
