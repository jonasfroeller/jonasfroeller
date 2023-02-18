import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: '../portfolio-build',
			assets: '../portfolio-build/assets',
			fallback: null,
			precompress: false,
			strict: true
		})
	},
	preprocess: vitePreprocess()
};

export default config;
