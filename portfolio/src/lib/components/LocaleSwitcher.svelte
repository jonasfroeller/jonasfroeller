<script>
	// @ts-nocheck
	// Stores
	import { langState } from '$store/styleConfig';
	import { config } from '$store/styleConfig';
	// Scripts
	import styleCfg from '$script/styleStorage';
	// Svelte
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	// Translation
	import { setLocale, locale } from '$translation/i18n-svelte';
	import { locales } from '$translation/i18n-util';
	import { loadLocaleAsync } from '$translation/i18n-util.async';
	import { replaceLocaleInUrl } from '$main/utils';

	export let asSelect = false;

	const dev = base === '' ? true : false;

	/**
	 * the way the language gets changed in the url
	 * @param { import('$translation/i18n-types').Locales } newLocale
	 * @param { boolean } updateHistoryState
	 * @return { Promise<void> }
	 */
	const switchLocale = async (newLocale, updateHistoryState = true) => {
		// save to locale storage
		$config = await styleCfg.load();
		$config.language = newLocale;
		await styleCfg.save($config);

		if (!newLocale || $locale === newLocale) return;
		// load new dictionary from server
		await loadLocaleAsync(newLocale);
		// select locale
		setLocale(newLocale);
		// update `lang` attribute
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

	onMount(async () => {
		$config = await styleCfg.load();
		$langState = $config.language;
	});
</script>

<svelte:window on:popstate={handlePopStateEvent} />

{#if asSelect}
	<select
		class="select select-bordered w-auto"
		bind:value={$langState}
		on:change={() => {
			$config.language = $langState;
			styleCfg.save($config);
			switchLocale($langState);
		}}
	>
		<option disabled selected>Language</option>
		{#each locales as l}
			<option value={l}>
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
