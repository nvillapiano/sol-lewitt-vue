<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    test() {
      console.log('test')
    },
    updated() {
      console.log('updated')
    },
  },
  created() {
    this.test()
    this.updated()
  },
};
</script>

<style lang="scss">

@import './scss/global';

</style>
