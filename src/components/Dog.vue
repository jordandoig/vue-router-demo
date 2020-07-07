<template>
  <div class="dog">
    <h1>{{ name }}</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Dog',
  data () {
    console.log(this.$route.params.name)
    return {
      name: this.$route.params.name
    }
  },
  watch: {
    $route (to, from) {
      console.log(to.params.name)
      this.name = to.params.name
    }
  }
}
</script>
