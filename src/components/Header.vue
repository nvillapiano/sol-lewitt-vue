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
      <div @click="toggleInfo()" class="evergreen-navigation--info">
        <img src="/info.png" alt="">
      </div>


    </nav>
    <div class="information-overlay">
      <div @click="toggleInfo()" class="information-overlay__bg"></div>
      <div @click="toggleInfo()" class="information-overlay__close">
        <span @click="toggleInfo()"></span>
        <span @click="toggleContent()"></span>
      </div>
      <div class="information-overlay__content">
        <h1>
          Information
        </h1>
        <p>
          Sol LeWitt came to fame in the late 1960s with his wall drawings and "structures" (a term he preferred instead of "sculptures") but was prolific in a wide range of media including drawing, printmaking, photography, painting, installation, and artist's books. He has been the subject of hundreds of solo exhibitions in museums and galleries around the world since 1965. He is regarded as a founder of both Minimal and Conceptual art. His prolific two and three-dimensional work ranges from wall drawings (over 1200 of which have been executed) to hundreds of works on paper extending to structures in the form of towers, pyramids, geometric forms, and progressions. According to the principle of his work, LeWitt's wall drawings are usually executed by people other than the artist himself. Even after his death, people are still making these drawings.
          <br><br>
          - <a href="https://en.wikipedia.org/wiki/Sol_LeWitt">Wikipedia</a>
        </p>
        <p>
          This site serves as a digital execution of his select works.
        </p>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
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
    toggleInfo() {
      const trigger = document.querySelector('.evergreen-navigation--info')
      const target = document.querySelector('.information-overlay')

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
    document.addEventListener('click', (event) => {
      const trigger = document.querySelector('.evergreen-navigation--index__control')
      const target = document.querySelector('.evergreen-navigation--index__content')

      if (target.classList.contains('show')) {
        if (event.target.classList.contains('evergreen-navigation--index__content') || event.target.classList.contains('evergreen-navigation--index__control') || event.target.classList.contains('evergreen-navigation--index__control__bar')) {

        } else {
          target.classList.remove('show')
          trigger.classList.remove('active')
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

      &--info {
        border: 0.4rem solid $grey;
        padding: 0.6rem 1rem;
        border-radius: 50%;
        transition: border-color 0.3s;
        cursor: pointer;

        &.active, &:hover {
          border-color: $lime;
        }

        img {
          max-height: 20px;
        }
      }

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

    .information-overlay {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      box-shadow: $shadow;
      background: $black;
      max-width: 90vw;
      max-height: 90vh;
      opacity: 0;
      pointer-events: none;
      z-index: -1;
      transition: opacity 0.3s;

      &.show {
        opacity: 1;
        pointer-events: all;
      }

      &__content {
        position: relative;
        padding: 4rem;
        border: 0.1rem solid $grey;
        z-index: 2;

        h1 {
          text-align: center;
        }
      }

      &__close {
        position: absolute;
        top: -1.1rem;
        right: -1.1rem;
        padding: 1rem 0;
        z-index: 2;
        cursor: pointer;

        span {
          width: 2.4rem;
          height: 0.4rem;
          background: $grey;
          display: block;
          transform: rotate(-45deg);
          transition: background 0.3s;
          position: relative;
          z-index: 20;

          & + span {
            transform: rotate(45deg);
            margin-top: -0.4rem;
          }
        }

        &:hover {

          span {
            background: $goldenrod;

            & + span {
              background: $goldenrod;
            }
          }
        }
      }

      &__bg {
        position: absolute;
        top: -100vh;
        left: -100vw;
        width: 200vw;
        height: 200vh;
        background: rgba($black, 0.8);
        z-index: 1;
        pointer-events: all;
      }
    }
  }
</style>
