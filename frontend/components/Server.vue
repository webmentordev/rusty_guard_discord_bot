<template>
    <div class="px-2 text-sm">
        <h2 class="mb-2 text-white text-lg font-semibold">Servers Configuration</h2>
        <p v-if="failed" class="text-red-600 mb-2">{{ failed }}</p>
        <p v-if="success" class="text-green-600 mb-2">{{ success }}</p>
        <form @submit.prevent="createNewServer" class="flex items-center mb-6">
            <input type="text" v-model="server" class="bg-dark text-gray-200 py-3 p-3 rounded-md w-full" placeholder="Server Guild ID" required>
            <button type="submit" class="bg-main py-3 rounded-md text-white px-3 ml-2">AddServer</button>
        </form>
        <p class="p-3 bg-yellow-600 bg-opacity-10 border border-yellow-600 text-yellow-600 mb-3 rounded-lg">Please ensure that the Discord Bot has been added to the intended Discord Server prior to use. Failure to do so may result in the Bot being unresponsive to any commands issued.</p>
        <table class="text-gray-100 w-full table" v-if="dataArray.length">
            <tr>
                <th class="text-start text-lg">Server_ID</th>
                <th class="text-end text-lg">Created_At</th>
                <th class="text-end text-lg">Remove</th>
            </tr>
            <tr v-for="item in dataArray" :key="item.id" class="border-b border-gray-600">
                <td class="text-start">{{ item.guild_id }}</td>
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
    const server = ref("");
    
    const data = ref({});
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
        if(server.value != 0 && server.value != null){
            try{
                const string = BigInt(server.value).toString();
                const idResult = string.replace('n', '');
                data.value = {
                    guild_id: idResult,
                    user: pb.authStore.model.id
                }
            }catch(error){
                success.value = ""
                failed.value = "There is something wrong with the GuildID";
                return;
            }
            pb.collection('servers').create(data.value).then((res) => {
                failed.value = "";
                server.value = null;
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
    const removeServer = (id) => {
        if(confirm('Are you sure you wanna delete?')){
            pb.collection('servers').getOne(id).then((response) => {
                if(response.user == pb.authStore.model.id){
                    pb.collection('servers').delete(id).then(() => {
                        failed.value = ""
                        success.value = "Server Deleted!"
                        dataArray.value = dataArray.value.filter((item) => {
                            return item.id != id
                        })
                        isLoading.value = "No Data found!";
                    });
                }else{
                    success.value = ""
                    failed.value = "Something went wrong!"
                }
            })
        }
    }
</script>