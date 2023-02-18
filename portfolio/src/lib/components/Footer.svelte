<script>
	import { base } from '$app/paths'; // gh-pages basepath
	import { locale } from '$translation/i18n-svelte'; // currentLanguage
</script>

<footer class="footer p-10 text-base-content border-t-2 border-b-2 border-secondary">
	<div>
		<span class="footer-title after:bg-primary">Socials/Contact</span>
		<a class="link after:bg-primary" href="https://github.com/jonasfroeller">GitHub</a>
		<a class="link after:bg-primary" href="mailto:j.froe@gmx.at">Email</a>
	</div>
	<div>
		<span class="footer-title">Projects</span>
		<a class="link after:bg-primary" href="https://github.com/jonasfroeller/Svelte_TodoManagement"
			>SVELTE ToDo App</a
		>
		<a class="link after:bg-primary" href="https://github.com/jonasfroeller/JS_WebComponent-Clock"
			>JS Clock Components</a
		>
		<a class="link after:bg-primary" href="https://github.com/jonasfroeller/PHP_AdventCalender"
			>PHP Advent Calender</a
		>
	</div>
	<div>
		<span class="footer-title">Legal</span>
		<a class="link after:bg-primary" href="{base}/{$locale}">Terms and Conditions</a>
		<a class="link after:bg-primary" href="{base}/{$locale}">Privacy Policy</a>
		<a class="link after:bg-primary" href="{base}/{$locale}">Cookie Policy</a>
		<a class="link after:bg-primary" href="{base}/{$locale}">Imprint</a>
	</div>
</footer>
<footer class="footer px-10 py-4 border-t text-base-content border-base-300">
	<div class="items-center grid-flow-col">
		<div class="tooltip" data-tip="j.froe@gmx.at">
			<iconify-icon icon="bytesize:portfolio" width="24" height="24" />
		</div>
		<p><strong>Jonas Fröller</strong><br /><em>quality web developement</em></p>
	</div>
	<div class="md:place-self-center md:justify-self-end">
		<div class="grid grid-flow-col gap-4">
			<div class="tooltip" data-tip="GitHub">
				<a href="https://github.com/jonasfroeller"
					><iconify-icon icon="mdi:github" width="24" height="24" /></a
				>
			</div>
		</div>
	</div>
</footer>
