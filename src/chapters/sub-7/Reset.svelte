<script lang="ts">
    import { onDestroy } from 'svelte';
    import writableStore from './writable-store';
    import { writableDerived } from './derived-store';

    let value = 0;

    let unsubscribe = writableStore.subscribe((val) => (value = val));

    onDestroy(() => unsubscribe());
</script>

<span>{value}</span>
<button on:click={() => writableStore.set(0)}>Reset</button>
<span><b>DOUBLED</b> {$writableDerived}</span>

<style>
    span,
    button {
        padding: 0.5rem 1rem;
    }
</style>
