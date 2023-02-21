<script>
	import Category from '$component/Category.svelte';
	let name = 'projects';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

	async function loadData() {
		const response = await fetch(
			'https://api.github.com/users/jonasfroeller/repos?sort=updated&direction=desc' // GET REPOS
		);
		const data = await response.json();
		return data;
	}
</script>

<Category {name} {nameCapitalized} />

<section class="flex justify-center gap-4 flex-wrap">
	{#await loadData()}
		<p>loading data...</p>
	{:then data}
		{#each data as element}
			<div
				class="card w-fit bg-base-100 shadow-xl hover:border-primary border-2 transition hover:transition"
			>
				<div class="card-body">
					<h2 class="card-title">
						{element.name}
						<div class="badge badge-secondary">{element.language.toUpperCase()}</div>
					</h2>
					<p>{element.description}</p>
					<div class="card-actions">
						<div
							class="badge h-auto badge-outline hover:border-primary border-2 transition hover:transition"
						>
							<a href={element.html_url} class="flex items-center gap-1 p-1"
								><iconify-icon icon="mdi:github" width="20" height="20" />Code</a
							>
						</div>
						{#if element.homepage != null && element.homepage != undefined && element.homepage != false && element.homepage != 0}
							<div
								class="badge h-auto badge-outline hover:border-primary border-2 transition hover:transition"
							>
								<a href={element.homepage} class="flex items-center gap-1 p-1"
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
		<p>{error} - couldn't load data...</p>
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
