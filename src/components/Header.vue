<template>
  <header class="global-header" id="top">
    <router-link class="global-header__logo" to="/">
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
    </router-link>
    <nav class="evergreen-navigation">
      <div class="evergreen-navigation--index">
        <div @click="toggleContent()" class="evergreen-navigation--index__control">
          <span class="evergreen-navigation--index__control__bar"></span>
          <span class="evergreen-navigation--index__control__bar"></span>
          <span class="evergreen-navigation--index__control__bar"></span>
        </div>
        <div class="evergreen-navigation--index__content">
          <ul>
            <li @click="toggleContent()">
              <router-link to="/wall-drawing-1256">Wall Drawing #1256</router-link>
            </li>
            <li @click="toggleContent()">
              <router-link to="/wall-drawing-610">Wall Drawing #610</router-link>
            </li>
            <li @click="toggleContent()">
              <router-link to="/wall-drawing-370">Wall Drawing #370</router-link>
            </li>
            <li @click="toggleContent()">
              <router-link to="/wall-drawing-260">Wall Drawing #260</router-link>
            </li>
            <li @click="toggleContent()">
              <router-link to="/wall-drawing-260-glossary">Wall Drawing #260: Tile Glossary</router-link>
            </li>
          </ul>
        </div>
      </div>
      <Information />
    </nav>
  </header>
</template>

<script>

import Information from '@/components/Information.vue'

export default {
  name: 'Header',
  components: {
    Information,
  },
  methods: {
    toggleContent() {
      const trigger = document.querySelector('.evergreen-navigation--index__control')
      const target = document.querySelector('.evergreen-navigation--index__content')

      if (target.classList.contains('show')) {
        target.classList.remove('show')
        trigger.classList.remove('active')
        setTimeout(() => {
          target.style.zIndex = '-1'
        }, 100)
      } else {
        target.classList.add('show')
        trigger.classList.add('active')
        setTimeout(() => {
          target.style.zIndex = '100'
        }, 100)
      }
    },
  },
  mounted () {
    // TODO: Generalize these!
    // close index
    document.addEventListener('click', (event) => {
      const trigger = document.querySelector('.evergreen-navigation--index__control')
      const target = document.querySelector('.evergreen-navigation--index__content')

      if (target.classList.contains('show')) {
        if (event.target.classList.contains('evergreen-navigation--index__content') || event.target.classList.contains('evergreen-navigation--index__control') || event.target.classList.contains('evergreen-navigation--index__control__bar')) {
          // return
        } else {
          target.classList.remove('show')
          trigger.classList.remove('active')
        }
      }
    }, false);
    // close info
    document.addEventListener('click', (informationEvent) => {
      const infoTrigger = document.querySelector('.information-control')
      const infoTarget = document.querySelector('.information-overlay')

      if (infoTarget.classList.contains('show')) {
        if (informationEvent.target.closest('.information-control') || informationEvent.target.closest('.information-overlay')) {
          // do nothing
        } else {
          infoTarget.classList.remove('show')
          infoTrigger.classList.remove('active')
          document.querySelector('html').classList.remove('overflow')
          document.querySelector('body').classList.remove('overflow')
        }
      }
    }, false);
  },
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
      text-decoration: none;

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

      &--index {
        margin: 0 2rem 0 0;
        position: relative;

        &__control {
          width: 2.4rem;
          cursor: pointer;

          span {
            display: block;
            background: $grey;
            width: 100%;
            height: 0.4rem;
            margin: 0 0 0.5rem;
            transition: background 0.3s;

            &:last-of-type {
              margin: 0;
            }
          }

          &.active, &:hover {

            span {

              &:nth-of-type(1) {
                background: $red;
                transition-delay: 0.1s;
              }

              &:nth-of-type(2) {
                background: $coral;
                transition-delay: 0.2s;
              }

              &:nth-of-type(3) {
                background: $cream;
                transition-delay: 0.3s;
              }
            }
          }
        }

        &__content {
          position: absolute;
          top: 4.5rem;
          right: -1.9rem;
          width: 30rem;
          max-width: calc(100vw - 9.4rem);
          border: 0.1rem solid $grey;
          padding: 3rem 3.5rem 3rem 4rem;
          opacity: 0;
          pointer-events: none;
          background: $black;
          box-shadow: $shadow;
          transition: opacity 0.3s;

          &::before {
            content: '';
            width: 2rem;
            height: 2rem;
            border: 0.1rem solid $grey;
            transform: rotate(45deg);
            position: absolute;
            top: -1rem;
            right: 2rem;
            border-right-color: $black;
            border-bottom-color: $black;
            background: $black;
          }

          ul,
          li {
            margin: 0;
            padding: 0 1rem 0 0;
            list-style: none;
            display: block;
            text-align: right;
            font-size: 1.6rem;
            margin: 0 0 1rem;

            &:last-of-type {
              margin: 0;
            }
          }

          li {
            position: relative;

            a {
              display: block;
              text-decoration: none;

              &:hover {
                color: $grey;
              }
            }

            &::before {
              content: '';
              position: absolute;
              top: 50%;
              right: -2rem;
              width: 1rem;
              height: 1rem;
              overflow: hidden;
              border-radius: 50%;
              background: $orange;
              transform: translateY(-50%);
              transition: background 0.3s;
            }

            &:hover {

              a {
                color: $grey;
              }

              &::before {
                background: $grey;
              }
            }

            &:nth-of-type(1n + 1) {

              a:not(:hover) {
                color: $red;
              }
            }

            &:nth-of-type(2n + 2) {
              a:not(:hover) {
                color: $coral;
              }
            }

            &:nth-of-type(3n + 3) {

              a:not(:hover) {
                color: $cream;
              }
            }

            &:nth-of-type(4n + 4) {

              a:not(:hover) {
                color: $lime;
              }
            }
          }

          &.show {
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }
  }
</style>
