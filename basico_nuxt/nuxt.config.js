export default {
  	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
	title: 'nuxt',
	htmlAttrs: {
		lang: 'pt-br'
	},
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: 'Minha descrição' },
		{ name: 'format-detection', content: 'telephone=no' }
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/my-plugin',
		'@/plugins/dayjs',
		'@/plugins/vtooltip',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
	],

	axios: {
		// proxy: true
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
	}
