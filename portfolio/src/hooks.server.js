import { detectLocale } from '$translation/i18n-util';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { base } from '$app/paths';

/** @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
	// read language slug
	const [, , lang] = event.url.pathname.split('/');

	if (!lang) {
		const locale = getPreferredLocale(event);

		return new Response(null, {
			status: 302,
			headers: { Location: `${base}/${locale}` } // ${base}
		});
	}

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });
};

/** @type { (event: import('@sveltejs/kit').RequestEvent) => string } */
const getPreferredLocale = ({ request }) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);

	return detectLocale(acceptLanguageDetector);
};
