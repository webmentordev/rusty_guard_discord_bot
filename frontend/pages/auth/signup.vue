<template>
    <header class="h-[80vh] flex items-center justify-center">
        <form @submit.prevent="signupHandler" class="p-9 bg-light-gray max-w-xl w-full rounded-lg px-6">
            <h2 class="mb-6 text-3xl text-white font-semibold">Create Account!</h2>
            <p class="text-gray-300 mb-3">We do not use personal information for any advertisement or email newsletters.</p>
            <p v-if="failed" class="text-red-600 mb-2">{{ failed }}</p>
            <p v-if="success" class="text-green-600 mb-2">{{ success }}</p>
            <input type="text" v-model="name" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Username">
            <input type="email" v-model="email" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Email Address">
            
            <input type="password" v-model="password" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Password">
            <input type="password" v-model="confirm_password" class="bg-dark text-gray-200 py-4 p-3 rounded-md w-full mb-3" placeholder="Confirm Password">
            <button type="submit" class="inlline-block py-3 px-6 bg-main text-white rounded-md">Signup</button>
            <p class="text-center text-gray-100">Already have an account? <NuxtLink to="/auth/login" class="underline text-main">Login account</NuxtLink></p>
        </form>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';

    const email = ref("");
    const password = ref("");
    const name = ref("");
    const confirm_password = ref("");

    const failed = ref("");
    const success = ref("");

    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.pocketbaseURL);
    useHead({
        title: "Create Account | RustyGuard"
    });

    onMounted(() => {
        if(pb.authStore.model != null){
            router.push('/dashboard')
        }
    });

    function signupHandler() {
        if(password.value !== confirm_password.value){
            failed.value = "Password and Confirm Password are not same!";
            return;
        }
        if(email.value !== "" && password.value !== "" && confirm_password.value !== "" && name.value !== ""){
            const data = {
                username: name.value.toLowerCase(),
                email: email.value,
                password: password.value,
                passwordConfirm: confirm_password.value,
                name: name.value
            };
            pb.collection('users').create(data).then(() => {
                success.value = "Account has been  created!"
                failed.value = ""
            }).catch(() => failed.value = "Email or username already exist!");
        }else{
            failed.value = "Please fill the form correctly!"
        }
    }
</script>