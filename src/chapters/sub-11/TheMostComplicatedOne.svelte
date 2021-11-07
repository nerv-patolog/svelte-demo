<script>
    import SimpleComponent from './SimpleComponent.svelte';

    let selected = false;
    let footerClicked = false;
</script>

<section
    on:click={() => {
        selected = !selected;
    }}
>
    <slot name="header"><h1>That's a header</h1></slot>
    <br />
    <slot {selected}><p>Default description</p></slot>
    {#if $$slots.footer}
        <p />
        <hr />
        <p />
    {/if}
    <div on:click={() => (footerClicked = !footerClicked)}>
        <slot name="footer" {footerClicked}><i>That's a footer</i></slot>
    </div>
</section>
<p />
<SimpleComponent />

<style>
    p {
        color: var(--main-color);
    }

    h1 {
        text-decoration: none;
    }

    section {
        padding: 1rem;
        border: 1px solid var(--main-color);
        border-radius: 0.25rem;
    }
</style>
