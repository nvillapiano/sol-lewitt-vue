<template>
  <div class="wall-drawing-610">
    <ProjectIntro
      title="Wall Drawing #610"
      summary="
      <p>Wall Drawing 610 was first drafted in the late 1980s, during the period of Sol LeWitt's career in which he was creating ink wash wall drawings featuring isometric forms. This staircase-like isometric figure implies volume, canted as it is towards the viewer, yet does not imply linear recession. The base and left-hand edge of the figure are parallel with the edges of the wall, acknowledging flatness, and the steps are angled, revealing additional faces to the prism without implying depth. This uneven and non-illusionistic method of implying three-dimensionality has several precedents in art history, such as the intuitive perspective used by Egyptian relief sculptors, and the tilted perspective that appears in early Renaissance panel painting and frescoes.</p>
      <p><a href='https://massmoca.org/event/walldrawing610/'>Mass MoCA</p>
      "
    />

    <div class="wall-drawing-610__wrapper">
      <main class="wall-drawing-610__content">
        <section class="front-face">
          <section class="step">
          </section>
          <section class="step">
          </section>
          <section class="step">
          </section>
          <section class="step">
          </section>
        </section>
      </main>
    </div>

  </div>
</template>

<script>

import ProjectIntro from '@/components/ProjectIntro.vue'

export default {
  name: 'Wall Drawing 610',
  components: {
    ProjectIntro,
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

////////////////////////
//  Layout Variables  //
////////////////////////

$buildingBlock: 7vw;


%stepTop {
  content: '';
  position: absolute;
  top: $buildingBlock * -1;
  left: 0;
  width: $buildingBlock;
  height: $buildingBlock * 1;
  background: none;
  transform: skew(-45deg) translateX(3.5vw);
}

%stepSide {
  content: '';
  position: absolute;
  top: 0;
  left: $buildingBlock;
  width: $buildingBlock * 1;
  height: $buildingBlock;
  background: none;
  transform: skewY(-45deg) translateY(-3.5vw);
}


.wall-drawing-610 {

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: $red;
  }

  .front-face {
    margin-top: $buildingBlock / 2;
  }

  .step {
    display: flex;
    position: relative;
    background: $coral;
    height: $buildingBlock;

    &::before {
      @extend %stepTop;
    }

    &::after {
      @extend %stepSide;
    }

    &:nth-of-type(1) {
      width: $buildingBlock;

      &::before {
        background: $cream;
        width: calc( #{$buildingBlock} + 0.1rem );
      }

      &::after {
        background: $lime;
      }
    }

    &:nth-of-type(2) {
      width: $buildingBlock * 2;

      &::before {
        background: $goldenrod;
        top: $buildingBlock * -1;
        left: $buildingBlock;
      }

      &::after {
        background: $wine;
        top: -0.25px;
        left: $buildingBlock * 2;
      }
    }

    &:nth-of-type(3) {
      width: $buildingBlock * 3;

      &::before {
        background: $periwinkle;
        top: $buildingBlock * -1;
        left: $buildingBlock * 2;
      }

      &::after {
        background: $avocado;
        top: -0.05rem;
        left: $buildingBlock * 3;
        height: calc( #{$buildingBlock} + 0.05rem);
      }
    }

    &:nth-of-type(4) {
      width: $buildingBlock * 4;

      &::before {
        background: $grape;
        top: $buildingBlock * -1;
        left: $buildingBlock * 3;
      }

      &::after {
        background: $brick;
        top: -0.25px;
        left: $buildingBlock * 4;
      }
    }
  }
}


</style>
