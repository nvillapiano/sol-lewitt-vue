<template>
  <router-link :to="GalleryTileUrl" class="gallery-tile">
    <div class="gallery-tile__image" :style="`background-image: url(${GalleryTileImgSrc});`">
    </div>
    <div class="gallery-tile__title">{{GalleryTileTitle}}</div>
  </router-link>
</template>

<script>
export default {
  name: 'GalleryTile',
  props: {
    GalleryTileTitle: String,
    GalleryTileImgSrc: String,
    GalleryTileUrl: String,
  },
};
</script>


<style scoped lang="scss">
  @import '../../scss/global';

  .gallery-tile {
    width: calc(50vw - 10.1rem);
    margin: 0 5rem 5rem 0;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &:nth-of-type(even) {
      margin: 0 0 5rem;

      @media only screen and (max-width: $bp1) {
        margin: 0 0 4rem;
      }
    }

    &__image {
      width: 100%;
      height: calc(50vw - 10.1rem);
      background: no-repeat center center;
      background-size: cover;

      @media only screen and (max-width: $bp2) {
        height: calc(100vw - 9rem);
      }
    }

    &__title {
      @include marvin-visions-big-bold();
      font-size: 3rem;
      margin: 1rem 0;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      text-shadow: 0.2rem 0.2rem 0.1rem $black;
    }

    @media only screen and (max-width: $bp1) {
      width: calc(50vw - 6.1rem);
      margin: 0 2rem 4rem 0;
    }

    @media only screen and (max-width: $bp2) {
      width: calc(100vw - 9rem);
      margin: 0 0 4rem;
    }
  }
</style>
