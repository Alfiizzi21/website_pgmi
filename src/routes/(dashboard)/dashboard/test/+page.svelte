<script>
	import Editor from '@tinymce/tinymce-svelte';
	let text;
</script>

<section class="dashboard-section">
	<Editor bind:value={text} apiKey={import.meta.env.VITE_tinyMceApiKey} />
</section>
