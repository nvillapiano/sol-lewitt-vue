<template>
  <div class="wall-drawing-1256">
    <ProjectIntro
      title="Wall Drawing #1256"
      summary="
        <p>
          Early in the development of the new Berlin Embassy, Sol LeWitt was invited to create one of his wall drawings for its entrance. In 2004, he presented his design for the Behrenstrasse entrance, a composition that was sure to draw attention. The exacting pattern follows the outline of a five pointed star: one side in black and white and the other in brilliant colors. LeWitt’s wall drawings usually evolve from a set idea that gives directions to those who actually paint or draw the work. The idea of stars as guiding lights may not have been the artist’s, but they will inevitably be seen that way. An earlier composition of lines going off at angles from several points was popularly know as “Star Wars.”
        </p>
        <p>
          <a href='https://slideplayer.com/slide/4723042/'>A Selection of Art in the Embassy</a>
        </p>
        <br />
        <br />
        <p>This interpretation utilizes a user click to toggle between the vibrant color state and contrasted black &amp; white.</p>
      "
    />
    <div @click="toggleColors" class="stars" title="Click to toggle colors">

      <!-- <button class="button toggle-colors">Toggle colors</button> -->

      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />

    </div>
  </div>
</template>

<script>

import ProjectIntro from '@/components/ProjectIntro.vue'
import Star from '@/components/wall-drawing-1256/Star.vue'

export default {
  name: 'Wall Drawing 1256',
  components: {
    ProjectIntro,
    Star,
  },
  methods: {
    toggleColors() {
      const colorsTarget = document.querySelector('.stars')
      colorsTarget.classList.toggle('grayscale')
    }
  },
  mounted() {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 2);
      }
    };
    scrollToTop();
  },
};
</script>

<style lang="scss">

@import '../scss/global';

.wall-drawing-1256 {

  .button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    // background: $black;
    box-shadow: $shadow;
  }

  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }

    &.grayscale {

      .star {

        &:nth-of-type(even) {
          color: $black !important;
        }

        &:nth-of-type(odd) {
          color: $grey !important;
        }
      }
    }
  }

}

</style>
