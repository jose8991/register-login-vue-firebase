<template>
  <nav>
    <TopHeader/>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Registrarse</router-link> |
    <router-link to="/login">Ingresar</router-link> |
    <router-link to="/manager">Administrador</router-link>
  </nav>
  <router-view/>
</template>

<script>
  import TopHeader from './components/TopHeader.vue';
  export default {
    components: { 
      "TopHeader": TopHeader 
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
