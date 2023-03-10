<template>
    <div class="max-w-5xl m-auto py-8 px-4 ">
        <div class="flex items-center justify-between p-4 rounded-lg bg-light-gray mb-6">
            <h1 class="text-white text-2xl font-semibold">Welcome <span>{{ username }}</span>! 👋</h1>
            <form @submit.prevent="logoutHandler">
                <button class="bg-main py-2 px-4 rounded-md text-white hover:bg-dark hover:text-main">Logout</button>
            </form>
        </div>

        <div class="flex">
            <div class="max-w-[25%] w-full mr-6 p-4 rounded-lg bg-light-gray h-fit">
                <h2 class="mb-2 text-white font-semibold border-b text-2xl border-gray-600 pb-3">Navigation</h2>
                <ul>
                    <li><button class="text-white py-2 hover:text-main" @click="tab = 'servers'">Servers</button></li>
                    <li><button class="text-white py-2 hover:text-main" @click="tab = 'commands'">Commands</button></li>
                </ul>
            </div>
            <div class="w-full p-4 rounded-lg bg-light-gray">
                <Server v-if="tab == 'servers'" />
                <Command v-if="tab == 'commands'" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';
    const username = ref("");
    const tab = ref("servers");
    const router = useRouter();
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.pocketbaseURL);

    useHead({
        title: "Dashboard | RustyGuard"
    })

    onMounted(() => {
        if(pb.authStore.model == null){
            router.push('/auth/login');
        }
        username.value = pb.authStore.model.username;
    })
    const logoutHandler = () => {
        pb.authStore.clear();
        router.push('/auth/login');
    }
</script>