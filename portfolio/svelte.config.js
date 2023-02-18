import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: '../jonasfroeller',
			assets: '../jonasfroeller',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/jonasfroeller' : ''
		}, // for gh-pages: /jonasfroeller/
		alias: {
			$main: 'src',
			$translation: 'src/lib/translations',
			$image: 'src/lib/assets/imgs',
			$component: 'src/lib/components',
			$store: 'src/lib/stores',
			$script: 'src/lib/scripts'
		},
		prerender: {
			entries: ['/de', '/en']
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
