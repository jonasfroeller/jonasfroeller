<script>
	// Svelte
	import { base } from '$app/paths'; // basepath
	// Translation
	import translation from '$translation/i18n-svelte'; // translations
	import { locale } from '$translation/i18n-svelte'; // currentLanguage
</script>

<footer class="footer p-10 text-base-content border-t-2 border-b-2 border-secondary">
	<div>
		<span class="footer-title"
			><a href="{base}/{$locale}/about/profile">{$translation.Footer.about.title()}</a></span
		>
		<a class="link after:bg-primary" href="{base}/{$locale}/about/profile"
			>{$translation.Footer.about.list.profile()}</a
		>
		<a class="link after:bg-primary" href="{base}/{$locale}/about/languages"
			>{$translation.Footer.about.list.languages()}</a
		>
		<a class="link after:bg-primary" href="{base}/{$locale}/about/technologies"
			>{$translation.Footer.about.list.technologies()}</a
		>
		<a class="link after:bg-primary" href="{base}/{$locale}/about/photography"
			>{$translation.Footer.about.list.photography()}</a
		>
		<a class="link after:bg-primary" href="https://qwik-link-tree.vercel.app" target="_blank"
			>{$translation.Footer.about.list.links()}</a
		>
	</div>
	<div>
		<span class="footer-title after:bg-primary"
			><a href="{base}/{$locale}/socials">{$translation.Footer.contact.title()}</a></span
		>
		<a class="link after:bg-primary" href="https://github.com/jonasfroeller">GitHub</a>
		<a class="link after:bg-primary" href="https://codepen.io/jonasfroeller">CodePen</a>
		<a class="link after:bg-primary" href="https://dev.to/jonasfroeller">DevTo</a>
		<a class="link after:bg-primary" href="https://linkedin.com/in/jonas-fr%C3%B6ller-8b4986235/"
			>LinkedIn</a
		>
		<a class="link after:bg-primary" href="https://xing.com/profile/Jonas_Froeller/cv">Xing</a>
		<div class="tooltip tooltip-right" data-tip="j.froe@gmx.at">
			<a class="link after:bg-primary" href="mailto:j.froe@gmx.at">Email</a>
		</div>
		<div class="tooltip tooltip-right" data-tip="MerginIT e.U. - SaaS & Web Development">
			<a class="link after:bg-primary" href="https://merginit.com" target="_blank" rel="noopener">MerginIT</a>
		</div>
	</div>
	<div>
		<span class="footer-title"
			><a href="{base}/{$locale}/projects">{$translation.Footer.projects.title()}</a></span
		>
		<div class="flex items-bottom gap-1">
			<a class="link after:bg-primary" href="https://github.com/jonasfroeller/JS_WebComponent-Clock"
				>JS Clock Components</a
			>
			<div class="tooltip" data-tip="GitHub">
				<a
					href="https://github.com/jonasfroeller/JS_WebComponent-Clock"
					target="_blank"
					rel="noreferrer"
					><iconify-icon icon="radix-icons:open-in-new-window" width="20" height="20" /></a
				>
			</div>
			<div class="tooltip" data-tip="LiveDemo">
				<a target="_blank" rel="noreferrer" href="https://js-clock-components.netlify.app"
					><iconify-icon icon="eos-icons:application-outlined" width="20" height="20" /></a
				>
			</div>
		</div>
		<div class="flex items-bottom gap-1">
			<a class="link after:bg-primary" href="https://github.com/jonasfroeller/PHP_AdventCalender"
				>PHP Advent Calender</a
			>
			<div class="tooltip" data-tip="GitHub">
				<a
					href="https://github.com/jonasfroeller/PHP_AdventCalender"
					target="_blank"
					rel="noreferrer"
					><iconify-icon icon="radix-icons:open-in-new-window" width="20" height="20" /></a
				>
			</div>
			<div class="tooltip" data-tip="LiveDemo">
				<!-- host me on vercel -->
				<a target="_blank" rel="noreferrer" href="https://php-advent-calender.000webhostapp.com"
					><iconify-icon icon="eos-icons:application-outlined" width="20" height="20" /></a
				>
			</div>
		</div>
	</div>
	<div>
		<span class="footer-title"
			><a href="{base}/{$locale}/legal/terms-and-conditions">{$translation.Footer.legal.title()}</a
			></span
		>
		<!-- {base}/{$locale} -->
		<a class="link after:bg-primary" href="{base}/{$locale}/legal/terms-and-conditions"
			>{$translation.Footer.legal.list.terms_and_conditions()}</a
		>
		<a class="link after:bg-primary" href="{base}/{$locale}/legal/privacy-policy"
			>{$translation.Footer.legal.list.privacy_policy()}</a
		>
		<a class="link after:bg-primary" href="{base}/{$locale}/legal/cookies"
			>{$translation.Footer.legal.list.cookies()}</a
		>
		<a class="link after:bg-primary" href="{base}/{$locale}/legal/imprint"
			>{$translation.Footer.legal.list.imprint()}</a
		>
	</div>
</footer>
<footer class="footer px-10 py-4 border-t text-base-content border-base-300">
	<div class="items-center grid-flow-col">
		<div class="tooltip" data-tip="j.froe@gmx.at">
			<iconify-icon icon="bytesize:portfolio" width="24" height="24" />
		</div>
		<p><strong>Jonas Fröller</strong><br /><em>{$translation.Footer.quote()}</em></p>
	</div>
	<div class="md:place-self-center md:justify-self-end">
		<div class="grid grid-flow-col gap-8 items-center">
			<div class="coding-websites flex gap-2">
				<div class="tooltip" data-tip="GitHub">
					<a class="align-middle" href="https://github.com/jonasfroeller"
						><iconify-icon icon="mdi:github" width="24" height="24" /></a
					>
				</div>
				<div class="tooltip" data-tip="CodePen">
					<a class="align-middle" href="https://codepen.io/jonasfroeller"
						><iconify-icon icon="fe:codepen" width="24" height="24" />
					</a>
				</div>
				<div class="tooltip" data-tip="DevTo">
					<a class="align-middle" href="https://dev.to/jonasfroeller"
						><iconify-icon icon="fa-brands:dev" width="24" height="24" />
					</a>
				</div>
			</div>
			<div class="social-medias flex items-center">
				<div class="tooltip" data-tip="LinkedIn">
					<a class="align-middle" href="https://linkedin.com/in/jonas-fr%C3%B6ller-8b4986235/"
						><iconify-icon icon="fa6-brands:linkedin" width="24" height="24" />
					</a>
				</div>
				<div class="tooltip" data-tip="Xing">
					<a class="align-middle" href="https://xing.com/profile/Jonas_Froeller/cv"
						><iconify-icon icon="fa6-brands:square-xing" width="24" height="24" />
					</a>
				</div>
				<div class="tooltip" data-tip="j.froe@gmx.at">
					<a class="align-middle" href="mailto:j.froe@gmx.at"
						><iconify-icon icon="ic:round-email" width="28" height="28" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
