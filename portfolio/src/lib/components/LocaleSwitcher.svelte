<script>
	import { config } from '$store/styleConfig';
	import { onMount } from 'svelte';
	import styleCfg from '$script/styleStorage';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$translation/i18n-svelte';
	import { locales } from '$translation/i18n-util';
	import { loadLocaleAsync } from '$translation/i18n-util.async';
	import { replaceLocaleInUrl } from '$main/utils';
	/**
	 * @param { import('$translation/i18n-types').Locales } newLocale
	 * @param { boolean } updateHistoryState
	 * @return { Promise<void> }
	 */
	const switchLocale = async (newLocale, updateHistoryState = true) => {
		// @ts-ignore
		// save to locale storage
		$config.language = newLocale;
		await styleCfg.save($config);

		if (!newLocale || $locale === newLocale) return;
		// load new dictionary from server
		await loadLocaleAsync(newLocale);
		// select locale
		setLocale(newLocale);
		// update `lang` attribute
		// @ts-ignore
		document.querySelector('html').setAttribute('lang', newLocale);
		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(location, newLocale));
		}
	};
	// update locale when navigating via browser back/forward buttons
	/** @param { PopStateEvent } event */
	const handlePopStateEvent = async ({ state }) => switchLocale(state.locale, false);
	// update locale when page store changes
	$: if (browser) {
		const lang = /** @type { import('$translation/i18n-types').Locales } page.params.lang */ (
			$page.params.lang
		);
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl(location, lang)
		);
	}

	$: language = 'en';

	onMount(async () => {
		// @ts-ignore
		language = $config.language;
		console.log('language:', language);
	});
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<ul class="flex gap-2">
	{#each locales as l}
		<li>
			<button
				type="button"
				class="link after:bg-primary"
				class:active={l === $locale}
				on:click={() => switchLocale(l)}
			>
				{l}
			</button>
		</li>
	{/each}
</ul>
