<script>
    import app from "$lib/external/firebase.js";
    import '../../app.css';
    import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
    import NavButton from '$lib/component/NavButton.svelte';
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
    <header class="flex z-50 shadow fixed items-center bg-sky-500 text-white top-0 right-0 left-0 h-14">
        <div class="text-2xl m-4">Dashboard</div>
    </header>
    <aside class="fixed bg-sky-500 w-20 top-14 h-screen text-white">
        <nav>
            <ul class="flex gap-2 flex-col">
                <li>
                    <NavButton link=""/>
                </li>
                <li>
                    <NavButton link="berita" icon='newspaper' text='berita'/>
                </li>
            </ul>
        </nav>
    </aside>
    <button on:click|once="{logOut}">
        logout
    </button>
    <slot/>
    {:else}
    <h1 class="text-center text-xl text-sky-900 font-bold uppercase mt-8 animate-pulse">loading...</h1>
{/if}
