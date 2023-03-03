<script>
	// Components
	import LegalNav from '$component/LegalNav.svelte';
	import SubCategory from '$component/SubCategory.svelte';
	// Translation
	import translation from '$translation/i18n-svelte'; // translations

	let parent = 'legal';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'imprint';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<LegalNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0 break-all">
			{$translation.Pages.legal.imprint.title()}
		</h1>
		<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
		<p>
			Jonas Fr&ouml;ller<br />
			<!-- Limesstra&szlig;e 12/14<br /> -->
			<!-- 4060 Leonding -->
		</p>

		<h2>Kontakt</h2>
		<p>
			<!-- Telefon: &#91;Telefonnummer&#93;<br /> -->
			E-Mail: j.froe@gmx.at
		</p>

		<p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
	</div>
</section>
