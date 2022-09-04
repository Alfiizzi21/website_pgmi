<script>
    import app from "$lib/external/firebase.js";
    import '../../app.css';
    import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';

    let view = false;
    const auth = getAuth();


    const logOut =async ()=>{
        signOut(auth)
    }

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
    <button on:click|once="{logOut}">
        logout
    </button>
    <slot/>
    {:else}
    <h1 class="text-center text-xl text-sky-900 font-bold uppercase mt-8 animate-pulse">loading...</h1>
{/if}
