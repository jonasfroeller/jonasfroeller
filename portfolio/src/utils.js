/**
 * @param { Location } location
 * @param { string } locale
 * @returns string
 */
export const replaceLocaleInUrl = ({ pathname, search }, locale) => {
	console.log(pathname, search, locale);
	const [, , , ...rest] = pathname?.split('/') ?? ''; // [, , ...rest]
	return `/jonasfroeller/${[locale, ...rest].join('/')}${search}`;
};
