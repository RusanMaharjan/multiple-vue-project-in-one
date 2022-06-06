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
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
export default {
    computed: {
        herosCount() {
            return this.marvelHeroes.length + " heros.";
        },
    },
    
    
    data() {
        return {
            newHero: "Doctor Strange",
            fname: "Rusan",
            lname: "Maharjan",
            marvelHeroes: [
                { name: "Iron Man" },
                { name: "Ant Man" },
                { name: "Spider Man" },
            ]
        };
    },
    methods: {
        addHero() {
            if (this.newHero != "") {
                this.marvelHeroes.unshift({ name: this.newHero });
                this.newHero = "";
            }
            else {
                alert("Input hero name to proceed!!");
            }
        },
        remove(index) {
            this.marvelHeroes = this.marvelHeroes.filter((hero, i) => i != index);
        }
    },
}
</script>

<style>

</style>