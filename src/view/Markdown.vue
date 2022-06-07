<template>
<div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
        <article class="w-1/2">
            <textarea v-model="text" class="w-full h-full" cols="30" rows="10"></textarea>
        </article>
        <article class="w-1/2 border bg-gray-500" v-html="markedText">
        </article>    
    </section>    
</div>
</template>

<script>
import { marked } from 'marked'



export default {
    data() {
        return {
            text: '',
        }
    },
    computed: {
        markedText() {
            return marked(this.text)
        }
    }
}
</script>

<style>

</style>