<template>
  <div id="app">
    <Footer />
    <router-view/>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss">

@import './scss/global';

</style>
