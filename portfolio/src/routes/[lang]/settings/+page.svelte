<script>
	import Category from '$component/Category.svelte';
	import LocaleSwitcher from '$component/LocaleSwitcher.svelte';
	import ThemeSwitcher from '$component/ThemeSwitcher.svelte';
	let name = 'settings';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<Category {name} {nameCapitalized} />

<section class="flex justify-center">
	<form class="form-control mb-4 w-96">
		<h3 class="text-lg font-bold mb-2">Settings</h3>
		<h4 class="text-base font-bold mb-2">Legal</h4>
		<label class="label cursor-pointer">
			<span class="label-text">Accept "Terms and Conditions"</span>
			<input type="checkbox" class="checkbox" checked />
			<!-- alt class: toggle -->
		</label>
		<label class="label cursor-pointer">
			<span class="label-text">Accept "Privacy Policy"</span>
			<input type="checkbox" class="checkbox" checked />
		</label>
		<label class="label cursor-pointer">
			<span class="label-text">Accept "Cookie Policy"</span>
			<input type="checkbox" class="checkbox" checked />
		</label>
		<h4 class="text-base font-bold mb-2">Style</h4>
		<div class="flex items-center justify-between">
			<ThemeSwitcher asSelect={true} />
			<ThemeSwitcher asToggle={true} />
		</div>
		<h4 class="text-base font-bold mb-2">Language</h4>
		<LocaleSwitcher asSelect={true} />
	</form>
</section>
