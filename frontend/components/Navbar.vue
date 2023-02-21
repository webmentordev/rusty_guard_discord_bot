<template>
    <nav class="py-3 w-full">
        <div class="flex items-center justify-between max-w-5xl m-auto px-4">
            <NuxtLink to="/" class="items-center flex">
                <img src="~/assets/images/logo.png" alt="Rust Cobal Scientist" width="60" class="rounded-full">
                <span class="text-xl font-semibold text-light ml-4">RustySquare</span>
            </NuxtLink>
            <ul class="flex items-center">
                <li><NuxtLink to="https://discord.com/api/oauth2/authorize?client_id=884066291944652841&permissions=8&scope=bot" target="_blank" class="bg-main rounded-md text-white px-4 py-3 font-semibold">Join Server <Icon name="bx:bxs-server" class="ml-1 text-2xl" /></NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>