<template>
  <div>
    <img :src="imgPath">
    <h1>This dog's name is {{ name }}</h1>
    <p>{{ name }} likes <router-link :to="{ name: 'DogToys', params: { name }}">Toys</router-link>!</p>
    <p>And also <router-link :to="{ name: 'DogTreats', params: { name }}">treats</router-link>.</p>
  </div>
</template>

<script>
export default {
  name: 'DogHome',
  data () {
    return {
      name: this.$route.params.name,
      imgPath: require('@/assets/' + this.$route.params.name + '.jpg')
    }
  },
  watch: {
    $route (to, from) {
      this.name = to.params.name
      this.imgPath = require('@/assets/' + to.params.name + '.jpg')
    }
  }
}
</script>
