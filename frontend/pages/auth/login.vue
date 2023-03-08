<template>
    <header class="h-[80vh] flex items-center justify-center">
        <form @submit.prevent="loginHandler" class="p-9 bg-light-gray max-w-xl w-full rounded-lg px-6">
            <h2 class="mb-6 text-2xl text-white font-semibold">Login Account!</h2>
            <p v-if="failed" class="text-red-600 mb-2">{{ failed }}</p>
            <input type="email" v-model="email" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Email Address">
            <input type="password" v-model="password" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Password">
            <button type="submit" class="inlline-block py-3 px-6 bg-main text-white rounded-md">Login</button>
            <p class="text-center text-gray-100">Do not have an account? <NuxtLink to="/auth/signup" class="underline text-main">Create account</NuxtLink></p>
        </form>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';

    const email = ref("");
    const password = ref("");
    const failed = ref("");
    const router = useRouter();

    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.pocketbaseURL);

    useHead({
        title: "Login Account | RustyGuard"
    })

    onMounted(() => {
        if(pb.authStore.model != null){
            router.push('/dashboard')
        }
    });
    function loginHandler() {
        if(email.value !== "" && password.value !== ""){
            pb.collection('users').authWithPassword(email.value, password.value).then(() => {
                router.push('/dashboard');
            }).catch(() => failed.value = "Email or password doesn't match!");
        }else{
            failed.value = "Email or Password are missing!"
        }
    }
</script>