<script>
    import ownStore from './own-store';
</script>

<section>
    <span>{$ownStore}</span>
    <button on:click={() => ownStore.update((data) => [...data, 'added'])}>
        Add
    </button>
    <button on:click={() => ownStore.set([])}>Reset</button>
</section>

<style>
    span,
    button {
        padding: 0.5rem 1rem;
    }
</style>
