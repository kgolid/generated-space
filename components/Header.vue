<template>
<div class="header-container">
  <div class="logo">
      <img src="~/assets/headblack.png"/>
  </div>
  <div class="header-text">Generated Space</div>
</div>
</template>
<style>
.header-container {
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 98px;
  color: #111;
}

.logo {
  display: inline-block;
  width: 120px;
}

.header-text {
  display: inline-block;
  text-transform: uppercase;
  font-weight: 800;
  width: 100px;
  padding: 16px;
  margin: 22px 12px;
  border-left: 1px solid;
  vertical-align: top;
  font-size: 0.9em;
  line-height: 1.1em;
}

.logo img {
  width: 100%;
}

@media (max-width: 500px) {
  .header-container {
    left: 25px;
  }
}
</style>