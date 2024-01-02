<script>
	// @ts-nocheck
	// Components
	import Category from '$component/Category.svelte';
	// Svelte
	import { browser } from '$app/environment';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let name = 'socials';

	function copyEmail(email) {
		if (browser) {
			navigator.clipboard
				.writeText(email)
				.then(() => console.log('Text copied to clipboard'))
				.catch((err) => console.error('Could not copy text: ', err));
		}
	}
</script>

<Category {name} />

<section class="flex justify-center gap-4 flex-wrap">
	<div class="flex flex-col">
		<div class="prose">
			<h1 class="mb-4">{$translation.Pages.socials.headline01()}</h1>
		</div>
		<div class="flex flex-wrap gap-2">
			<a
				class="align-middle"
				target="_blank"
				rel="noreferrer"
				href="https://github.com/jonasfroeller"
			>
				<button class="btn btn-md lg:btn-lg mb-1"
					><iconify-icon class="mr-2" icon="mdi:github" width="24" height="24" />GitHub</button
				>
			</a>
			<a
				class="align-middle"
				target="_blank"
				rel="noreferrer"
				href="https://codepen.io/jonasfroeller"
			>
				<button class="btn btn-md lg:btn-lg mb-1"
					><iconify-icon class="mr-2" icon="fe:codepen" width="24" height="24" />CodePen</button
				>
			</a>
			<a class="align-middle" target="_blank" rel="noreferrer" href="https://dev.to/jonasfroeller">
				<button class="btn btn-md lg:btn-lg mb-1"
					><iconify-icon class="mr-2" icon="fa-brands:dev" width="24" height="24" />DevTo</button
				>
			</a>
		</div>

		<div class="prose">
			<h1 class="mb-4 mt-4">{$translation.Pages.socials.headline02()}</h1>
		</div>
		<div class="flex flex-wrap gap-2">
			<a class="align-middle" href="https://linkedin.com/in/jonas-fr%C3%B6ller-8b4986235/"
				><button class="btn btn-md lg:btn-lg mb-1 gap-2 h-fit p-2"
					><iconify-icon icon="fa6-brands:linkedin" width="24" height="24" />LinkedIn
					<div class="badge badge-success gap-2 lowercase h-fit">
						{$translation.Pages.socials.availabilityNoticeWeek()}
					</div></button
				>
			</a>
			<a class="align-middle" href="https://xing.com/profile/Jonas_Froeller/cv"
				><button class="btn btn-md lg:btn-lg mb-1 gap-2 h-fit p-2"
					><iconify-icon icon="fa6-brands:square-xing" width="24" height="24" />Xing
					<div class="badge badge-success gap-2 lowercase h-fit">
						{$translation.Pages.socials.availabilityNoticeWeek()}
					</div></button
				>
			</a>
		</div>

		<div class="prose">
			<h1 class="mb-4 mt-4">{$translation.Pages.socials.headline03()}</h1>
		</div>
		<div class="flex flex-wrap gap-2">
			<button
				class="btn btn-md lg:btn-lg mb-1 p-0 lg:pt-0 lg:pb-0 lowercase flex-col lg:flex-row h-fit"
			>
				<div class="gap-2 p-2">
					<a class="flex items-center gap-2 text-neutral-content" href="mailto:j.froe@gmx.at"
						><iconify-icon icon="ic:round-email" width="28" height="28" />j.froe@gmx.at
						<span class="badge badge-success gap-2 h-fit">
							{$translation.Pages.socials.availabilityNoticeDay()}
						</span>
					</a>
				</div>
				<div
					class="divider m-0 p-0 lg:divider-horizontal before:bg-white after:bg-white h-full w-full"
				/>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<label
					class="swap cursor-copy copy-text normal-case p-2"
					on:click={() => copyEmail('j.froe@gmx.at')}
				>
					<input type="checkbox" />
					<div class="swap-off">{$translation.Pages.socials.copyNotice.copy()}</div>
					<div class="swap-on">{$translation.Pages.socials.copyNotice.copied()} &check;</div>
				</label>
			</button>
		</div>
	</div>
</section>
