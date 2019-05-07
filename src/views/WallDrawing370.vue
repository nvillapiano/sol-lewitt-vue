<template>
  <div class="wall-drawing-370">
    <ProjectIntro
      title="Wall Drawing #370"
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
