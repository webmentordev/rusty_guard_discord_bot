<template>
    <header class="h-[80vh] flex items-center justify-center">
        <form @submit.prevent="loginHandler" class="p-9 bg-light-gray max-w-xl w-full rounded-lg px-6">
            <h2 class="mb-6 text-2xl text-white font-semibold">Login Account!</h2>
            <input type="email" v-model="email" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Email Address">
            <input type="password" v-model="password" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Password">
            <button type="submit" class="inlline-block py-3 px-6 bg-main text-white rounded-md">Login</button>
        </form>
    </header>
</template>

<script setup>
    import { ref } from 'vue';

    const email = ref("dda@glail.comasd");
    const password = ref("dddasasdasd");

    function loginHandler() {
        console.log(email.value)
        console.log(password.value)
    }

</script>