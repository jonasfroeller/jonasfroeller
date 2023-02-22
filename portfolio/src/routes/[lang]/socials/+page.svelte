<script>
	import Category from '$component/Category.svelte';
	let name = 'socials';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<Category {name} {nameCapitalized} />

<section class="flex justify-center gap-4 flex-wrap">
	<div class="prose">
		<h1 class="mb-4">Coding</h1>
		<a class="align-middle" href="https://github.com/jonasfroeller">
			<button class="btn btn-md lg:btn-lg mb-1"
				><iconify-icon icon="mdi:github" width="24" height="24" />GitHub</button
			>
		</a>
		<a class="align-middle" href="https://codepen.io/jonasfroeller">
			<button class="btn btn-md lg:btn-lg mb-1"
				><iconify-icon icon="fe:codepen" width="24" height="24" />CodePen</button
			>
		</a>
		<a class="align-middle" href="https://dev.to/jonasfroeller">
			<button class="btn btn-md lg:btn-lg mb-1"
				><iconify-icon icon="fa-brands:dev" width="24" height="24" />DevTo</button
			>
		</a>
		<h1 class="mb-4 mt-4">Social Media</h1>
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
</section>
