<script>
    import { onMount, setContext } from 'svelte';
    import ABitMoreComplicated from './sub-11/ABitMoreComplicated.svelte';
    import SimpleComponent from './sub-11/SimpleComponent.svelte';
    import TheMostComplicatedOne from './sub-11/TheMostComplicatedOne.svelte';

    setContext('simple', {
        id: 'simple',
        content: 'Some simple content',
    });

    /*     onMount(() => {
        setContext('simple2', {
            id: 'simple2',
            content: 'Another simple content',
        });
    }); */
</script>

<h1>Slots and contexts</h1>

<p />
<SimpleComponent />
<p><SimpleComponent><p class="parental">html provided</p></SimpleComponent></p>
<p />
<ABitMoreComplicated />
<p />
<TheMostComplicatedOne let:selected>
    <h1 slot="header" class:selected>What a beautiful header</h1>
    <p class="parental">What a content!</p>
    <footer slot="footer" let:footerClicked={fClicked} class:rotate={fClicked}>
        What a foooooooter!
    </footer>
</TheMostComplicatedOne>

<style>
    h1 {
        color: var(--main-color);
        text-decoration: none;
        text-transform: uppercase;
        transition: font-size 1s ease-in-out;
    }

    .parental {
        color: green;
        font-weight: 600;
    }

    .selected {
        color: red;
        text-decoration: underline;
        font-size: 1.5rem;
    }

    footer {
        transition: transform 0.5s ease-in;
        transform: rotate(0deg);
    }

    .rotate {
        transform: rotate(180deg);
    }
</style>
