<script>
	// Svelte
	import { browser } from '$app/environment';
	// Components
	import Category from '$component/Category.svelte';

	let name = 'projects';

	async function loadData() {
		const response = await fetch(
			'https://api.github.com/users/jonasfroeller/repos?per_page=100&sort=updated&direction=desc' // GET REPOS
		);
		const data = await response.json();
		return data;
	}
</script>

<Category {name} />

<section class="flex justify-center gap-4 flex-wrap max-w-full break-all">
	{#await loadData()}
		{#if browser && navigator && navigator.userAgent && !navigator.userAgent.includes('js_disabled')}
			<p><em>loading data...</em></p>
		{:else}
			<noscript
				>Sorry, your browser does not support JavaScript or you deactivated it! Features of the
				website that do not work without JS: style-mode, language-change, settings save...
			</noscript>
		{/if}
	{:then data}
		{#each data as element}
			<div
				class="card max-w-full w-96 bg-base-100 hover:border-primary border-2 transition hover:transition"
			>
				<span class="absolute top-2 right-2 badge badge-secondary uppercase"
					>{element.language ?? 'text'}</span
				>
				<div class="card-body p-7">
					<h2 class="card-title">
						{element.name}
					</h2>
					<p>{element.description}</p>
					<div class="card-actions">
						<div
							class="badge h-auto badge-outline hover:border-primary border-2 transition hover:transition"
						>
							<a
								href={element.html_url}
								target="_blank"
								rel="noreferrer"
								class="flex items-center gap-1 p-1"
								><iconify-icon icon="mdi:github" width="20" height="20" />Code</a
							>
						</div>
						{#if element.homepage != null && element.homepage != undefined && element.homepage != false && element.homepage != 0}
							<div
								class="badge h-auto badge-outline hover:border-primary border-2 transition hover:transition"
							>
								<a
									href={element.homepage}
									target="_blank"
									rel="noreferrer"
									class="flex items-center gap-1 p-1"
									><iconify-icon
										icon="eos-icons:application-outlined"
										width="20"
										height="20"
									/>Demo</a
								>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	{:catch error}
		{#if browser && navigator && navigator.userAgent && !navigator.userAgent.includes('js_disabled')}
			<p><em>{error} - couldn't load data...</em></p>
		{:else}
			<noscript
				>Sorry, your browser does not support JavaScript or you deactivated it! Features of the
				website that do not work without JS: style-mode, language-change, settings save...
			</noscript>
		{/if}
	{/await}
	<!-- projects/[projectID]/ -->
	<!-- https://api.github.com/repos/jonasfroeller/jonasfroeller/git/trees/master?recursive=true // GET REPO -->
	<!-- <div> folder structure of project
		<h1>{nameCapitalized}</h1>
		{#await loadData()}
			<p>loading data...</p>
		{:then data}
			{#each data as element}
				<div>
					<p>{element.path}</p>
				</div>
			{/each}
		{:catch error}
			<p>{error} - couldn't load data...</p>
		{/await}
	</div> -->
</section>
