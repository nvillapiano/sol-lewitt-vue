<template>
  <section class="tile style-5">
  </section>
</template>

<script>
export default {
  name: 'TileStyle5',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-5 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 1.75rem;
      width: 100%;
      height: 100%;
      border: 0.1rem solid orange;
      border-radius: 100% 0% 0% 0%;
      border-bottom-color: $black;
      border-right-color: $black;
      transform: rotate(135deg) translateX(0);
    }
  }

</style>
