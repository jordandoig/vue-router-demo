<template>
  <div class="cat">
    <h1>{{ name }}</h1>
    <img :src="imgPath">
    <h1>This cat's name is {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Cat',
  props: ['name', 'imgPath']
}
</script>
