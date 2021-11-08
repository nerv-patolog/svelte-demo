<script lang="ts">
    import { onMount } from 'svelte';

    let input: HTMLElement;

    onMount(() => {
        input?.addEventListener('clear', () => console.log('cleared again!'));
    });
</script>

<beautiful-input
    value="Initial one ..."
    height="200"
    bind:this={input}
    on:clear={() => console.log('clear')}
    on:search={({ detail }) => console.info(`Looking for ${detail}`)}
>
    <span slot="search"> &#9654;</span>
    <span slot="clear">&#x1F3AF;</span>
</beautiful-input>
