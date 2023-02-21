<script>
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
	const images = [
		asciidoctor,
		docker,
		git,
		github,
		illustrator,
		json,
		photoshop,
		svelte,
		svg,
		vite,
		vscode,
		xd
	];
	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'skills';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<div id="skill-circle">
			<ul class="skills">
				{#each images as image, i}
					<li>
						<span>
							<img src={image} alt={image} style="width: 50px; aspect-ration: 1/1;" />
						</span>
					</li>
				{:else}
					<p><em>Couldn't load Images!</em></p>
				{/each}
			</ul>
			<h1 class="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-center mb-0">
				{nameCapitalized}
			</h1>
		</div>
	</div>
</section>

<style>
	#skill-circle {
		width: 30rem;
		height: 30rem;
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
		left: calc(15rem - 40px);
	}
	.skills li {
		position: absolute;
		transform-origin: 50% 100%;
		height: 15rem;
		font-weight: bold;
		width: 80px;
	}
	.skills span {
		display: block;
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
