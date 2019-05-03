<template>
  <section class="tile style-17">
  </section>
</template>

<script>
export default {
  name: 'TileStyle17',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-17 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0.1rem;
      height: 100%;
      border-left: 0.1rem dashed $orange;
      transform: translateX(50%);
    }
  }

</style>
