import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev'); // process.env.NODE_ENV === 'developement'

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
			base: dev ? '' : '/jonasfroeller'
		},
		appDir: 'portfolio',
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
