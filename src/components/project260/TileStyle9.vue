<template>
  <section class="tile style-9">
  </section>
</template>

<script>
export default {
  name: 'TileStyle9',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-9 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0.1rem;
      height: 100%;
      background: $orange;
      transform: translateX(50%);
    }
  }

</style>
