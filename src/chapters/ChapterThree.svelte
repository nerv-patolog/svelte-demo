<script>
    import ToDoList from './sub-3/ToDoList.svelte';

    let list = [];
    let input = null;
</script>

<h2>To do list 😁</h2>
<section>
    <input type="text" bind:this={input} />
    <button
        on:click={() => {
            list = [...list, { id: Date.now(), value: input.value }];
        }}>Add new</button
    >
</section>
<br />
<ToDoList {list} />

<style>
    h2 {
        color: #ff3e00;
        text-transform: uppercase;
    }
</style>
