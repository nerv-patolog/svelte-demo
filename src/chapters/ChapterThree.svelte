<script>
    import ToDoList from './sub-3/ToDoList.svelte';
    import InputComponent from './sub-3/InputComponent.svelte';

    let list = [];
    let textEntered = '';

    $: makeDisabled = !Boolean(textEntered);

    function addItem() {
        if (textEntered) {
            list = [...list, { id: Date.now(), value: textEntered }];
            textEntered = '';
        }
    }

    function deleteItem({ detail: id }) {
        list = list.filter((i) => i.id !== id);
    }
</script>

<h2>To do list 😁</h2>
<section>
    <InputComponent
        type="text"
        readonly={false}
        bind:value={textEntered}
        on:keypress={(ev) => {
            if (ev.keyCode === 13) {
                addItem();
            }
        }}
    />
    <button disabled={makeDisabled} on:click={addItem}>Add new</button>
</section>
<br />

<ToDoList {list} on:done={deleteItem} />

<style>
    h2 {
        color: #ff3e00;
        text-transform: uppercase;
    }

    /* that's the way how to avoid scoping in CSS */
    :global(input) {
        width: clamp(100px, 30vw, 50vw);
    }
</style>
