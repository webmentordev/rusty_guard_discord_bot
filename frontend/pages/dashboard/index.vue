<template>
    <div class="max-w-5xl m-auto py-8 px-4 ">
        <div class="flex items-center justify-between p-4 rounded-lg bg-light-gray">
            <h1 class="text-white text-2xl font-semibold">Welcome to Dahboard!</h1>
            <form @submit.prevent="logoutHandler">
                <button class="bg-main py-2 px-4 rounded-md text-white hover:bg-dark hover:text-main">Logout</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    import PocketBase from 'pocketbase';
    const router = useRouter();
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.pocketbaseURL);

    onMounted(() => {
        if(pb.authStore.model == null){
            router.push('/auth/login');
        }
    })
    const logoutHandler = () => {
        pb.authStore.clear();
        router.push('/auth/login');
    }
</script>