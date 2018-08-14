<template>
<div>
<div id="sketch"></div>
<div id="controller"></div>
</div>
</template>

<script>
export default {
  props: ['path', 'external', 'modular', 'background'],

  head() {
    let script_src = this.external ? this.path : 'https://rawgit.com/kgolid/p5ycho/master/' + this.path;
    return {
      script: [{ src: script_src, type: this.modular ? 'module' : '' }],
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
