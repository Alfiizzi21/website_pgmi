<script>
	import Whatsapp from './share-button/Whatsapp.svelte';
	import Facebook from './share-button/Facebook.svelte';
	import Email from './share-button/Email.svelte';

	export let url = import.meta.env.VITE_appUrl;
	export let title = '';

	let bgModalClass = 'hidden';
	let modalClass = '-translate-y-[300px]';

	const closeModal = () => {
		modalClass = '-translate-y-[300px]';
		setTimeout(() => {
			bgModalClass = 'hidden';
		}, 300);
	};
	const openModal = () => {
		bgModalClass = '';
		setTimeout(() => {
			modalClass = '';
		}, 300);
	};
	const copyLink = () => {
		alert('fitur copy link belum tersedia');
	};
</script>

<div>
	<div on:click={openModal}>
		<slot />
	</div>
	<div class="fixed  right-0 left-0 top-0 bottom-0 z-50 bg-black bg-opacity-70 {bgModalClass}">
		<div
			class="flex flex-col gap-4 mx-auto mt-8 rounded text-black bg-white p-6 text-base sm:w-[28rem] transition-transform duration-300 {modalClass}"
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
				<button
					on:click={copyLink}
					class="flex h-10 w-10 items-center justify-center rounded-r bg-sky-900 text-white"
				>
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
