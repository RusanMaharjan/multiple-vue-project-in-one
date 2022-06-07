<template>
<AppHeader @openLoginModal="isLoginOpen = true"/>
<div class="w-full flex">
  <router-view></router-view>
</div>
<LoginModel v-if="isLoginOpen" @closeLogin="isLoginOpen = false"/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import MarvelHeros from './view/MarvelHeros.vue';
import AboutUs from './view/AboutUs.vue';
import LoginModel from './components/LoginModel.vue';
export default {
    
    components: { 
      AppHeader, 
      MarvelHeros, 
      AboutUs, 
      LoginModel 
    },
    data() {
        return {
            isLoginOpen: false,
        }
    }
}
</script>

<style>

</style>