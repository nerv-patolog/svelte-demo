<script>
    import { createEventDispatcher } from 'svelte';
    import ButtonComponent from './ButtonComponent.svelte';
    import InputComponent from './InputComponent.svelte';

    const dispatch = createEventDispatcher();

    export let id = '';
    export let value = '';
    let readonly = true;

    function toggleEditable() {
        readonly = !readonly;
    }
</script>

<InputComponent type="text" {readonly} {value} />
{#if readonly}
    <ButtonComponent name="Edit" on:click={toggleEditable} />
{:else}
    <ButtonComponent name="Save" on:click={toggleEditable} />
{/if}
<ButtonComponent name="Done" on:click={() => dispatch('done', id)} />

<style>
</style>
