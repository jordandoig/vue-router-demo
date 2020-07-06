<template>
  <div>
    <img :src="imgPath">
    <h1>This dog's name is {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Dog',
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
