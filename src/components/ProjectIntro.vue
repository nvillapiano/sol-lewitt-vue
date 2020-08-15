<template>
  <section class="project-intro">
    <h1 class="project-intro__title">{{title}}</h1>
    <div v-if="summary" class="project-intro__summary shadow">
      <button
        class="project-intro__summary-toggle"
        v-on:click="toggleSummary()"
      >
        <svg height='300px' width='300px' x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100">
          <path d="M32.7,83.2c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l31.8-31.8c0.8-0.8,0.8-2,0-2.8L35.5,16.8  c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8L63.1,50L32.7,80.4C31.9,81.2,31.9,82.5,32.7,83.2z"></path>
        </svg>
      </button>
      <div v-html="summary"></div>
    </div>
  </section>
</template>

<script>
import { setTimeout } from 'timers';


export default {
  name: 'ProjectIntro',
  props: {
    title: String,
    summary: String,
  },
  methods: {
    setHeight() {
      const summaryElement = document.getElementsByClassName('project-intro__summary')[0]

      if (summaryElement !== undefined) {
        const summaryHeight = summaryElement.offsetHeight

        summaryElement.setAttribute('style', `height: ${summaryHeight}px`)

        setTimeout(() => {
          summaryElement.classList.add('collapsed')
        }, 10)
      }
    },
    toggleSummary() {
      const summaryElement = document.getElementsByClassName('project-intro__summary')[0]

      if (summaryElement !== undefined) {
        summaryElement.classList.toggle('collapsed')
        document.getElementsByClassName('project-intro__summary-toggle')[0].classList.toggle('active')
      }
    },
    setFontSize() {
      const titleTarget = document.getElementsByClassName('project-intro__title')[0]
      const charCount = titleTarget.innerText.length
      const charSize = window.innerWidth / charCount
      const maxSize = 100

      if (charSize <= maxSize) {
        titleTarget.style.fontSize = `calc(100vw / ${charCount} + 1.5rem)`
      }
    },
  },
  mounted () {
    this.setHeight()
    this.setFontSize()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
  @import '../scss/global';

  .project-intro {
    border-bottom: 0.1rem solid $grey;
    padding: 0 0 4rem;
    margin: 0 0 4rem;
    //
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      font-size: 10rem;
      margin: 6rem 0 5rem;

      @media only screen and (max-width: $bp1) {
        font-size: calc(4vw + 1.6rem);
      }

      @media only screen and (max-width: $bp2) {
        font-size: 2.4rem;
      }
    }

    &__summary {
      position: relative;
      max-width: 80rem;
      margin: -5rem 0 0 0;
      padding: 0 5rem 0 0;
      overflow: hidden;
      transition: height 0.3s;

      &.shadow {

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3rem;
          background-image: linear-gradient(rgba($black, 0), $black);
          opacity: 0;
          transition: opacity 0.3s;
        }
      }

      &.collapsed {
        height: 9.8rem !important;

        &.shadow {

          &::after {
            opacity: 1;
          }
        }
      }
    }

    &__summary-toggle {
      position: absolute;
      bottom: 0rem;
      right: 0;
      z-index: 1;
      border: 0;
      width: 4rem;
      height: 4rem;

      svg {
        fill: $grey;
        max-width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 4rem;
        transform: rotate(90deg);
        transition: all 0.3s;

        path {
          fill: $grey;
          transition: all 0.3s;
        }
      }

      &:hover {
        background: $black;

        svg {

          path {
            fill: $orange;
          }
        }
      }

      &:focus {
        outline: none;
      }

      &.active {

        svg {
          transform: rotate(90deg) rotateY(180deg);
        }
      }
    }
  }
</style>
