<script>
	// Svelte
	import { building } from '$app/environment';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	// Translation
	import { locale } from '$translation/i18n-svelte';
	// Components
	import Category from '$component/Category.svelte';

	let name = 'about';

	if (!building) {
		goto(`${base}/${$locale}/about/profile`);
	}
</script>

<Category {name} referHome={true} />
