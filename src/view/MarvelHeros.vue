<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Marvel Heros {{ herosCount}}</h1>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in marvelHeroes" :key="hero.name">
        <div>
          {{ hero.name }}
        </div>
         <button @click="remove(index)">x</button>
      </li>
    </ul>

    <form class="mt-10" @submit.prevent="addHero">
      <input class="border rounded" type="text" v-model="newHero" placeholder="Type hero name here...">
      <button class="border rounded p-2 bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
export default {
  setup() {
    const newHero= ref("")
    const marvelHeroes = ref([
        { name: "Iron Man" },
        { name: "Ant Man" },
        { name: "Spider Man" },
    ]);

    //function to remove heros
    function remove(index) {
      marvelHeroes.value = marvelHeroes.value.filter((hero, i) => i != index);
    }

    //function to add hero
    function addHero() {
      if (newHero.value != "") {
          marvelHeroes.value.push({ name: newHero.value });
          newHero.value = "";
      }
      else {
          alert("Input hero name to proceed!!");
      }
    }

    //function to count heros
    const herosCount = computed({
      get:()=> marvelHeroes.value.length + " heros."
    })

    //return values
    return {
      marvelHeroes, newHero, remove, addHero, herosCount
    }
  }
}
</script>

<style>

</style>