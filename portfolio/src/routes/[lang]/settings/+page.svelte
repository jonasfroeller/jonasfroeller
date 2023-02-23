<script>
	// Components
	import Category from '$component/Category.svelte';
	import LocaleSwitcher from '$component/LocaleSwitcher.svelte';
	import ThemeSwitcher from '$component/ThemeSwitcher.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let name = 'settings';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<Category {name} {nameCapitalized} />

<section class="flex justify-center">
	<form class="form-control mb-4 w-96">
		<h3 class="text-lg font-bold mb-2">{$translation.Pages.settings.title()}</h3>
		<h4 class="text-base font-bold mb-2">{$translation.Pages.settings.headline01()}</h4>
		<label class="label cursor-pointer">
			<span class="label-text">{$translation.Pages.legal.terms_and_conditions.accept()}</span>
			<input type="checkbox" class="checkbox" checked />
			<!-- alt class: toggle -->
		</label>
		<div class="collapse collapse-plus rounded-lg">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title border-2 border-neutral-content rounded-lg peer-checked:rounded-[0px] peer-checked:rounded-t-lg peer-checked:border-neutral"
			>
				{$translation.Pages.settings.options()}
			</div>
			<div
				class="collapse-content text-neutral rounded-b-lg peer-checked:border-l-2 peer-checked:border-r-2 peer-checked:border-b-2 peer-checked:border-neutral"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eaque! Amet odit natus
					fuga reprehenderit harum dolorum laborum voluptate? Voluptatum iste totam, perferendis rem
					laudantium alias dignissimos eaque harum excepturi impedit fugiat natus incidunt odit
					error! Voluptatibus alias dolorum rem ad!
				</p>
			</div>
		</div>
		<div class="divider" />
		<label class="label cursor-pointer">
			<span class="label-text">{$translation.Pages.legal.privacy_policy.accept()}</span>
			<input type="checkbox" class="checkbox" checked />
		</label>
		<div class="collapse collapse-plus rounded-lg">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title border-2 border-neutral-content rounded-lg peer-checked:rounded-[0px] peer-checked:rounded-t-lg peer-checked:border-neutral"
			>
				{$translation.Pages.settings.options()}
			</div>
			<div
				class="collapse-content text-neutral rounded-b-lg peer-checked:border-l-2 peer-checked:border-r-2 peer-checked:border-b-2 peer-checked:border-neutral"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eaque! Amet odit natus
					fuga reprehenderit harum dolorum laborum voluptate? Voluptatum iste totam, perferendis rem
					laudantium alias dignissimos eaque harum excepturi impedit fugiat natus incidunt odit
					error! Voluptatibus alias dolorum rem ad!
				</p>
			</div>
		</div>
		<div class="divider" />
		<label class="label cursor-pointer">
			<span class="label-text">{$translation.Pages.legal.cookies.accept()}</span>
			<input type="checkbox" class="checkbox" checked />
		</label>
		<div class="collapse collapse-plus rounded-lg">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title border-2 border-neutral-content rounded-lg peer-checked:rounded-[0px] peer-checked:rounded-t-lg peer-checked:border-neutral"
			>
				{$translation.Pages.settings.options()}
			</div>
			<div
				class="collapse-content text-neutral rounded-b-lg peer-checked:border-l-2 peer-checked:border-r-2 peer-checked:border-b-2 peer-checked:border-neutral"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eaque! Amet odit natus
					fuga reprehenderit harum dolorum laborum voluptate? Voluptatum iste totam, perferendis rem
					laudantium alias dignissimos eaque harum excepturi impedit fugiat natus incidunt odit
					error! Voluptatibus alias dolorum rem ad!
				</p>
			</div>
		</div>
		<div class="divider before:bg-neutral after:bg-neutral" />
		<h4 class="text-base font-bold mb-2">{$translation.Pages.settings.headline02()}</h4>
		<div class="flex items-center justify-between">
			<ThemeSwitcher asSelect={true} />
			<ThemeSwitcher asToggle={true} />
		</div>
		<div class="divider before:bg-neutral after:bg-neutral" />
		<h4 class="text-base font-bold mb-2">{$translation.Pages.settings.headline03()}</h4>
		<LocaleSwitcher asSelect={true} />
	</form>
</section>
