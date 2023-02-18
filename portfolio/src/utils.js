/**
 * @param { Location } location
 * @param { string } locale
 * @returns string
 */
export const replaceLocaleInUrl = ({ pathname, search }, locale) => {
	const [, , ...rest] = pathname?.split('/') ?? ''
	return `/${[locale, ...rest].join('/')}${search}`
}
