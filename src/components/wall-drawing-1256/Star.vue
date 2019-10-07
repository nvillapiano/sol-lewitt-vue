<template>
  <div class="star">
    <div class="star__part"></div>
    <div class="star__part"></div>
    <div class="star__part"></div>
  </div>
</template>

<script>
export default {
  name: 'Star',
};
</script>


<style scoped lang="scss">
//             1 - ruby  2 - navy   3 - kelly  4 - maroon  5 - straw  6 - plum
$star-colors: #C3280A, #295BA3, #3A881D, #8A0C04, #D1C928, #4F3D6D;

$star-unit: 25rem;
$star-unit-small: 16rem;
$star-unit-tiny: 8rem;
$z-base: 100;
$scale-base: 1.6;
$scale-mod: 0.6;

// Breaks from globals.scss
$bp1: 768px;
$bp2: 440px;

// Transition variables
$transition-duration: 0.05s;
$duration-unit: 0.05s;

  .star {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: $star-unit * 2;
    height: $star-unit * 2;
    color: nth($star-colors, 1);
    transition-timing-function: ease-out;

    &__part {
      position: absolute;
      width: 0;
      height: 0;
      margin-top: $star-unit * 0.65;

      &:nth-of-type(1) {
        top: $star-unit * -0.55;
        left: $star-unit * 0.65;
        border-left: $star-unit * 0.35 solid transparent;
        border-right: $star-unit * 0.35 solid transparent;
        border-bottom: $star-unit solid;
        border-bottom-color: inherit;
        z-index: 2;
      }

      &:nth-of-type(2) {
        border-left: $star-unit solid transparent;
        border-right: $star-unit solid transparent;
        border-bottom: $star-unit * 0.75 solid;
        border-bottom-color: inherit;
        transform: rotate(-35deg);
      }

      &:nth-of-type(3) {
        border-left: $star-unit solid transparent;
        border-right: $star-unit solid transparent;
        border-bottom: $star-unit * 0.75 solid;
        border-bottom-color: inherit;
        transform: rotate(35deg);
      }
    }

    @media only screen and (max-width: $bp1) {
      width: $star-unit-small * 2;
      height: $star-unit-small * 2;

      .star__part {
        margin-top: $star-unit-small * 0.65;

        &:nth-of-type(1) {
          top: $star-unit-small * -0.55;
          left: $star-unit-small * 0.65;
          border-left: $star-unit-small * 0.35 solid transparent;
          border-right: $star-unit-small * 0.35 solid transparent;
          border-bottom: $star-unit-small solid;
        }

        &:nth-of-type(2) {
          border-left: $star-unit-small solid transparent;
          border-right: $star-unit-small solid transparent;
          border-bottom: $star-unit-small * 0.75 solid;
        }

        &:nth-of-type(3) {
          border-left: $star-unit-small solid transparent;
          border-right: $star-unit-small solid transparent;
          border-bottom: $star-unit-small * 0.75 solid;
        }
      }
    }

    @media only screen and (max-width: $bp2) {
      width: $star-unit-tiny * 2;
      height: $star-unit-tiny * 2;

      .star__part {
        margin-top: $star-unit-tiny * 0.65;

        &:nth-of-type(1) {
          top: $star-unit-tiny * -0.55;
          left: $star-unit-tiny * 0.65;
          border-left: $star-unit-tiny * 0.35 solid transparent;
          border-right: $star-unit-tiny * 0.35 solid transparent;
          border-bottom: $star-unit-tiny solid;
        }

        &:nth-of-type(2) {
          border-left: $star-unit-tiny solid transparent;
          border-right: $star-unit-tiny solid transparent;
          border-bottom: $star-unit-tiny * 0.75 solid;
        }

        &:nth-of-type(3) {
          border-left: $star-unit-tiny solid transparent;
          border-right: $star-unit-tiny solid transparent;
          border-bottom: $star-unit-tiny * 0.75 solid;
        }
      }
    }
  }

  .star {
    z-index: $z-base;

    &:nth-of-type(1) {
      transition-duration: $duration-unit * 0.9;
    }

    &:nth-of-type(2) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 0});
      color: nth($star-colors, 2);
      z-index: $z-base - 1;
      transition-delay: 0.1s;
      transition-duration: $duration-unit * 1;
    }

    &:nth-of-type(3) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 1});
      color: nth($star-colors, 3);
      z-index: $z-base - 2;
      transition-delay: 0.12s;
      transition-duration: $duration-unit * 1.1;
    }

    &:nth-of-type(4) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 2});
      color: nth($star-colors, 4);
      z-index: $z-base - 3;
      transition-delay: 0.13s;
      transition-duration: $duration-unit * 1.2;
    }

    &:nth-of-type(5) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 3});
      color: nth($star-colors, 5);
      z-index: $z-base - 4;
      transition-delay: 0.14s;
      transition-duration: $duration-unit * 1.3;
    }

    &:nth-of-type(6) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 4});
      color: nth($star-colors, 6);
      z-index: $z-base - 5;
      transition-delay: 0.15s;
      transition-duration: $duration-unit * 1.4;
    }

    &:nth-of-type(7) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 5});
      color: nth($star-colors, 1);
      z-index: $z-base - 6;
      transition-delay: 0.16s;
      transition-duration: $duration-unit * 1.5;
    }

    &:nth-of-type(8) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 6});
      color: nth($star-colors, 2);
      z-index: $z-base - 7;
      transition-delay: 0.17s;
      transition-duration: $duration-unit * 1.6;
    }

    &:nth-of-type(9) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 7});
      color: nth($star-colors, 3);
      z-index: $z-base - 8;
      transition-delay: 0.18s;
      transition-duration: $duration-unit * 1.7;
    }

    &:nth-of-type(10) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 8});
      color: nth($star-colors, 4);
      z-index: $z-base - 9;
      transition-delay: 0.19s;
      transition-duration: $duration-unit * 1.8;
    }

    &:nth-of-type(11) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 9});
      color: nth($star-colors, 5);
      z-index: $z-base - 10;
      transition-delay: 0.20s;
      transition-duration: $duration-unit * 1.9;
    }

    &:nth-of-type(12) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 10});
      color: nth($star-colors, 6);
      z-index: $z-base - 11;
      transition-delay: 0.21s;
      transition-duration: $duration-unit * 2.0;
    }

    &:nth-of-type(13) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 11});
      color: nth($star-colors, 1);
      z-index: $z-base - 12;
      transition-delay: 0.22s;
      transition-duration: $duration-unit * 2.1;
    }

    &:nth-of-type(14) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 22});
      color: nth($star-colors, 2);
      z-index: $z-base - 13;
      transition-delay: 0.23s;
      transition-duration: $duration-unit * 2.2;
    }

    &:nth-of-type(15) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 13});
      color: nth($star-colors, 3);
      z-index: $z-base - 14;
      transition-delay: 0.25s;
      transition-duration: $duration-unit * 2.3;
    }

    &:nth-of-type(16) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 14});
      color: nth($star-colors, 4);
      z-index: $z-base - 15;
      transition-delay: 0.25s;
      transition-duration: $duration-unit * 2.4;
    }

    &:nth-of-type(17) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 15});
      color: nth($star-colors, 5);
      z-index: $z-base - 16;
      transition-delay: 0.26s;
      transition-duration: $duration-unit * 2.5;
    }

    &:nth-of-type(18) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 16});
      color: nth($star-colors, 6);
      z-index: $z-base - 17;
      transition-delay: 0.27s;
      transition-duration: $duration-unit * 2.6;
    }

    &:nth-of-type(19) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 17});
      color: nth($star-colors, 1);
      z-index: $z-base - 18;
      transition-delay: 0.28s;
      transition-duration: $duration-unit * 2.7;
    }

    &:nth-of-type(20) {
      transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * 18});
      color: nth($star-colors, 2);
      z-index: $z-base - 19;
      transition-delay: 0.29s;
      transition-duration: $duration-unit * 2.8;
    }
  }
</style>
