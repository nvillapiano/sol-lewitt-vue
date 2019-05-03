<template>
  <div class="project-260">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Project 260</h1>
    <div class="tiles glossary">
      <!-- <div class="tile-group">
        <Tile-style-1 />
        <Tile-style-2 />
      </div> -->
      <Tile-style-1 />
      <Tile-style-2 />
      <Tile-style-3 />
      <Tile-style-4 />

      <Tile-style-5 />
      <Tile-style-6 />
      <Tile-style-7 />
      <Tile-style-8 />

      <Tile-style-9 />
      <Tile-style-10 />
      <Tile-style-11 />
      <Tile-style-12 />

      <Tile-style-17 />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import TileStyle1 from '@/components/project260/TileStyle1.vue';
import TileStyle2 from '@/components/project260/TileStyle2.vue';
import TileStyle3 from '@/components/project260/TileStyle3.vue';
import TileStyle4 from '@/components/project260/TileStyle4.vue';
import TileStyle5 from '@/components/project260/TileStyle5.vue';
import TileStyle6 from '@/components/project260/TileStyle6.vue';
import TileStyle7 from '@/components/project260/TileStyle7.vue';
import TileStyle8 from '@/components/project260/TileStyle8.vue';
import TileStyle9 from '@/components/project260/TileStyle9.vue';
import TileStyle10 from '@/components/project260/TileStyle10.vue';
import TileStyle11 from '@/components/project260/TileStyle11.vue';
import TileStyle12 from '@/components/project260/TileStyle12.vue';

import TileStyle17 from '@/components/project260/TileStyle17.vue';

export default {
  name: 'home',
  components: {
    TileStyle1,
    TileStyle2,
    TileStyle3,
    TileStyle4,
    TileStyle5,
    TileStyle6,
    TileStyle7,
    TileStyle8,
    TileStyle9,
    TileStyle10,
    TileStyle11,
    TileStyle12,
    TileStyle17,
  },
};
</script>

<style lang="scss">

// colors

@import '../scss/global';

  .project-260 {
  }

  .tiles {
    display: flex;
    flex-wrap: wrap;
  }

  .tile-group {
    position: relative;
    width: 20rem;
    height: 20rem;

    .tile {
      position: absolute;
    }
  }

  .tile {
    width: 20rem;
    height: 20rem;
    border: 0.1rem dotted $grey;
    margin: 1rem;
  }

</style>
