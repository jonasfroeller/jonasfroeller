<script>
	// @ts-nocheck
	// Svelte
	import { browser } from '$app/environment';
	// Translation
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
	let name = 'technologies';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<div class="flex justify-center mt-4 mb-4">
	<div class="prose">
		<h1 class="text-center">{$translation.Pages.about.technologies.title()}</h1>
	</div>
</div>

<section class="flex flex-wrap items-center justify-center gap-4 mt-4">
	<section class="flex justify-center mt-4">
		<div id="tech-circle">
			<ul class="technologies">
				{#each software as sw, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li on:click={() => window.open(sw.url, '_blank').focus()}>
						<span>
							<img class="technology" src={sw.img} alt={`software-${i}-${sw.name}`} />
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
					class="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-center mb-0 text-lg sm:text-2xl md:text-4xl"
				>
					{$translation.Pages.about.technologies.appCircle()}
				</h1>
			</div>
		</div>
	</section>
</section>

<style>
	@media (max-width: 485px) {
		#tech-circle {
			width: 20rem !important;
			height: 20rem !important;
		}

		.technologies {
			left: calc(10rem - 2rem) !important;
		}
		.technologies li {
			height: 10rem !important;
			width: 76px !important;
		}
	}

	@media (max-width: 375px) {
		#tech-circle {
			width: 14rem !important;
			height: 14rem !important;
		}

		.technologies {
			left: calc(7rem - 1rem) !important;
		}
		.technologies li {
			height: 7rem !important;
			width: 28px !important;
		}

		.technology {
			width: 40px !important;
		}
	}

	.technology {
		width: 50px;
		aspect-ration: 1/1;
	}
	#tech-circle {
		width: 26rem;
		height: 26rem;
		padding: 1rem;
		border-radius: 50%;
		position: relative;
	}

	.technologies {
		list-style: none;
		top: 0;
		margin: 0;
		padding: 0;
		position: absolute;
		text-align: center;
		left: calc(13rem - 4rem);
	}
	.technologies li {
		height: 13rem;
		position: absolute;
		transform-origin: 50% 100%;
		font-weight: bold;
		width: 120px;
	}
	.technologies span {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.technologies li:nth-of-type(1) {
		transform: rotate(30deg);
	}
	.technologies li:nth-of-type(1) span {
		transform: rotate(-30deg);
	}
	.technologies li:nth-of-type(2) {
		transform: rotate(60deg);
	}
	.technologies li:nth-of-type(2) span {
		transform: rotate(-60deg);
	}
	.technologies li:nth-of-type(3) {
		transform: rotate(90deg);
	}
	.technologies li:nth-of-type(3) span {
		transform: rotate(-90deg);
	}
	.technologies li:nth-of-type(4) {
		transform: rotate(120deg);
	}
	.technologies li:nth-of-type(4) span {
		transform: rotate(-120deg);
	}
	.technologies li:nth-of-type(5) {
		transform: rotate(150deg);
	}
	.technologies li:nth-of-type(5) span {
		transform: rotate(-150deg);
	}
	.technologies li:nth-of-type(6) {
		transform: rotate(180deg);
	}
	.technologies li:nth-of-type(6) span {
		transform: rotate(-180deg);
	}
	.technologies li:nth-of-type(7) {
		transform: rotate(210deg);
	}
	.technologies li:nth-of-type(7) span {
		transform: rotate(-210deg);
	}
	.technologies li:nth-of-type(8) {
		transform: rotate(240deg);
	}
	.technologies li:nth-of-type(8) span {
		transform: rotate(-240deg);
	}
	.technologies li:nth-of-type(9) {
		transform: rotate(270deg);
	}
	.technologies li:nth-of-type(9) span {
		transform: rotate(-270deg);
	}
	.technologies li:nth-of-type(10) {
		transform: rotate(300deg);
	}
	.technologies li:nth-of-type(10) span {
		transform: rotate(-300deg);
	}
	.technologies li:nth-of-type(11) {
		transform: rotate(330deg);
	}
	.technologies li:nth-of-type(11) span {
		transform: rotate(-330deg);
	}
	.technologies li:nth-of-type(12) {
		transform: rotate(360deg);
	}
	.technologies li:nth-of-type(12) span {
		transform: rotate(-360deg);
	}
</style>
