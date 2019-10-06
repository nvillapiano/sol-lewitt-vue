<template>
  <section class="tile style-3">
  </section>
</template>

<script>
export default {
  name: 'TileStyle3',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-3 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: 0.1rem solid $orange;
      border-radius: 0% 0% 0% 100%;
      border-top-color: transparent;
      border-right-color: transparent;
    }
  }

</style>
