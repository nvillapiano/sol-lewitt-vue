<template>
  <div class="project-260 glossary">
    <ProjectIntro
      title="Wall Drawing #260: tile glossary"
    />
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
import ProjectIntro from '@/components/ProjectIntro.vue'

export default {
  name: 'home',
  components: {
    Tile,
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

$tileSize: calc(100vw / 8);

.project-260 {

  &.glossary {

    .tiles {
      counter-reset: section;

      .tile {
        border: 0.1rem dashed $grey;

        &::after {
          counter-increment: section;
          content: "Tile " counter(section) "";
          position: absolute;
          top: 0;
          left: 0;
          font-size: 1.2rem;
          background: rgba($black, 0.75);
          padding: 0.5rem;
        }
      }
    }
  }
}

.tiles {
  display: flex;
  flex-wrap: wrap;
}

.tile-group {
  position: relative;
  width: $tileSize;
  height: $tileSize;

  .tile {
    position: absolute;
    border: none;
  }
}

.tile {
  width: $tileSize;
  height: $tileSize;
  // border: 0.1rem dotted $grey;
  border: none;
  margin: 2rem 1rem;
}

</style>
