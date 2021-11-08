<section>
    <slot name="header"><h1>That's a header</h1></slot>
    <br />
    <slot><p>Default description</p></slot>
    {#if $$slots.footer}
        <p />
        <hr />
        <p />
    {/if}
    <slot name="footer"><i>That's a footer</i></slot>
</section>

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
