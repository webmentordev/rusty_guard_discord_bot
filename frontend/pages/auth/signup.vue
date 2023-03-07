<template>
    <header class="h-[80vh] flex items-center justify-center">
        <form @submit.prevent="loginHandler" class="p-9 bg-light-gray max-w-xl w-full rounded-lg px-6">
            <h2 class="mb-6 text-3xl text-white font-semibold">Create Account!</h2>
            <p class="text-gray-300 mb-3">We do not use personal information for any advertisement or email newsletters.</p>
            <input type="text" v-model="name" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Username">
            <input type="email" v-model="email" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Email Address">
            
            <input type="password" v-model="password" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Password">
            <input type="password" v-model="confirm_password" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Confirm Password">
            <button type="submit" class="inlline-block py-3 px-6 bg-main text-white rounded-md">Signup</button>
            <p class="text-center text-gray-100">Already have an account? <NuxtLink to="/auth/login" class="underline text-main">login account</NuxtLink></p>
        </form>
    </header>
</template>

<script setup>

</script>