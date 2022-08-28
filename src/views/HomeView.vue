<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="proyecto de pospercity en produccion"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/VentanaPrincipal.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .home img {
    width: 30%;
    height: 30%;
  }
</style>
