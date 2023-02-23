import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev'); // || const dev = process.env.NODE_ENV === 'developement' || const dev = base === '' ? true : false;

const ghPages = true; // prefix (repo name) needed if hosted on GitHub (default = false => for: netlify, vercel, 000webhost, oracleCloud...)
const basePath = ghPages == true ? (dev ? '' : '/jonasfroeller') : ''; // base: <prefix> | domain/repo/de/<search> (true) || domain/de/<search> (false)
const buildDir = ghPages == true ? '../jonasfroeller' : '../jonasfroeller-noprefix'; // folder: jonasfroeller (gh-pages) || folder: jonasfroeller-noprefix (any other static hosting service)

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
			entries: [
				'/',
				'/en',
				'/de',
				'/en/about/profile',
				'/de/about/profile',
				'/en/about',
				'/de/about',
				'/en/legal',
				'/de/legal'
			] // /en&&de/about && /en&&de/legal because they should be generated but the user gets refered to other url on builded version (no link to them, but can be reached by accident) [DOCU: https://kit.svelte.dev/docs/page-options#prerender-troubleshooting]
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
