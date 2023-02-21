import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev'); // || process.env.NODE_ENV === 'developement'

const ghPages = true; // prefix (repo name) needed if hosted on gh (default = false => netlify, vercel...)
const basePath = ghPages == true ? (dev ? '' : '/jonasfroeller') : ''; // base: dev ? "" : "/jonasfroeller" (gh-pages) || "" (any other static hosting service)
const buildDir = ghPages == true ? '../jonasfroeller' : '../jonasfroeller-noprefix'; // ../jonasfroeller (gh-pages) || ../jonasfroeller-noprefix (any other static hosting service)

console.log(`basePath: '${basePath}'`);
console.log('buildDir:', buildDir);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: buildDir,
			assets: buildDir,
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: basePath
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
			entries: ['/en/legal/terms-and-conditions', '/de/legal/terms-and-conditions']
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;

/* 
https://kit.svelte.dev/docs/page-options#prerender-troubleshooting
*/
