<template>
  <div class="wall-drawing-370">
    <ProjectIntro
      title="Wall Drawing #370"
      summary="
        <p>
          Sol LeWitt (American, 1928–2007) executed drawings by hand throughout his life;
          in 1968 he extricated his work from the confines of the frame and transferred it
          directly to the wall. The wall compositions were designed for limited duration and maximum
          flexibility within a broad range of architectural settings. Initially executed by drafters,
          these works in their finished state were most often slated for destruction. A seminal
          practitioner of Conceptual Art, LeWitt emphasized the creative idea that generates a work
          of art, as opposed to the work's material existence. &#8220;For each work of art that becomes
          physical,&#8221; he wrote, &#8220;there are many variations that do not.&#8221;

          Sol LeWitt's 1982 Wall Drawing #370: Ten Geometric Figures (including right triangle,
          cross, X, diamond) with three-inch parallel bands of lines in two directions was installed
          at the Museum over a period of four weeks. The drawing will be on view in its complete state
          through January 28, 2018, when it will be painted over.
        </p>
        <p>
          <a href='https://www.metmuseum.org/exhibitions/listings/2014/sol-lewitt'>Metropolitan Museum of Art</a>
        </p>
      "
    />
    <div class="wall">
      <Shape class="square" />
      <Shape class="circle" />
      <Shape class="triangle" />
    </div>
  </div>
</template>

<script>

import ProjectIntro from '@/components/ProjectIntro.vue'
import Shape from '@/components/wall-drawing-370/Shape.vue'

export default {
  name: 'Wall Drawing 370',
  components: {
    ProjectIntro,
    Shape,
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

.wall-drawing-370 {

  .wall {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    min-height: calc(100vh - 40rem);
    padding: 2.3vw;
  }
}


</style>
