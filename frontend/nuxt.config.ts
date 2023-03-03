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
    },
    runtimeConfig: {
        pocketbaseURL: "http://127.0.0.1:8090",
        public: {
            pocketbaseURL: "http://127.0.0.1:8090"
        }
    },
});
