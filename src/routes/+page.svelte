<script lang="ts">
	import Head from '@datocms/svelte/components/Head/Head.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Companies from '$lib/components/Companies.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data, form } = $props();
</script>

<svelte:head>
	<Head data={data.homepage.seo} />
</svelte:head>

<main>
	<Intro title={data.homepage.title} subtitle={data.homepage.subtitle} tags={data.tags} />
	<Companies companies={data.homepage.companies} title={data.homepage.companiesTitle} />
	<Contact title={data.homepage.contactTitle} {form} />
	<Footer />
</main>

<style>
	main {
		background-color: #fbfbfb;
	}
</style>
