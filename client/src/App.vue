<template>
  <div id="app" class="container">
    <img class="logo" src="./assets/logo.png" alt="logo">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>



<style>
@import "assets/bootstrap.min.css";
  .logo{
    width: 300px;
    display: block;
    margin: auto;
  }
</style>
