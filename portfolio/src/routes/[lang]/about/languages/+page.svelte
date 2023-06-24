<script lang="ts">
	// Translation
	import translation from '$translation/i18n-svelte'; // translations
	// Assets
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';

	let parent = 'about';
	let parentCapitalized = parent.charAt(0).toUpperCase() + parent.slice(1);
	let name = 'languages';
	let nameCapitalized = name.replaceAll('-', ' ').replace(/\b(\w)/g, (s) => s.toUpperCase());

	let year = new Date().getFullYear();
</script>

<SubCategory {parent} {parentCapitalized} {name} {nameCapitalized} />

<AboutNav {name} />

<div class="flex justify-center mb-4 mt-4">
	<div class="prose">
		<h1 class="text-center">{$translation.Pages.about.languages.title()}</h1>
	</div>
</div>

<div class="flex justify-center">
	<div class="mockup-code min-w-0">
		<!-- prettier-ignore -->
		<pre data-prefix="1"><code>&lt;p&gt;&lt;strong&gt;<strong class="text-success">HTML</strong>&lt;/strong&gt;&lt;/p&gt;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="2"><code>&lt;p&gt;since 2020&lt;/p&gt;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="3"><code>&lt;p&gt;years: {year - 2020}&lt;/p&gt;</code></pre>
		<pre data-prefix="4"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="5"><code>&lt;p class='css'&gt;<strong class="text-success">CSS</strong>&lt;/p&gt;</code></pre>
		<pre data-prefix="6"><code>.css:before {`{content: "CSS"; font-weight: bold;}`}</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="7"><code>.since:before {'{content: "2020";}'}</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="8"><code>.years:before {`{content: "${year - 2020}";}`} </code></pre>
		<pre data-prefix="9"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="10"><code>public class App &#123;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="11"><code>	public static void main(String[] args) &#123;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="12"><code>	 System.out.println("<strong class="text-success">Java</strong>");</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="13"><code>	 int since = 2020;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="14"><code>	 int years = LocalDate.now().getYear() - since; <span class="text-green-700">// =&gt; {year - 2020}</span></code></pre>
		<pre data-prefix="15"><code>	&#125;</code></pre>
		<pre data-prefix="16"><code>&#125;</code></pre>
		<pre data-prefix="17"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="18"><code><span class="text-green-700">#!/bin/bash</span></code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="19"><code>echo "<strong class="text-success">ShellScript</strong>"</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="20"><code>since=2021</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="21"><code>years=$(($(date +%Y) - since)) <span class="text-green-700"># =&gt; {year - 2021}</span></code></pre>
		<pre data-prefix="22"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="23"><code>console.log("<strong class="text-success">JS & NodeJS</strong>");</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="24"><code>const since = 2021;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="25"><code>const years = new Date().getFullYear() - since; <span class="text-green-700">/* =&gt; {year - 2021} */</span></code></pre>
		<pre data-prefix="26"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="27"><code>echo "<strong class="text-success">PHP</strong>";</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="28"><code>$since = 2022;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="29"><code>$years = date('Y') - $since; <span class="text-green-700"># =&gt; {year - 2022}</span></code></pre>
		<pre data-prefix="30"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="31"><code>SELECT '<strong class="text-success">Oracle SQL</strong>'</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="32"><code>FROM dual; VARIABLE since NUMBER; BEGIN :since := 2022; END;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="33"><code>/ VARIABLE years NUMBER; BEGIN :years := EXTRACT(YEAR FROM SYSDATE) - since; END; / <span class="text-gray-400">-- =&gt; {year - 2022}</span></code></pre>
	</div>
</div>
