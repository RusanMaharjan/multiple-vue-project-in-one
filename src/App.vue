<template>
<AppHeader/>
<div class="w-full flex">
  <MarvelHeros/>
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import MarvelHeros from './components/MarvelHeros.vue';
export default {
    
    components: { AppHeader, MarvelHeros }
}
</script>

<style>

</style>