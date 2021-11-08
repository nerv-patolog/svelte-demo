<script lang="ts">
    export let value = '';
    export let type = '';
    export let readonly = true;
</script>

{#if type === 'text'}
    <input
        type="text"
        bind:value
        {readonly}
        on:keypress
        on:contextmenu|preventDefault={() => {}}
    />
{:else}
    <input {type} {value} {readonly} />
{/if}

<!-- {#if type === 'text' || type === 'number'}
    <input {type} bind:value {readonly} />
{:else}
    <input {type} bind:value {readonly} />
{/if} -->
<style>
    input:read-only {
        border: none;
    }
</style>
