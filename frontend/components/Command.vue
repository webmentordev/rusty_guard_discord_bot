<template>
    <div class="px-2 text-sm">
        <h2 class="mb-2 text-white text-lg font-semibold">Commands Configuration</h2>
        <p v-if="failed" class="text-red-600 mb-2">{{ failed }}</p>
        <p v-if="success" class="text-green-600 mb-2">{{ success }}</p>
        <form @submit.prevent="createCommand" class="mb-6">
            <input type="text" v-model="command" class="bg-dark text-gray-200 py-3 p-3 rounded-md w-full mb-3" placeholder="Command (like !website or !donation)" required>
            <textarea v-model="message"  cols="30" rows="4" class="bg-dark text-gray-200 py-3 p-3 rounded-md w-full mb-3" placeholder="Command message"></textarea>
            
            <select name="" id="" class="bg-dark text-gray-200 py-3 p-3 rounded-md w-full mb-3">
                <option value="" selected>Select a server</option>
                <option v-for="server in serverArray" :key="server.id" value="{{ server.guild_id }}">{{ server.guild_id }}</option>
            </select>
            
            <button type="submit" class="bg-main py-3 rounded-md text-white px-3 w-full">Add Command</button>
        </form>

        <table class="text-gray-100 w-full table" v-if="dataArray.length">
            <tr>
                <th class="text-start text-lg">Command</th>
                <th class="text-start text-lg">Message</th>
                <th class="text-end text-lg">Created_At</th>
                <th class="text-end text-lg">Remove</th>
            </tr>
            <tr v-for="item in dataArray" :key="item.id" class="border-b border-gray-600">
                <td class="text-start">{{ item.command }}</td>
                <td class="text-start">{{ item.message }}</td>
                <td class="text-end">{{ new Date(item.created).toLocaleString() }}</td>
                <td class="text-end py-2">
                    <form @submit.prevent="removeServer(item.id)">
                        <button type="submit" class="bg-main p-2 rounded-md text-white ml-2 py-2">Remove</button>
                    </form>
                </td>
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
    const command = ref("");
    const message = ref("");
    
    const data = ref({});
    const isLoading = ref('Loading...');
    const dataArray = ref([]);
    const serverArray = ref([]);

    onMounted(() => {
        pb.collection('commands').getFullList(1, 50).then((res) => {
            dataArray.value = res
            if(dataArray.value.length == 0){
                isLoading.value = "No Data Found!"
            }
        });
        pb.collection('servers').getFullList(1, 50, {
            filter: "user='"+pb.authStore.model.id+"'"
        }).then((res) => {
            serverArray.value = res
            if(serverArray.value.length == 0){
                isLoading.value = "No Data Found!"
            }
        })
    })
</script>
