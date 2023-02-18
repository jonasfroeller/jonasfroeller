// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import { replaceLocaleInUrl } from '$main/utils';
import { baseLocale, locales } from '$translation/i18n-util';
import { loadLocaleAsync } from '$translation/i18n-util.async';

/** @typedef { import('$translation/i18n-types').Locales } Locales } */

/** @type { import('./$types').LayoutLoad<{ locale: Locales }> } */
export const load = async ({ url, params }) => {
	// fallback needed because of https://github.com/sveltejs/kit/issues/3647
	const lang = /** @type { Locales } */ (params.lang || url.pathname.split('/')[2]); // const lang = /** @type { Locales } */ (params.lang || url.pathname.split('/')[1]);

	// redirect to base locale if language is not present
	if (!locales.includes(lang)) {
		throw redirect(302, replaceLocaleInUrl(url.pathname, baseLocale));
	}

	await loadLocaleAsync(lang);

	return { locale: lang };
};

// Static Generation: true
// Generation: Documentation: https://kit.svelte.dev/docs/page-options#prerender
export const prerender = true;

// Generate SPA? => Set false
// Documentation: https://kit.svelte.dev/docs/page-options#ssr
export const ssr = true;

// How to manage the trailing slashes in the URLs
// /about = 'ignore' (default)
// /about/ = 'always'
// https://kit.svelte.dev/docs/page-options#trailingslash
export const trailingSlash = 'ignore';