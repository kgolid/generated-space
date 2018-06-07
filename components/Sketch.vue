<template>
<div id="sketch-container"></div>
</template>

<script>
export default {
  props: ['path', 'background'],

  head() {
    return {
      script: [{ src: 'https://rawgit.com/kgolid/p5ycho/master/' + this.path, type: 'module' }],
      style: [{ cssText: 'body { background-color:' + this.background + ' !important;}', type: 'text/css' }]
    };
  }
};
</script>
<style>
#sketch-container {
  margin-top: 40px;
}
</style>