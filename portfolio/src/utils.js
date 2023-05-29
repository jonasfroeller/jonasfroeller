// @ts-nocheck
import { base } from '$app/paths';

/**
 * @param { Location } location
 * @param { string } locale
 * @param { boolean } defaultGen
 * @returns string
 */
export const replaceLocaleInUrl = ({ pathname, search }, locale, defaultGen) => {
	pathname = pathname ?? `/${locale}/home`;
	search = typeof search === "string" ? search : '';
	
	let [, , ...rest] = pathname?.split('/') ?? ''; // => /
	if (!defaultGen) {
		[, , , ...rest] = pathname?.split('/') ?? ''; // => prefix/
	}

	return `${base}/${[locale, ...rest].join('/')}${search}`;
};
