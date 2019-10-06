<template>
  <section class="tile style-15">
    <div class="curves">
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
      <div class="curve"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TileStyle15',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .style-15 {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .curves {
      transform: rotate(45deg);
    }

    .curve {
      width: 2rem;
      height: 2rem;
      border: 0.1rem solid $orange;
      border-radius: 50%;
      transform: rotate(90deg);
      position: relative;

      &:nth-of-type(odd) {
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        top: 1.3rem;
        left: 0.8rem;
        margin-left: 0rem;
        margin-top: -1.2rem;
      }

      &:nth-of-type(even) {
        border-left-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;
        top: 0.6rem;
        left: -0.6rem;
        margin-bottom: -1.4rem;
      }
    }
  }

</style>
