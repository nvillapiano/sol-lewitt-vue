<template>
  <footer class="global-footer">
    <nav class="global-footer__nav">
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/wall-drawing-260">Project 260</router-link>
      <router-link to="/wall-drawing-260-glossary">Project 260 glossary</router-link>
      <router-link to="/wall-drawing-370">Wall Drawing 370</router-link>
    </nav>
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
    padding: 3rem 0 1rem;
    margin: 3rem 0 0;
    border-top: 0.1rem solid $grey;
    //
    padding: 0;
    margin: 0 0 4rem;
    border: 0;
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
  }
</style>
