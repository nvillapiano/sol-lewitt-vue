<template>
  <header class="global-header">
    <div class="global-header__logo">
      <span class="global-header__logo__letter">D</span>
      <span class="global-header__logo__letter">o</span>
      <span class="global-header__logo__letter">I</span>
      <span class="global-header__logo__letter">T</span>
      <span class="global-header__logo__letter">L</span>
      <span class="global-header__logo__letter">e</span>
      <span class="global-header__logo__letter">w</span>
      <span class="global-header__logo__letter">i</span>
      <span class="global-header__logo__letter">T</span>
      <span class="global-header__logo__letter">T</span>
    </div>
    <nav class="evergreen-navigation">
      <div class="evergreen-navigation--index">
        <div class="evergreen-navigation--index__control">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <a href="/info">
        <div class="evergreen-navigation--info">
          <img src="/info.png" alt="">
        </div>
      </a>

    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>


<style scoped lang="scss">
  @import '../scss/global';

  .global-header {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {

      &__letter {
        @include marvin-visions-big-bold;
        font-size: 4rem;

        &:nth-of-type(1) {
          color: $red;
        }

        &:nth-of-type(2) {
          color: $coral;
        }

        &:nth-of-type(3) {
          color: $cream;
          margin-left: 0.4ch;
        }

        &:nth-of-type(4) {
          color: $lime;
        }

        &:nth-of-type(5) {
          color: $goldenrod;
          margin-left: 0.4ch;
        }

        &:nth-of-type(6) {
          color: $wine;
        }

        &:nth-of-type(7) {
          color: $periwinkle;
        }

        &:nth-of-type(8) {
          color: $avocado;
        }

        &:nth-of-type(9) {
          color: $grape;
        }

        &:nth-of-type(10) {
          color: $brick;
        }
      }
    }

    .evergreen-navigation {
      display: flex;
      align-items: center;

      &--info {
        border: 0.4rem solid $grey;
        padding: 0.6rem 1rem;
        border-radius: 50%;

        img {
          max-height: 20px;
        }
      }

      &--index {
        margin: 0 2rem 0 0;

        &__control {
          width: 2.4rem;
          cursor: pointer;

          span {
            display: block;
            background: $grey;
            width: 100%;
            height: 0.4rem;
            margin: 0 0 0.5rem;

            &:last-of-type {
              margin: 0;
            }
          }
        }
      }
    }
  }
</style>
