import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess'; // || import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: '../portfolio-build',
			assets: '../portfolio-build/assets',
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			$main: 'src',
			$translation: 'src/lib/translations',
			$image: 'src/lib/assets/imgs',
			$component: 'src/lib/components',
			$store: 'src/lib/stores',
			$script: 'src/lib/scripts'
		}
		// prerender: { entries: ['/de', '/en'] }
	},
	preprocess: [
		preprocess({
			postcss: true
		})
		// vitePreprocess()
	]
};

export default config;
