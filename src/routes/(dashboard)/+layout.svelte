<script>
    import app from '$lib/firebase.js'
    import '../../app.css';
    import { getAuth,onAuthStateChanged } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';

    let view = false;

    onMount(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth,(user)=>{
            if (user) {
                view = true
                console.log("login sukses");
            }else{
                goto('/login')
            }
        })
    });
</script>

{#if view}
    <slot/>
    {:else}
    <h1 class="text-center text-xl text-sky-900 font-bold uppercase mt-8 animate-pulse">loading...</h1>
{/if}
