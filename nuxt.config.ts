// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
        title: "Celesca - The Celestial Calculator",
        meta: [
          { name: "description", content: "รายละเอียดเว็บไซต์" }
        ]
    }
  }
  
})
