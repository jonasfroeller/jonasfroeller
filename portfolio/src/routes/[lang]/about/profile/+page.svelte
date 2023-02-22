<script>
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';
	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'profile';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0">
			{nameCapitalized}
		</h1>
		<article>
			My name is <strong>Jonas</strong>, and I'm a 17-year-old student currently studying at
			<strong>HTBLA Leonding</strong>
			in Austria. <br />
			I am pursuing a field of study in IT/Mediatechnology, and I have a keen interest in programming,
			especially web development. Aside from my native language, German, I'm also fluent in English,
			with a B+ level of proficiency.
			<br /> I have experience working with various programming languages, including HTML, CSS,
			Java, ShellScript, JavaScript & NodeJS, PHP, and Oracle SQL. <br /> Recently, I've discovered
			the Svelte JS-framework and learned Svelte along with SvelteKit. I've also gained expertise in
			working with TailwindCSS and DaisyUI. <br /> I'm always eager to learn new programming
			languages and frameworks, and I'm passionate about developing efficient, user-friendly
			websites and applications. I'm constantly exploring ways to improve my skills and knowledge in
			the field of web development, and I'm determined to achieve my career goals in the world of IT
			and programming. <br /> With dedication and enthusiasm, I believe that I have what it takes to
			succeed in this field.
		</article>
	</div>
</section>

<!-- <style>
	.article-part::first-letter {
		initial-letter: 2;
		margin-right: 0.5rem;
	}
</style> -->
