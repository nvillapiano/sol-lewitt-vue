<template>
  <section class="tile style-10">
  </section>
</template>

<script>
export default {
  name: 'TileStyle10',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-10 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 0.1rem;
      background: $orange;
      transform: translateY(-50%);
    }
  }

</style>
