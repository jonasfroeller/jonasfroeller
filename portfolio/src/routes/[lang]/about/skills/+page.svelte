<script>
	// @ts-nocheck
	// Svelte
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	// Translation
	import { locale } from '$translation/i18n-svelte';
	import translation from '$translation/i18n-svelte'; // translations
	// Assets
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';

	import asciidoctor from '$image/skills/asciidoctor.svg';
	import docker from '$image/skills/docker.svg';
	import git from '$image/skills/git.svg';
	import github from '$image/skills/github-dark.svg';
	import illustrator from '$image/skills/illustrator.svg';
	import json from '$image/skills/json.svg';
	import photoshop from '$image/skills/photoshop.svg';
	import svelte from '$image/skills/svelte.svg';
	import svg from '$image/skills/svg-dark.svg';
	import vite from '$image/skills/vite-dark.svg';
	import vscode from '$image/skills/vscode-dark.svg';
	import xd from '$image/skills/xd.svg';

	const software = [
		{
			img: asciidoctor,
			name: 'asciidoctor',
			url: 'https://asciidoctor.org/'
		},
		{
			img: docker,
			name: 'docker',
			url: 'https://www.docker.com/'
		},
		{
			img: git,
			name: 'git',
			url: 'https://git-scm.com/'
		},
		{
			img: github,
			name: 'github',
			url: 'https://github.com/'
		},
		{
			img: illustrator,
			name: 'illustrator',
			url: 'https://helpx.adobe.com/at/illustrator/get-started.html'
		},
		{
			img: json,
			name: 'json',
			url: 'https://www.json.org/json-de.html'
		},
		{
			img: photoshop,
			name: 'photoshop',
			url: 'https://helpx.adobe.com/at/photoshop/get-started.html'
		},
		{
			img: svelte,
			name: 'svelte',
			url: 'https://svelte.dev/'
		},
		{
			img: svg,
			name: 'svg',
			url: 'https://www.w3.org/TR/SVG2/'
		},
		{
			img: vite,
			name: 'vite',
			url: 'https://vitejs.dev/'
		},
		{
			img: vscode,
			name: 'vscode',
			url: 'https://code.visualstudio.com/'
		},
		{
			img: xd,
			name: 'xd',
			url: 'https://helpx.adobe.com/at/xd/get-started.html'
		}
	];

	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'skills';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<div class="flex justify-center mb-4 mt-4">
	<div class="prose">
		<h1 class="text-center">{$translation.Pages.about.skills.title()}</h1>
	</div>
</div>

<div class="flex justify-center">
	<div class="mockup-code min-w-0">
		<pre data-prefix="1"><code
				>&lt;p&gt;&lt;strong&gt;<strong>HTML</strong
				>&lt;/strong&gt;&lt;/p&gt; &lt;p&gt;since 2020&lt;/p&gt; &lt;p&gt;{new Date().getFullYear() -
					2020}&lt;/p&gt;</code
			></pre>
		<pre data-prefix="2"><code
				>&lt;p class='css'&gt;<strong>CSS</strong
				>&lt;/p&gt; .css:before {`{content: "CSS"; font-weight: bold;}`} .since:before {'{content: "2020";}'} .years:before {`{content: "${
					new Date().getFullYear() - 2020
				}";}`} </code></pre>

		<pre data-prefix="3"><code
				>System.out.println("<strong>Java</strong
				>"); int since = 2020; int years = {new Date().getFullYear() - 2020};</code
			></pre>
		<pre data-prefix="6"><code
				>echo "<strong>ShellScript</strong>" since=2021 years={new Date().getFullYear() -
					2021}</code
			></pre>
		<pre data-prefix="4"><code
				>console.log("<strong>JS & NodeJS</strong
				>"); let since = 2021; let years = {new Date().getFullYear() - 2021};</code
			></pre>
		<pre data-prefix="5"><code
				>echo "<strong>PHP</strong>"; $since = 2022; $years = {new Date().getFullYear() -
					2022};</code
			></pre>
		<pre data-prefix="6"><code
				>SELECT '<strong>Oracle SQL</strong
				>' FROM dual; VARIABLE since NUMBER; BEGIN :since := 2022; END; / VARIABLE years NUMBER; BEGIN :years := {new Date().getFullYear() -
					2022}; END; /</code
			></pre>
	</div>
</div>

<section class="flex justify-center items-center flex-wrap gap-4 mt-4">
	<section class="flex justify-center mt-4">
		<div id="skill-circle">
			<ul class="skills">
				{#each software as sw, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li on:click={() => window.open(sw.url, '_blank').focus()}>
						<span>
							<img class="app" src={sw.img} alt={`software-${i}-${sw.name}`} />
						</span>
					</li>
				{:else}
					{#if browser && navigator && navigator.userAgent && !navigator.userAgent.includes('js_disabled')}
						<p><em>Couldn't load images!</em></p>
					{:else}
						<noscript
							>Sorry, your browser does not support JavaScript or you deactivated it! Features of
							the website that do not work without JS: style-mode, language-change, settings save...
						</noscript>
					{/if}
				{/each}
			</ul>
			<div class="prose">
				<h1
					class="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-center mb-0 text-2xl sm:text-5xl"
				>
					{$translation.Pages.about.skills.appCircle()}
				</h1>
			</div>
		</div>
	</section>
	<div class="flex sm:flex-col gap-3">
		<a href="{base}/{$locale}/projects">
			<button class="btn btn-md lg:btn-lg">{$translation.Pages.projectsButton()}</button>
		</a>
		<a href="{base}/{$locale}/socials">
			<button class="btn btn-md lg:btn-lg">{$translation.Pages.contactButton()}</button>
		</a>
	</div>
</section>

<style>
	@media (max-width: 485px) {
		#skill-circle {
			width: 20rem !important;
			height: 20rem !important;
		}

		.skills {
			left: calc(10rem - 2rem) !important;
		}
		.skills li {
			height: 10rem !important;
			width: 76px !important;
		}
	}

	@media (max-width: 375px) {
		#skill-circle {
			width: 14rem !important;
			height: 14rem !important;
		}

		.skills {
			left: calc(7rem - 1rem) !important;
		}
		.skills li {
			height: 7rem !important;
			width: 28px !important;
		}

		.app {
			width: 40px !important;
		}
	}

	.app {
		width: 50px;
		aspect-ration: 1/1;
	}
	#skill-circle {
		width: 26rem;
		height: 26rem;
		padding: 1rem;
		border-radius: 50%;
		position: relative;
	}

	.skills {
		list-style: none;
		top: 0;
		margin: 0;
		padding: 0;
		position: absolute;
		text-align: center;
		left: calc(13rem - 4rem);
	}
	.skills li {
		height: 13rem;
		position: absolute;
		transform-origin: 50% 100%;
		font-weight: bold;
		width: 120px;
	}
	.skills span {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.skills li:nth-of-type(1) {
		transform: rotate(30deg);
	}
	.skills li:nth-of-type(1) span {
		transform: rotate(-30deg);
	}
	.skills li:nth-of-type(2) {
		transform: rotate(60deg);
	}
	.skills li:nth-of-type(2) span {
		transform: rotate(-60deg);
	}
	.skills li:nth-of-type(3) {
		transform: rotate(90deg);
	}
	.skills li:nth-of-type(3) span {
		transform: rotate(-90deg);
	}
	.skills li:nth-of-type(4) {
		transform: rotate(120deg);
	}
	.skills li:nth-of-type(4) span {
		transform: rotate(-120deg);
	}
	.skills li:nth-of-type(5) {
		transform: rotate(150deg);
	}
	.skills li:nth-of-type(5) span {
		transform: rotate(-150deg);
	}
	.skills li:nth-of-type(6) {
		transform: rotate(180deg);
	}
	.skills li:nth-of-type(6) span {
		transform: rotate(-180deg);
	}
	.skills li:nth-of-type(7) {
		transform: rotate(210deg);
	}
	.skills li:nth-of-type(7) span {
		transform: rotate(-210deg);
	}
	.skills li:nth-of-type(8) {
		transform: rotate(240deg);
	}
	.skills li:nth-of-type(8) span {
		transform: rotate(-240deg);
	}
	.skills li:nth-of-type(9) {
		transform: rotate(270deg);
	}
	.skills li:nth-of-type(9) span {
		transform: rotate(-270deg);
	}
	.skills li:nth-of-type(10) {
		transform: rotate(300deg);
	}
	.skills li:nth-of-type(10) span {
		transform: rotate(-300deg);
	}
	.skills li:nth-of-type(11) {
		transform: rotate(330deg);
	}
	.skills li:nth-of-type(11) span {
		transform: rotate(-330deg);
	}
	.skills li:nth-of-type(12) {
		transform: rotate(360deg);
	}
	.skills li:nth-of-type(12) span {
		transform: rotate(-360deg);
	}
</style>
