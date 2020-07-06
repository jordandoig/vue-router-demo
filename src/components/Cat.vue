<template>
  <div class="cat">
    <img :src="imgPath">
    <h1>This cat's name is {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Cat',
  data () {
    return {
      name: this.$route.params.name,
      imgPath: require('@/assets/' + this.$route.params.name + '.jpg')
    }
  }
  // NOTE(jd): Without this watch in place, the name/img will not
  //           update when navigating from one cat to another
  // watch: {
  //   $route (to, from) {
  //     this.name = to.params.name
  //     this.imgPath = require('@/assets/' + to.params.name + '.jpg')
  //   }
  // }
}
</script>
