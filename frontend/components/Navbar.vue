<template>
    <nav class="py-3 w-full">
        <div class="flex items-center justify-between max-w-5xl m-auto px-4">
            <NuxtLink to="/" class="items-center flex">
                <img src="~/assets/images/logo.png" alt="Rust Cobal Scientist" width="50" class="rounded-full">
                <span class="text-xl font-semibold text-light ml-4 500px:hidden">RustyGuard</span>
            </NuxtLink>
            <ul class="flex items-center">
                <li class="mx-3"><NuxtLink to="/auth/login" class="text-gray-500">Account</NuxtLink></li>
                <li class="mx-3"><NuxtLink to="https://github.com/webmentordev/rusty_guard_discord_bot" target="_blank"><Icon name="grommet-icons:github" class="text-gray-500 text-2xl" /></NuxtLink></li>
                <li class="ml-3"><NuxtLink to="https://discord.com/api/oauth2/authorize?client_id=884066291944652841&permissions=2048&scope=bot" target="_blank" rel="nofollow" class="bg-main flex items-center rounded-md text-sm text-white px-4 py-3 font-semibold">Invite Bot <Icon name="bx:bxs-server" class="ml-1 380px:hidden" /></NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>