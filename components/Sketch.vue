<template>
<div>
<div id="sketch"></div>
<div id="controller"></div>
</div>
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
#sketch {
  margin-top: 40px;
}
</style>