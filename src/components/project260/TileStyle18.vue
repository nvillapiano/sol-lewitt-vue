<template>
  <section class="tile style-18">
  </section>
</template>

<script>
export default {
  name: 'TileStyle18',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-18 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 0.1rem;
      background:
        linear-gradient(to right, $black 33%, $orange 0%) top/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) right/0.1rem 2rem repeat-y,
        linear-gradient(to right, $black 33%, $orange 0%) bottom/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) left/0.1rem 2rem repeat-y;
      transform: translateY(-50%);
    }
  }

</style>
