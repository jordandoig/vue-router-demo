<template>
  <div id="app">
    <router-view/>
    <footer>
      <div id="dogs">
        <h4>Dogs</h4>
        <router-link to="/dogs/Carlos">Carlos</router-link>
        <router-link to="/dogs/Tino">Tino</router-link>
      </div>
      <button v-on:click="takeMeHome">Take Me Home</button>
      <div id="cats">
        <h4>Cats</h4>
        <router-link to="/cats/Sugar">Sugar</router-link>
        <router-link to="/cats/Smokey">Smokey</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    takeMeHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30%;
}

img {
  max-height: 500px;
}

button {
  height: min-content;
}
</style>
