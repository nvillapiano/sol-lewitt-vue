<template>
  <section class="shape">
    <div class="shape__inner">

    </div>
  </section>
</template>

<script>
export default {
  name: 'Shape',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .shape {
    position: relative;
    width: 30vw;
    height: 30vw;
    background: repeating-linear-gradient(180deg, black, black 20px, white 20px, white 40px);
    transition: all 0.3s;

    &__inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: calc(100% - 5vw);
      height: calc(100% - 5vw);
      background: repeating-linear-gradient(90deg, black, black 20px, white 20px, white 40px);
      transition: all 0.3s;
    }

    &:nth-of-type(even) {
      background: repeating-linear-gradient(90deg, black, black 20px, white 20px, white 40px);

      .shape__inner {
        background: repeating-linear-gradient(180deg, black, black 20px, white 20px, white 40px);
      }
    }

    &.square {
    }

    &.circle {

      .shape__inner {
        border-radius: 50%;
      }
    }

    &.triangle {

      .shape__inner {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }
    }

    &.rhombus {

      .shape__inner {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      }
    }
  }
</style>
