<template>
  <div class="project-260">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ProjectIntro
      title="Wall Drawing #260"
      summary="
        <p>
          Over the course of his prolific, influential career, Sol LeWitt (American, 1928–2007) produced more than 1,200 wall drawings. This installation, which fills a single large gallery, features one of LeWitt’s celebrated examples from the Museum’s collection, Wall Drawing #260 (1975). The work’s subtitle serves to describe the installation: “on black walls, all two-part combinations of white arcs from corners and sides, and white straight, not-straight, and broken lines.” Although LeWitt’s wall drawings evoke the tradition of Italian fresco paintings, they have established a distinct tradition of their own, in which linear systems, determined by LeWitt in advance, are carried out by others, be they artists, trained assistants, or novice volunteers, based upon his instructions. LeWitt compared his role to that of a composer who creates a score that may be played by musicians for generations to come. The concept—or score—remains constant, but the wall drawing, like a musical performance, will vary slightly each time it is realized anew.
        </p>
        <p>
          <a href='https://www.moma.org/calendar/exhibitions/305'>Museum of Modern Art</a>
        </p>
        <br/>
        <p>
          This translation of LeWitt's work has orange lines over black canvas, utilizing digital space in lieu of a physical wall. Additional abstractions include the ability to create fully randomized installations, and replace individual tiles with randomly generated patterns.
        </p>
      "
    />
    <div class="ui-bar">
      <button v-on:click="randomize" class="button randomize">
        <svg class="icon--shuffle" height='300px' width='300px' xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
          enable-background="new 0 0 100 100" xml:space="preserve">
          <path fill="#d5d0cb"
            d="M17.5,64.5h15.6c3.4,0,6.5-1.3,8.9-3.7L60.8,42c1.6-1.6,3.8-2.5,6.1-2.5h10.8l-1.6,1.6c-0.8,0.8-0.8,2,0,2.8  c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l5-5c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0.1-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2  c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0.1-0.3,0.1-0.5,0-0.8c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2  c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3l-5-5c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l1.6,1.6H66.9c-3.4,0-6.5,1.3-8.9,3.7  L39.2,58c-1.6,1.6-3.8,2.5-6.1,2.5H17.5c-1.1,0-2,0.9-2,2S16.4,64.5,17.5,64.5z">
          </path>
          <path fill="#d5d0cb"
            d="M17.5,39.5h15.6c2.3,0,4.4,0.9,6.1,2.5l4.3,4.3c0.4,0.4,0.9,0.6,1.4,0.6c0.5,0,1-0.2,1.4-0.6  c0.8-0.8,0.8-2,0-2.8L42,39.2c-2.4-2.4-5.5-3.7-8.9-3.7H17.5c-1.1,0-2,0.9-2,2S16.4,39.5,17.5,39.5z">
          </path>
          <path fill="#d5d0cb"
            d="M76.1,68.9c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l5-5c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0.1-0.1,0.1-0.1  c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0.1-0.3,0.1-0.5,0-0.8c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2  c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3l-5-5c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l1.6,1.6H66.9  c-2.3,0-4.4-0.9-6.1-2.5l-4.4-4.4c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l4.4,4.4c2.4,2.4,5.5,3.7,8.9,3.7h10.8l-1.6,1.6  C75.3,66.9,75.3,68.1,76.1,68.9z">
          </path>
        </svg>
        <span>randomize</span>
        </button>
    </div>
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
import ProjectIntro from '@/components/ProjectIntro.vue';
import Tile from '@/components/project260/Tile.vue';

export default {
  name: 'home',
  components: {
    ProjectIntro,
    Tile,
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
    margin-bottom: 9rem;
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

  .ui-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .button {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {

        .icon--shuffle {

          path {
            fill: $black;
          }
        }
      }
    }

    .icon--shuffle {
      max-width: 3rem;
      height: initial;
      margin: 0 1rem 0 0;

      path {
        transition: all 0.3s;
      }
    }
  }

</style>
