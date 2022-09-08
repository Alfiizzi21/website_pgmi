<script>
	export let href;
	export let ariaLabel;
</script>

<a {href} target="_blank" rel="noopener" aria-label={ariaLabel}>
	<slot />
</a>
