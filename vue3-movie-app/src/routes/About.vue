<template>
  <div class="about">
    <div class="icon">
      😊
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ github }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.about.name
    },
    email() {
      return this.$store.state.about.email
    },
    github() {
      return this.$store.state.about.github
    }
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