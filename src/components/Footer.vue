<template>
  <footer class="global-footer">
    <nav class="global-footer__nav">
      <!-- <router-link to="/wall-drawing-260">Project 260</router-link>
      <router-link to="/wall-drawing-260-glossary">Project 260 glossary</router-link>
      <router-link to="/wall-drawing-370">Wall Drawing 370</router-link>
      <router-link to="/wall-drawing-610">Wall Drawing 610</router-link> -->

    </nav>
    <div class="copyright">
      <span class="copyright__letter">&copy;</span>
      <span class="copyright__letter">D</span>
      <span class="copyright__letter">o</span>
      <span class="copyright__letter">I</span>
      <span class="copyright__letter">t</span>
      <span class="copyright__letter">L</span>
      <span class="copyright__letter">e</span>
      <span class="copyright__letter">W</span>
      <span class="copyright__letter">i</span>
      <span class="copyright__letter">t</span>
      <span class="copyright__letter">t</span>
      <span class="copyright__letter">2</span>
      <span class="copyright__letter">0</span>
      <span class="copyright__letter">1</span>
      <span class="copyright__letter">9</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>


<style scoped lang="scss">

  @import '../scss/global';

  .global-footer {
    padding: 6rem 0 3rem;
    margin: 3rem 0 0;
    border-top: 0.1rem solid $grey;
    text-align: right;

    &__nav {

      a {
        position: relative;
        font-weight: bold;
        color: $grey;
        font-size: 1.2rem;
        margin: 0 1rem 0 0;
        white-space: none;
        text-decoration: none;
        transition: all 0.3s;

        &::before {
          content: '';
          position: absolute;
          bottom: -0.1rem;
          left: 50%;
          width: 100%;
          height: 0.1rem;
          background: $orange;
          transform: translateX(-50%) scale(0);
          transition: all 0.15s;

        }

        &:last-of-type {
          margin: 0;
        }

        &:hover {
          color: $orange;

          &::before {
            transform: translateX(-50%) scale(1);
          }
        }

        &.router-link-exact-active,
        &:active {
          color: $orange;
        }
      }
    }

    .copyright {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &__letter {
        @include marvin-visions-big-bold;
        font-size: 2rem;
        display: inline-flex;

        &:nth-of-type(1) {
          color: $goldenrod;
          font-size: 3rem;
          margin-bottom: -1rem;
        }

        &:nth-of-type(2) {
          color: $red;
          margin-left: 0.4ch;
        }

        &:nth-of-type(3) {
          color: $coral;
        }

        &:nth-of-type(4) {
          color: $cream;
          margin-left: 0.4ch;
        }

        &:nth-of-type(5) {
          color: $lime;
        }

        &:nth-of-type(6) {
          color: $goldenrod;
          margin-left: 0.4ch;
        }

        &:nth-of-type(7) {
          color: $wine;
        }

        &:nth-of-type(8) {
          color: $periwinkle;
        }

        &:nth-of-type(9) {
          color: $avocado;
        }

        &:nth-of-type(10) {
          color: $grape;
        }

        &:nth-of-type(11) {
          color: $brick;
        }

        &:nth-of-type(12) {
          color: $red;
          margin-left: 0.4ch;
        }

        &:nth-of-type(13) {
          color: $coral;
        }

        &:nth-of-type(14) {
          color: $cream;
        }

        &:nth-of-type(15) {
          color: $lime;
        }
      }
    }
  }
</style>
