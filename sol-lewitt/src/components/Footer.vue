<template>
  <footer id="footer">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/project-260">Project 260</router-link> |
    <router-link to="/project-260-glossary">Project 260 glossary</router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #footer {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
