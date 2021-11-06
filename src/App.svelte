<script>
    import chaptersFactory from './helpers/chapters-factory';
    import chaptersList from './stores/chapters';

    let selectedId = 9;

    function selectItem(id) {
        selectedId = id;
    }

    $: selectedComponent = chaptersFactory(selectedId);
</script>

<main>
    <nav>
        {#each $chaptersList as chapter (chapter.id)}
            <div
                class="item"
                class:selected={selectedId === chapter.id}
                on:click={() => selectItem(chapter.id)}
            >
                {chapter.name}
            </div>
        {/each}
    </nav>
    <section>
        <svelte:component this={selectedComponent} />
    </section>
</main>

<style>
    :global(*) {
        box-sizing: border-box;
    }
    :global(body) {
        padding: 0px !important;
    }

    main {
        height: 100%;
        display: grid;
        padding: 1rem 1rem 0 1rem;
        grid-template-columns: minmax(12rem, 1fr) 7fr;
    }

    section {
        padding: 0 1rem;
        height: 100%;
        overflow: hidden;
    }

    .item {
        padding: 1rem;
        text-transform: uppercase;
        border-radius: 0.5rem 0 0 0.5rem;
        color: #ff3e00;
        transition: all 0.1s ease;
    }

    .item.selected {
        color: white;
        background: rgb(255, 62, 0);
        background: linear-gradient(
            90deg,
            rgba(255, 62, 0, 1) 0%,
            rgba(255, 255, 255, 1) 90%
        );
    }

    .item:hover {
        color: white;
        cursor: pointer;
        background: rgb(255, 62, 0);
        background: linear-gradient(
            90deg,
            rgba(255, 62, 0, 0.4514180672268907) 0%,
            rgba(255, 255, 255, 1) 90%
        );
    }
</style>
