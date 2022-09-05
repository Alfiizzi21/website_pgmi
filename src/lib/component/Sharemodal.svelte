<script>
	import {
		Email,
		WhatsApp,
		Facebook,
		Twitter
	} from 'svelte-share-buttons-component';

	export let url = import.meta.env.VITE_appUrl;
	export let title = '';
	export let desc = '';

	let modalClass = 'hidden';

	function closeModal() {
		modalClass = 'hidden';
	}
	function openModal() {
		modalClass = '';
	}
</script>

<div>
	<div on:click={openModal}>
		<slot />
	</div>
	<div id="modal" class="fixed right-0 left-0 top-0 bottom-0 z-50 bg-black {modalClass}">
		<div class="mx-auto mt-8 rounded bg-white p-6 text-base sm:w-[28rem]">
			<span on:click={closeModal} class="material-icons cursor-pointer"> close </span>
			<div class=" flex">
				<input
					type="text"
					class="h-10 w-full rounded-l border border-sky-900 py-1 px-2"
					id="link"
					value={url}
					readonly
				/>
				<button class="flex h-10 w-10 items-center justify-center rounded-r bg-sky-900 text-white">
					<span class="material-icons "> link </span>
				</button>
			</div>
			<div class="mt-4 flex justify-start gap-2">
				<Email subject={title} body="{desc} {url}" />
				<WhatsApp class="share-button" text="{title} {url}" />
				<Facebook class="share-button" quote={title} {url} />
				<Twitter class="share-button" text={title} {url} via="" related="" />
			</div>
		</div>
	</div>
</div>

<style>
	#modal {
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>
