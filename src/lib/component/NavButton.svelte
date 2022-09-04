<script>
    export let icon = 'dashboard';
    export let text = 'dashboard';
    export let link = '#';
    let host = import.meta.env.VITE_appUrl;
</script>


<a href="{host}/dashboard/{link}" class="group flex flex-col justify-center items-center cursor-pointer bg-sky-700 w-full py-1">
    <span class="material-icons text-4xl group-hover:text-sky-300 transition-colors delay-300">
        {icon}
    </span>
    <div class="text-xs capitalize">
        {text}
    </div>
</a>