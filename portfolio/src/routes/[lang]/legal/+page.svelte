<script>
	// Svelte
	import { building } from '$app/environment';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	// Translation
	import { locale } from '$translation/i18n-svelte';
	// Components
	import Category from '$component/Category.svelte';

	let name = 'legal';

	if (!building) {
		goto(`${base}/${$locale}/legal/terms-and-conditions`);
	}
</script>

<Category {name} referHome={true} />
