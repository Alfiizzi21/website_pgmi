<script>
	export let icon = 'dashboard';
	export let text = 'dashboard';
	export let link = '';
	import { page } from '$app/stores';
	let active = false;
	let href = `${import.meta.env.VITE_appUrl}/dashboard${link}`;
	$: if (href == $page.url.href) {
		active = true;
	} else {
		active = false;
	}
</script>

<a {href}>
	{#if active}
		<button
			class="flex flex-col justify-center items-center cursor-pointer bg-sky-800 hover:bg-sky-700 w-full py-1"
		>
			<span class="material-icons text-4xl ">
				{icon}
			</span>
			<div class="text-xs capitalize">
				{text}
			</div>
		</button>
	{:else}
		<button
			class="flex flex-col justify-center items-center cursor-pointer hover:bg-sky-800 w-full py-1"
		>
			<span class="material-icons text-4xl ">
				{icon}
			</span>
			<div class="text-xs capitalize">
				{text}
			</div>
		</button>
	{/if}
</a>
