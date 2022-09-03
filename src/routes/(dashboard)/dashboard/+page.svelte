<script>
    import { getAuth,signOut } from "firebase/auth";

    const auth = getAuth();

    const logOut =async ()=>{
        signOut(auth)
    }
</script>

<button on:click|once="{logOut}">
    logout
</button>