<template>
    <div class="px-2">
        <h2 class="mb-2 text-white text-lg font-semibold ">Servers Configuration</h2>
        <p v-if="failed" class="text-red-600 mb-2">{{ failed }}</p>
        <p v-if="success" class="text-green-600 mb-2">{{ success }}</p>
        <form @submit.prevent="createNewServer" class="flex items-center mb-6">
            <input type="number" v-model="server" class="bg-dark text-gray-200 py-3 p-3 rounded-md w-full" placeholder="Server Guild ID" required>
            <button type="submit" class="bg-main py-3 rounded-md text-white px-3 ml-2">AddServer</button>
        </form>
        <table class="text-gray-100 w-full" v-if="dataArray.length">
            <tr>
                <th class="text-start text-lg">Server_ID</th>
                <th class="text-end text-lg">Created_At</th>
            </tr>
            <tr v-for="item in dataArray" :key="item.id">
                <td class="text-start py-2 border-b border-gray-600">{{ item.guild_id }}</td>
                <td class="text-end py-2 border-b border-gray-600">{{ item.created }}</td>
            </tr>
        </table>
        <p v-else class="text-white mt-3">{{ isLoading }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';
    
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.pocketbaseURL);

    const failed = ref("");
    const success = ref("");
    const server = ref(0);
    
    const isLoading = ref('Loading...');
    const dataArray = ref([]);

    onMounted(() => {
        pb.collection('servers').getFullList(1, 50, {
            filter: "user='"+pb.authStore.model.id+"'"
        }).then((res) => {
            dataArray.value = res
            if(dataArray.value.length == 0){
                isLoading.value = "No Data Found!"
            }
        })
    })
    const createNewServer = () => {
        if(server.value != 0 && typeof(server.value) == 'number'){
            const data = {
                guild_id: server.value,
                user: pb.authStore.model.id
            }
            pb.collection('servers').create(data).then((res) => {
                failed.value = "";
                success.value = "Server has been added!";
                dataArray.value.push(res)
            }).catch(() => {
                success.value = ""
                failed.value = "Server already exist!"
            });
        }else{
            success.value = ""
            failed.value = "Guild ID must be a number";
        }
    }
</script>