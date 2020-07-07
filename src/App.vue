<template>
  <div id="app">
    <router-view class="main"/>
    <footer>
      <div id="dogs">
        <h4>Dogs</h4>
        <router-link to="/dogs/Carlos">Carlos</router-link>
        <router-link :to="{ name: 'DogHome', params: { name: 'Tino' }}">Tino</router-link>
      </div>
      <div>
        <h4>All the ways Home</h4>
        <button v-on:click="stringPath">String Path</button>
        <button v-on:click="pathObject">Path Object</button>
        <button v-on:click="namedRoute">Named Route</button>
        <button v-on:click="namedWithQuery">Named With Query</button>
        <button v-on:click="onCompleteCallback">With Complete Callback</button>
        <button v-on:click="goBack">Back</button>
      </div>
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
    stringPath () {
      // literal string path
      this.$router.push('/')
    },
    pathObject () {
      // object
      this.$router.push({ path: '/' })
    },
    namedRoute () {
      // named route
      this.$router.push({ name: 'Home' })
    },
    namedWithQuery () {
      // with query, resulting in /?q=why-the-query
      this.$router.push({ name: 'Home', query: { q: 'why-the-query' } })
    },
    onCompleteCallback () {
      // log to the console on successful route
      this.$router.push('/', () => {
        console.log('It worked!')
      }, () => {
        console.log('It didn\'t work.')
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
html, body {
  min-height: 95vh;
  padding: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30%;
  border-top: 1px solid black;
}

img {
  max-height: 500px;
}

button {
  height: min-content;
}
</style>
