<script>
	import Whatsapp from './share-button/Whatsapp.svelte';
	import Facebook from './share-button/Facebook.svelte';
	import Email from './share-button/Email.svelte';

	export let url = import.meta.env.VITE_appUrl;
	export let title = '';

	let modalClass = 'hidden';

	const closeModal = () => {
		modalClass = 'hidden';
	};
	const openModal = () => {
		modalClass = '';
	};
	const copyLink = () => {
		copyText.select(); // Selects the text inside the input
		document.execCommand('copy'); // Simply copies the selected text to clipboard
		Swal.fire({
			//displays a pop up with sweetalert
			icon: 'success',
			title: 'Text copied to clipboard',
			showConfirmButton: false,
			timer: 1000
		});
	};
</script>

<div>
	<div on:click={openModal}>
		<slot />
	</div>
	<div id="modal" class="fixed right-0 left-0 top-0 bottom-0 z-50 bg-black {modalClass}">
		<div
			class="flex flex-col gap-4 mx-auto mt-8 rounded text-black bg-white p-6 text-base sm:w-[28rem]"
		>
			<div class="flex justify-between">
				<div class="font-semibold text-lg">Bagikan</div>
				<button on:click={closeModal} class="material-icons"> close </button>
			</div>
			<div class="flex shadow">
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
			<div class="flex justify-evenly gap-2">
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
