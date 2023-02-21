<script>
	// the way the language gets changed in the url
	import { base } from '$app/paths'; // gh-pages basepath
	// @ts-ignore
	const dev = base === '' ? true : false;
	
	export let asSelect = false;

	import styleCfg from '$script/styleStorage';
	import { config } from '$store/styleConfig';
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
		// save to locale storage
		$config = await styleCfg.load();
		// @ts-ignore
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
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(location, newLocale, dev));
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
			replaceLocaleInUrl(location, lang, dev)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

	{#if asSelect}
		<select class="select select-bordered w-auto">
			<option disabled selected>Language</option>
			{#each locales as l}
			<option class:active={l === $locale}>
				{l}
			</option>
			{/each}
		</select>
	{:else}
		<ul class="flex gap-2">
			{#each locales as l}
			<li>
				<button
					type="button"
					class="link after:bg-primary text-xl"
					class:active={l === $locale}
					on:click={() => switchLocale(l)}
				>
					{l}
				</button>
			</li>
			{/each}
		</ul>
	{/if}

	
		
		
			

	


