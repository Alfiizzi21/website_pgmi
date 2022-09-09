<script>
	export let href;
	export let ariaLabel;
</script>

<a {href} target="_blank" rel="noopener" aria-label={ariaLabel}>
	<button class="border p-2 rounded-full shadow-sm">
		<slot />
	</button>
</a>
