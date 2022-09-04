<script>
	import app from '$lib/external/firebase.js'
	import '../../app.css';
	import Header from '$lib/template/Header.svelte';
	import Footer from '$lib/template/Footer.svelte';
</script>

<Header />

<slot />

<Footer />
