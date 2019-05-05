<template>
  <div class="project-260">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Project 260</h1>
    <button v-on:click="randomize" class="button randomize">randomize</button>
    <div class="tiles glossary">

      <!-- Row 1 -->
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-1" />
        <Tile class="style-2" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-1" />
        <Tile class="style-8" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-1" />
        <Tile class="style-14" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-1" />
        <Tile class="style-20" />
      </div>

      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-2" />
        <Tile class="style-8" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-2" />
        <Tile class="style-14" />
      </div>

      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-3" />
        <Tile class="style-9" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-3" />
        <Tile class="style-15" />
      </div>

      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-4" />
        <Tile class="style-5" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-4" />
        <Tile class="style-11" />
      </div>

      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-5" />
        <Tile class="style-17" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-5" />
        <Tile class="style-8" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-5" />
        <Tile class="style-14" />
      </div>

      <!-- Row 2 -->
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-1" />
        <Tile class="style-3" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-1" />
        <Tile class="style-9" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-1" />
        <Tile class="style-15" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-2" />
        <Tile class="style-3" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-2" />
        <Tile class="style-9" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-2" />
        <Tile class="style-15" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-3" />
        <Tile class="style-4" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-3" />
        <Tile class="style-10" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-3" />
        <Tile class="style-16" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-4" />
        <Tile class="style-6" />
      </div>
      <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-4" />
        <Tile class="style-12" />
      </div>
      <!-- <div v-on:click="randomNumber" class="tile-group">
        <Tile class="style-4" />
        <Tile class="style-18" />
      </div> -->

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
  methods: {
    randomNumber(event) {
      const numberOne = Math.floor(Math.random() * (20 - 1 + 1)) + 1
      const numberTwo = Math.floor(Math.random() * (20 - 1 + 1)) + 1
      const parent = event.target.closest('.tile-group')
      const children = parent.childNodes

      // get two different random numbers
      if (numberOne === numberTwo) {
        const numberTwo = Math.floor(Math.random() * (20 - 1 + 1)) + 1
      }

      for (let child = 0; child < children.length; child++) {
        const element = children[child]
        // remove classes
        element.removeAttribute('class')
      }
      // add classes
      setTimeout(function() {
        children[0].classList.add('tile');
        children[1].classList.add('tile');
        children[0].classList.add(`style-${numberOne}`);
        children[1].classList.add(`style-${numberTwo}`);
      }, 10)
    },
    randomize(event) {
      const allNodes = document.querySelector('.tiles').childNodes
      for (let child = 0; child < allNodes.length; child++) {
        const individual = allNodes[child]
        const numberOne = Math.floor(Math.random() * (20 - 1 + 1)) + 1
        const numberTwo = Math.floor(Math.random() * (20 - 1 + 1)) + 1
        const parent = individual.closest('.tile-group')
        const children = parent.childNodes

        // get two different random numbers
        if (numberOne === numberTwo) {
          const numberTwo = Math.floor(Math.random() * (20 - 1 + 1)) + 1
        }

        for (let child = 0; child < children.length; child++) {
          const element = children[child]
          // remove classes
          element.removeAttribute('class')
        }
        // add classes
        setTimeout(function() {
          children[0].classList.add('tile')
          children[1].classList.add('tile')
          children[0].classList.add(`style-${numberOne}`)
          children[1].classList.add(`style-${numberTwo}`)
        }, 10)
      }
    }
  },
  mounted () {

  },
};
</script>

<style lang="scss">

// colors

@import '../scss/global';

  .project-260 {
  }

  .randomize {
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
