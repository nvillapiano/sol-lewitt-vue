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
    @extend %heading1;
  }
</style>
