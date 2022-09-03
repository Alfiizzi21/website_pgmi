<script>
    import app from '$lib/firebase.js'
    import '../../app.css';
    import { getAuth,onAuthStateChanged } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import { page } from "$app/stores";

    onMount(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth,(user)=>{
            if (user) {
                console.log("login sukses");
            }else{
                location.replace(`${$page.url.origin}/login`)
            }
        })
    });
</script>
<slot/>