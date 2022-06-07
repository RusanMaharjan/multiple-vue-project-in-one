<template>
  <nav class="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2">
      <!-- <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'MarvelHeros' }">Marvel Heros</router-link> |
      <router-link :to="{ name: 'AboutUs' }">About Us</router-link> -->
      <router-link v-for="item in list" :key="item.to" :to="item.to">{{ item.title }} | </router-link>
      <button class="mx-2" @click="$emit('openLoginModal')">Login</button>
  </nav>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
      return {
        list: [
          {
            title: "Home",
            to: "/"
          },
          {
            title: "Marvel heros",
            to: "/marvel-heros"
          },
          {
            title: "About us",
            to: "/about"
          },
          {
            title: "Markdown",
            to: "/markdown"
          },
          {
            title: "Slider Carousel",
            to: "/slider"
          },
          {
            title: "Calculator",
            to: "/calculator"
          },
        ]
      }
    }
}
</script>

<style>

</style>