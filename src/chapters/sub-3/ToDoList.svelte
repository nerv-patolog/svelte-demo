<script>
    import ToDoItem from './ToDoItem.svelte';

    export let list = [];
</script>

<section>
    {#each list as l (l.id)}
        <div>
            <ToDoItem {...l} on:done />
        </div>
    {/each}
</section>

<style>
</style>
