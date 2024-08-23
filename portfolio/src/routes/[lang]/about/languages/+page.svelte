<script lang="ts">
	// Translation
	import translation from '$translation/i18n-svelte'; // translations
	// Assets
	import SubCategory from '$component/SubCategory.svelte';
	import AboutNav from '$component/AboutNav.svelte';

	let parent = 'about';
	let name = 'languages';

	let year = new Date().getFullYear();
</script>

<SubCategory {parent} {name} />

<AboutNav {name} />

<div class="flex justify-center mt-4 mb-4">
	<div class="prose">
		<h1 class="text-center">{$translation.Pages.about.languages.title()}</h1>
	</div>
</div>

<div class="flex justify-center">
	<div class="min-w-0 mockup-code">
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
		<pre data-prefix="10"><code>import java.time.LocalDate;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="11"><code>public class Main &#123;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="12"><code>	public static void main(String[] args) &#123;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="13"><code>	 System.out.println("<strong class="text-success">Java</strong>");</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="14"><code>	 int since = 2020;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="15"><code>	 int years = LocalDate.now().getYear() - since; <span class="text-green-700">// =&gt; {year - 2020}</span></code></pre>
		<pre data-prefix="16"><code>	&#125;</code></pre>
		<pre data-prefix="17"><code>&#125;</code></pre>
		<pre data-prefix="18"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="19"><code><span class="text-green-700">#!/bin/bash</span></code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="20"><code>echo "<strong class="text-success">ShellScript</strong>"</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="21"><code>since=2021</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="22"><code>years=$(($(date +%Y) - since)) <span class="text-green-700"># =&gt; {year - 2021}</span></code></pre>
		<pre data-prefix="23"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="24"><code>console.log("<strong class="text-success">JS & NodeJS</strong>");</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="25"><code>const since = 2021;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="26"><code>const years = new Date().getFullYear() - since; <span class="text-green-700">/* =&gt; {year - 2021} */</span></code></pre>
		<pre data-prefix="27"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="28"><code>echo "<strong class="text-success">PHP</strong>";</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="29"><code>$since = 2022;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="30"><code>$years = date('Y') - $since; <span class="text-green-700"># =&gt; {year - 2022}</span></code></pre>
		<pre data-prefix="31"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="32"><code>SELECT '<strong class="text-success">Oracle PL/SQL</strong>' FROM dual;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="33"><code>DECLARE</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="34"><code>  since NUMBER := 2021;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="35"><code>  current_year NUMBER;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="36"><code>  years NUMBER;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="37"><code>BEGIN</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="38"><code>  SELECT EXTRACT(YEAR FROM SYSDATE) INTO current_year FROM dual;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="39"><code>  years := current_year - since;</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="40"><code>  DBMS_OUTPUT.PUT_LINE(years);<span class="text-gray-400"> -- =&gt; {year - 2022}</span></code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="41"><code>END; /</code></pre>
		<pre data-prefix="42"><code /></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="43"><code>import Foundation</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="44"><code>print("<strong class="text-success">Swift</strong>")</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="45"><code>let since = 2023</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="46"><code>let currentYear = Calendar.current.component(.year, from: Date())</code></pre>
		<!-- prettier-ignore -->
		<pre data-prefix="47"><code>let years = currentYear - since <span class="text-gray-400">// =&gt; {year - 2023}</span></code></pre>
	</div>
</div>
