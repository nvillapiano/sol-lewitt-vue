<template>
  <div class="home">
    <div class="gallery">
      <GalleryTile
        GalleryTileTitle="Wall Drawing #1256"
        GalleryTileImgSrc="/images/wall-drawing-1256.png"
        GalleryTileUrl="/wall-drawing-1256#top"
      />
      <GalleryTile
        GalleryTileTitle="Wall Drawing #610"
        GalleryTileImgSrc="/images/wall-drawing-610.png"
        GalleryTileUrl="/wall-drawing-610#top"
      />
      <GalleryTile
        GalleryTileTitle="Wall Drawing #370"
        GalleryTileImgSrc="/images/wall-drawing-370.png"
        GalleryTileUrl="/wall-drawing-370#top"
      />
      <GalleryTile
        GalleryTileTitle="Wall Drawing #260"
        GalleryTileImgSrc="/images/wall-drawing-260.png"
        GalleryTileUrl="/wall-drawing-260#top"
      />
      <GalleryTile
        GalleryTileTitle="Wall Drawing #260: Tile Glossary"
        GalleryTileImgSrc="/images/wall-drawing-260-tile-glossary.png"
        GalleryTileUrl="/wall-drawing-260-glossary#top"
      />
    </div>
  </div>
</template>

<script>

import GalleryTile from '@/components/home/GalleryTile.vue';

export default {
  name: 'home',
  components: {
    GalleryTile,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/global';

.home {

  .gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 5rem;

    @media only screen and (max-width: $bp1) {
      padding: 2rem;
    }
  }
}

</style>
