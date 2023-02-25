import { base } from '$app/paths';

/**
 * @param { Location } location
 * @param { string } locale
 * @param { boolean } dev
 * @returns string
 */
export const replaceLocaleInUrl = ({ pathname, search }, locale, dev) => {
	let [, , , ...rest] = pathname?.split('/') ?? ''; // [, , ...rest];
	// @ts-ignore
	if (dev || base == '') {
		[, , ...rest] = pathname?.split('/') ?? '';
	}

	return `${base}/${[locale, ...rest].join('/')}${search}`;
};
