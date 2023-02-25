// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    app: {
        head: {
            title: "RustyGuard | Rust Support Bot",
            meta: [
                { name: "description", content: "Join Rust support bot for your rust server!" }
            ]
        }
    }
});
