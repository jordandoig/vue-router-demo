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
    return {
      name: this.$route.params.name
    }
  },
  watch: {
    $route (to, from) {
      this.name = to.params.name
    }
  }
}
</script>
