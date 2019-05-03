<template>
  <section class="tile style-11">
  </section>
</template>

<script>
export default {
  name: 'TileStyle11',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-11 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 0.1rem;
      background: $orange;
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      overflow: hidden;
    }
  }

</style>
