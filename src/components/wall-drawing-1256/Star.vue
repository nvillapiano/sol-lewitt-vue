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

$star-count: 20;

$star-unit: 24rem;
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
  width: $star-unit * 2;
  height: $star-unit * 2;
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

@for $i from 1 through $star-count {

  $scale-offset: $i - 2;

  $z-const: 100;
  $z-index: $z-const - ($i - 1);

  $transition-delay: ($i + 9) * .01s;

  $duration-const: 0.05s;
  $transition-duration: $duration-const * ($i + 8);

  .star:nth-of-type(#{$i}) {
    transform: translateX(-50%) translateY(-50%) scale(#{$scale-base + $scale-mod * $scale-offset});
    z-index: $z-index;
    transition-delay: $transition-delay;
    transition-duration: $transition-duration;
  }
}


@for $i from 1 through 6 {

  .star:nth-of-type(#{$i}n + #{$i}) {
    color: nth($star-colors, $i);
  }
}
</style>
