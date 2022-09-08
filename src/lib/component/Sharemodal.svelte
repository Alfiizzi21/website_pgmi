<script>
	import Whatsapp from './share-button/Whatsapp.svelte';
	import Facebook from './share-button/Facebook.svelte';
	import Email from './share-button/Email.svelte';

	export let url = import.meta.env.VITE_appUrl;
	export let title = '';

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
		<div class="mx-auto mt-8 rounded text-black bg-white p-6 text-base sm:w-[28rem]">
			<span on:click={closeModal} class="material-icons cursor-pointer"> close </span>
			<div class=" flex">
				<input
					type="text"
					class="h-10 w-full  rounded-l border border-sky-900 py-1 px-2"
					id="link"
					value={url}
					readonly
				/>
				<button class="flex h-10 w-10 items-center justify-center rounded-r bg-sky-900 text-white">
					<span class="material-icons "> link </span>
				</button>
			</div>
			<div class="mt-4 flex justify-start gap-2">
				<Email {title} {url} />
				<Whatsapp {url} />
				<Facebook class="share-button" {title} {url} />
			</div>
		</div>
	</div>
</div>

<style>
	#modal {
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>
