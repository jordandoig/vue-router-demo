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
}
</script>
