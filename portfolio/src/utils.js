import { base } from '$app/paths';

/**
 * @param { Location } location
 * @param { string } locale
 * @returns string
 */
export const replaceLocaleInUrl = ({ pathname, search }, locale) => {
	console.log(pathname, search, locale);
	const [, , , ...rest] = pathname?.split('/') ?? ''; // [, , ...rest]
	return `${base}/${[locale, ...rest].join('/')}${search}`;
};
