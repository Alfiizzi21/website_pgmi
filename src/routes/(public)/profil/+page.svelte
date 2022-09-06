<script>
	import Container from '$lib/component/Container.svelte';
	export let data;
	const profil = data.data;
</script>

<svelte:head>
	<title>Profil PGMI UIN Jambi</title>
</svelte:head>

<Container>
	{#each profil as p}
		<section class="col-span-4 lg:col-span-2">
			<div id={p.secRef} class="md:h-8" />
			<div class="section_title my-8 mx-2">
				<h1 class="text-center text-2xl uppercase font-bold text-sky-900">{p.title}</h1>
			</div>
			<div class="m-4">
				{@html p.body}
			</div>
		</section>
	{/each}
</Container>
