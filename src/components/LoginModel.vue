<template>
    <section 
    @click="$emit('closeLogin')"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50">
    </section>
  
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
                <div class="p-2 border">
                    <h1 class="text-2xl text-center">Login</h1>
                    <form class="py-2 my-2" @submit.prevent="submit">
                        <div class="my-4">
                            <label>Email or Username</label>
                            <input v-model="form.email" type="text" placeholder="Enter email or username.." class="rounded shadow p-2 w-full">
                        </div>
                        <div class="my-4">
                            <label>Password</label>
                            <input v-model="form.password" type="Password" placeholder="Enter password.." class="rounded shadow p-2 w-full">
                        </div>
                        <div class="my-4">
                            <button type="submit" class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-600 text-white p-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        submit() {
            //submit the form
        }
    }
}
</script>

<style>

</style>