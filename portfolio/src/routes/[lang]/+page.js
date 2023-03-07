// https://kit.svelte.dev/docs/routing#pages

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		lang: params.lang.includes('.html') ? params.lang.replace('.html', '') : params.lang
	};
}