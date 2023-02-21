<script>
	import LegalNav from '$component/LegalNav.svelte';
	import SubCategory from '$component/SubCategory.svelte';
	let parent = 'legal';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'privacy-policy';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<LegalNav {name} />

<section class="flex justify-center mt-4">
	<div class="prose">
		<h1 class="text-center mb-0">
			{nameCapitalized}
		</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi pariatur consequatur libero
			dolor. Cupiditate repudiandae atque odit voluptatem harum autem unde, pariatur eum dolorem
			fuga beatae porro, qui aut deleniti iure reiciendis molestiae blanditiis ducimus. Numquam
			nihil, aut officiis magnam id cumque ex iure nobis nesciunt, molestias vel. Quam, neque ipsum
			tempora iusto a esse fugit facere modi. Sint esse ea incidunt accusamus magnam? Sequi debitis
			fuga at soluta enim iure. Quisquam libero molestias dolor praesentium eos delectus doloremque
			fugit dolorum deserunt quibusdam ipsa facere nam facilis enim, expedita ad repudiandae dicta
			unde asperiores ratione, sit voluptate illo. Repellat mollitia, non hic est recusandae earum
			magnam debitis quidem placeat accusantium explicabo? Dicta itaque quibusdam iste voluptatem
			earum repudiandae doloribus, culpa iusto deleniti vero? Fugiat, magnam sed modi beatae tenetur
			aliquam natus? Nemo sint voluptas obcaecati tempore distinctio explicabo temporibus ea nulla
			pariatur fugiat corporis sed blanditiis, quibusdam aliquam a fuga expedita voluptatibus. Quasi
			dignissimos quos praesentium sed laborum ad eos distinctio? Et corporis labore dicta eius ad
			hic quaerat ut molestias minus nesciunt fugiat, facilis id quae consequatur vero itaque
			dolorem laudantium eum sed tempora, quos repellat doloremque. Cum, voluptatem quo cumque earum
			fugiat eaque quaerat. Voluptates repellat ipsa possimus modi? Aspernatur incidunt vitae
			molestias, quidem tenetur, nemo illo hic, praesentium dolor esse soluta. At odit iure veniam
			optio, rerum, delectus aut nulla blanditiis sapiente, ratione provident cumque.
		</p>
	</div>
</section>
