<template>
  <section class="tile">
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
  name: 'Tile',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../../scss/global';

  .tile {

  }

  .style-1 {
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
      border-radius: 0 100% 0 50%;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  }

  .style-2 {
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
      border-radius: 0% 0% 100% 0%;
      border-top-color: transparent;
      border-left-color: transparent;
    }
  }

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

  .style-4 {
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
      border-radius: 100% 0% 0% 0%;
      border-bottom-color: transparent;
      border-right-color: transparent;
    }
  }

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
      border: 0.1rem solid $orange;
      border-radius: 100% 0% 0% 0%;
      border-bottom-color: $black;
      border-right-color: $black;
      transform: rotate(135deg) translateX(0);
    }
  }

  .style-6 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: -3.05rem;
      right: 0;
      width: 100%;
      height: 100%;
      border: 0.1rem solid $orange;
      border-radius: 100% 0% 0% 0%;
      border-bottom-color: transparent;
      border-right-color: transparent;
      transform: rotate(-135deg) translateX(0);
    }
  }

  .style-7 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: -1.75rem;
      width: 100%;
      height: 100%;
      border: 0.1rem solid $orange;
      border-radius: 100% 0% 0% 0%;
      border-bottom-color: transparent;
      border-right-color: transparent;
      transform: rotate(-45deg) translateX(0);
    }
  }

  .style-8 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 3.05rem;
      right: 0;
      width: 100%;
      height: 100%;
      border: 0.1rem solid $orange;
      border-radius: 100% 0% 0% 0%;
      border-bottom-color: transparent;
      border-right-color: transparent;
      transform: rotate(45deg) translateX(0);
    }
  }

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

  .style-12 {
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
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      overflow: hidden;
    }
  }

  .style-13 {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

  .style-14 {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .curves {
      transform: rotate(90deg);
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

  .style-16 {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .curves {
      transform: rotate(-45deg);
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
      background:
        linear-gradient(to right, $black 33%, $orange 0%) top/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) right/0.1rem 2rem repeat-y,
        linear-gradient(to right, $black 33%, $orange 0%) bottom/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) left/0.1rem 2rem repeat-y;
      transform: translateX(50%);
    }
  }

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

  .style-19 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 0.1rem;
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      overflow: hidden;
      background:
        linear-gradient(to right, $black 33%, $orange 0%) top/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) right/0.1rem 2rem repeat-y,
        linear-gradient(to right, $black 33%, $orange 0%) bottom/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) left/0.1rem 2rem repeat-y;
    }
  }

  .style-20 {
    position: relative;
    overflow: hidden;


    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 0.1rem;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      overflow: hidden;
      background:
        linear-gradient(to right, $black 33%, $orange 0%) top/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) right/0.1rem 2rem repeat-y,
        linear-gradient(to right, $black 33%, $orange 0%) bottom/2rem 0.1rem repeat-x,
        linear-gradient($black 33%, $orange 0%) left/0.1rem 2rem repeat-y;
    }
  }

</style>
