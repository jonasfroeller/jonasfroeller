import type { PageLoad } from './$types';
import { i18nObject } from '$translation/i18n-util.js';

export const load: PageLoad = async ({ parent, params }) => {
	// wait for `+layout.ts` to load dictionary and pass locale information
	const { locale } = await parent();
	// if you need to output a localized string in a `load` function,
	// you always need to create a new `i18nObject` instance in each `load` function
	// to not run into shared server state issues
	const LL = i18nObject(locale);

	return {
		lang: params.lang.includes('.html') ? params.lang.replace('.html', '') : params.lang
	};
};
