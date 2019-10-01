<template>
  <footer class="global-footer">
    <nav class="global-footer__nav">
      <!-- <router-link to="/wall-drawing-260">Project 260</router-link>
      <router-link to="/wall-drawing-260-glossary">Project 260 glossary</router-link>
      <router-link to="/wall-drawing-370">Wall Drawing 370</router-link>
      <router-link to="/wall-drawing-610">Wall Drawing 610</router-link> -->

    </nav>
    <a href="https://github.com/nvillapiano/sol-lewitt-vue" class="copyright">
      <span class="copyright__letter">&copy;</span>
      <span class="copyright__letter">N</span>
      <span class="copyright__letter">i</span>
      <span class="copyright__letter">c</span>
      <span class="copyright__letter">k</span>
      <span class="copyright__letter">V</span>
      <span class="copyright__letter">i</span>
      <span class="copyright__letter">l</span>
      <span class="copyright__letter">l</span>
      <span class="copyright__letter">a</span>
      <span class="copyright__letter">p</span>
      <span class="copyright__letter">i</span>
      <span class="copyright__letter">a</span>
      <span class="copyright__letter">n</span>
      <span class="copyright__letter">o</span>
      <span class="copyright__letter">2</span>
      <span class="copyright__letter">0</span>
      <span class="copyright__letter">1</span>
      <span class="copyright__letter">9</span>
    </a>
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
      text-decoration: none;

      &__letter {
        @include marvin-visions-big-bold;
        font-size: 2rem;
        display: inline-flex;

        // Color wheel

        &:nth-of-type(1n + 1) {
          color: $red;
        }

        &:nth-of-type(2n + 2) {
          color: $coral;
        }

        &:nth-of-type(3n + 3) {
          color: $cream;
        }

        &:nth-of-type(4n + 4) {
          color: $lime;
        }

        &:nth-of-type(5n + 5) {
          color: $goldenrod;
        }

        &:nth-of-type(6n + 6) {
          color: $wine;
        }

        &:nth-of-type(7n + 7) {
          color: $periwinkle;
        }

        &:nth-of-type(8n + 8) {
          color: $avocado;
        }

        &:nth-of-type(9n + 9) {
          color: $grape;
        }

        &:nth-of-type(10n + 10) {
          color: $brick;
        }

        // Character specific
        &:nth-of-type(1) {
          font-size: 3rem;
          margin-bottom: -1rem;
        }

        &:nth-of-type(2),
        &:nth-of-type(6),
        &:nth-of-type(16) {
          margin-left: 0.4ch;
        }
      }
    }
  }
</style>
