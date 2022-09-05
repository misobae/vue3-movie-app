<template>
  <div class="about">
    <div class="icon">
      {{ icon }}
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ github }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('about', [
      'icon',
      'name',
      'email',
      'github'
    ])
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .icon {
    font-size: 80px;
    }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>