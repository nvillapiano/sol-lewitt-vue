<template>
  <section class="information">
    <div @click="toggleInfo()" class="information-control">
      <img src="/info.png" alt="">
    </div>
    <div class="information-overlay">
      <div class="information-overlay__caret"></div>
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
  </section>
</template>

<script>

export default {
  name: 'Information',
  methods: {
    toggleInfo() {
      const trigger = document.querySelector('.information-control')
      const target = document.querySelector('.information-overlay')

      if (target.classList.contains('show')) {
        target.classList.remove('show')
        trigger.classList.remove('active')
        document.querySelector('html').classList.remove('overflow')
        document.querySelector('body').classList.remove('overflow')
        setTimeout(() => {
          target.style.zIndex = '-1'
        }, 100)
      } else {
        target.classList.add('show')
        trigger.classList.add('active')
        document.querySelector('html').classList.add('overflow')
        document.querySelector('body').classList.add('overflow')
        setTimeout(() => {
          target.style.zIndex = '100'
        }, 100)
      }
    },
  },
};
</script>


<style scoped lang="scss">

  @import '../scss/global';

  .information-control {
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

  .information-overlay {
    position: fixed;
    top: 7.5rem;
    right: 1.6rem;
    box-shadow: $shadow;
    background: $black;
    width: 90vw;
    max-width: 40rem;
    max-height: 80vh;
    opacity: 0;
    pointer-events: none;
    z-index: -1;
    transition: opacity 0.3s;
    overflow: scroll;
    border-bottom: 0.1rem solid;

    @media only screen and (max-width: $bp1) {
      max-height: 45vh;
    }

    &__caret {
      position: absolute;
      top: 1rem;
      right: 2rem;
      width: 2rem;
      height: 2rem;
      border: 0.1rem solid $grey;
      transform: rotate(45deg);
      border-right-color: $black;
      border-bottom-color: $black;
      background: $black;
      z-index: 10;
    }

    &.show {
      opacity: 1;
      pointer-events: all;
    }

    &__content {
      position: relative;
      top: 2rem;
      padding: 4rem;
      border: 0.1rem solid;
      border-bottom: none;

      z-index: 2;

      h1 {
        text-align: center;
      }
    }
  }
</style>
