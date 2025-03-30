// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
	 '@nuxtjs/tailwindcss',
	 '@vuesax-alpha/nuxt',
	 'nuxt-aos',
	],

	aos: {
		duration: 200
	},

	css: ['~/assets/css/tailwind.css'],
})