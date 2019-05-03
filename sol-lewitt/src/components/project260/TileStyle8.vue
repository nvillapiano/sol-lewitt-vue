<template>
  <section class="tile style-8">
  </section>
</template>

<script>
export default {
  name: 'TileStyle8',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-8 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 1.75rem;
      right: 0;
      width: 100%;
      height: 100%;
      border: 0.1rem solid orange;
      border-radius: 100% 0% 0% 0%;
      border-bottom-color: transparent;
      border-right-color: transparent;
      transform: rotate(45deg) translateX(0);
    }
  }

</style>
