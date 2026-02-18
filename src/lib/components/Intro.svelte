<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Footnote from './Footnote.svelte';

	let { title, subtitle, tags }: { title: string; subtitle: string; tags: string[] } = $props();
</script>

<section class="intro" id="intro">
	<Navbar {tags} />
	<h1>{title}</h1>
	<hr />
	<Footnote {subtitle} />
</section>

<style>
	.intro {
		padding: calc(20 / 375 * 100vw);
		background: linear-gradient(180deg, #f4fab5 0%, #75cdff 100%);

		h1 {
			margin-top: calc(50 / 375 * 100vw);
			font-size: calc(30 / 375 * 100vw);
			line-height: calc(35 / 375 * 100vw);
			font-weight: normal;
			letter-spacing: 0.02em;
			max-width: 90%;
		}

		hr {
			border-top: calc(2 / 375 * 100vw) solid #141212;
			border-bottom: none;
			margin-top: calc(30 / 375 * 100vw);
		}

		@media (min-width: 768px) {
			padding: calc(40 / 1440 * 100vw);

			h1 {
				margin-top: calc(340 / 1440 * 100vw);
				font-size: calc(64 / 1440 * 100vw);
				line-height: calc(70 / 1440 * 100vw);
				max-width: 75%;
			}

			hr {
				border-top: calc(2 / 1440 * 100vw) solid #141212;
				margin-top: calc(50 / 1440 * 100vw);
			}
		}
	}
</style>
