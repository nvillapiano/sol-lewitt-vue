<template>
  <div class="project-260">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Project 260</h1>
    <div class="tiles glossary">
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

      <Tile-style-13 />
      <Tile-style-14 />
      <Tile-style-15 />
      <Tile-style-16 />

      <Tile-style-17 />
      <Tile-style-18 />
      <Tile-style-19 />
      <Tile-style-20 />
    </div>
    <h1>Refactor</h1>
    <div class="tiles">
      <Tile class="style-1"></Tile>
      <Tile class="style-2"></Tile>
      <Tile class="style-3"></Tile>
      <Tile class="style-4"></Tile>
      <Tile class="style-5"></Tile>
      <Tile class="style-6"></Tile>
      <Tile class="style-7"></Tile>
      <Tile class="style-8"></Tile>
      <Tile class="style-9"></Tile>
      <Tile class="style-10"></Tile>
      <Tile class="style-11"></Tile>
      <Tile class="style-12"></Tile>
      <Tile class="style-13"></Tile>
      <Tile class="style-14"></Tile>
      <Tile class="style-15"></Tile>
      <Tile class="style-16"></Tile>
      <Tile class="style-17"></Tile>
      <Tile class="style-18"></Tile>
      <Tile class="style-19"></Tile>
      <Tile class="style-20"></Tile>
    </div>
  </div>
</template>

<script>
import Tile from '@/components/project260/Tile.vue';
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
import TileStyle13 from '@/components/project260/TileStyle13.vue';
import TileStyle14 from '@/components/project260/TileStyle14.vue';
import TileStyle15 from '@/components/project260/TileStyle15.vue';
import TileStyle16 from '@/components/project260/TileStyle16.vue';

import TileStyle17 from '@/components/project260/TileStyle17.vue';
import TileStyle18 from '@/components/project260/TileStyle18.vue';
import TileStyle19 from '@/components/project260/TileStyle19.vue';
import TileStyle20 from '@/components/project260/TileStyle20.vue';

export default {
  name: 'home',
  components: {
    Tile,
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
    TileStyle13,
    TileStyle14,
    TileStyle15,
    TileStyle16,
    TileStyle17,
    TileStyle18,
    TileStyle19,
    TileStyle20,
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
      border: none;
    }
  }

  .tile {
    width: 20rem;
    height: 20rem;
    border: 0.1rem dotted $grey;
    margin: 1rem;
  }

</style>
