import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node'; // https://kit.svelte.dev/docs/adapter-node
import adapterVercel from '@sveltejs/adapter-vercel'; // Hosting for Node
import preprocess from 'svelte-preprocess'; // import { vitePreprocess } from '@sveltejs/kit/vite';
const dev = process.argv.includes('dev'); // || const dev = process.env.NODE_ENV === 'developement' || const dev = base === '' ? true : false; || https://kit.svelte.dev/docs/modules#$app-environment => import { browser, building, dev, version } from '$app/environment';

const staticBuild = process.env.staticBuild ? JSON.parse(process.env.staticBuild.toLowerCase()) : true;
// BUILD: set prefixFolder=true/false && npm run build || npm run build => false
const prefixFolder = process.env.prefixFolder ? JSON.parse(process.env.prefixFolder.toLowerCase()) : false; // prefix (repo name) needed if hosted on GitHub (default = false => for: netlify, vercel, 000webhost, oracleCloud...) 
const basePath = prefixFolder == true ? (dev ? '' : '/jonasfroeller') : ''; // base: <prefix> | domain/repo/de/<search> (true) || domain/de/<search> (false)
const buildDir = prefixFolder == true ? '../jonasfroeller' : '../jonasfroeller-noprefix'; // folder: jonasfroeller (gh-pages) || folder:jonasfroeller - noprefix(any other static hosting service) (STATIC)
buildDir = staticBuild ? buildDir : "../jonasfroeller-node"; // (NODE)

let vercel = process.env.vercelBuild ? JSON.parse(process.env.vercelBuild.toLowerCase()) : false; // (VERCEL build: set prefixFolder=true vercelBuild=true && npm run build || export prefixFolder=true vercelBuild=true && npm run build)


console.log(`basePath: '${basePath}'`);
console.log('buildDir:', buildDir);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter:
			vercel ? adapterVercel() :
			staticBuild ?
			adapterStatic({
				pages: buildDir,
				assets: buildDir,
				fallback: null /* 'error.html' */,
				precompress: false,
				strict: true
			}) : 
			adapterNode({
				out: buildDir,
				precompress: false,
				envPrefix: '',
				polyfill: true
			}),
		appDir: 'portfolio',
		paths: {
			base: basePath
		},
		alias: {
			$main: 'src',
			$translation: 'src/lib/translations',
			$image: 'src/lib/assets/imgs',
			$component: 'src/lib/components',
			$store: 'src/lib/stores',
			$script: 'src/lib/scripts',
			$server: 'src/lib/server'
		},
		prerender: {
			entries: [
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