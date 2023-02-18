// import { base } from '$app/paths';

/**
 * @param { Location } location
 * @param { string } locale
 * @returns string
 */
export const replaceLocaleInUrl = ({ pathname, search }, locale) => {
	const [, , , ...rest] = pathname?.split('/') ?? ''; // [, , ...rest]
	return `/${[locale, ...rest].join('/')}${search}`; // ${base}
};
