<script lang="ts">
    import FragmentedComponent from './sub-12/FragmentedComponent.svelte';
    import SelfComponent from './sub-12/SelfComponent.svelte';

    let outerWidth = 0;
    let outerHeight = 0;

    let mouseState = false;
</script>

<h1>Special components</h1>
<SelfComponent level={10} />
<p />
<svelte:window
    bind:outerWidth
    bind:outerHeight
    on:resize={() => console.log(`RESIZE - ${Math.random()}`)}
/>
<p>Outer dimension: <b>{outerWidth}</b> x <b>{outerHeight}</b></p>
<p />
<svelte:body
    on:mouseenter|self={() => (mouseState = true)}
    on:mouseleave|self={() => (mouseState = false)} />
<p>Mouse <b>{mouseState ? 'In' : 'Out'}</b></p>
<p />
<svelte:head>
    <title>Svelte super demo!</title>
</svelte:head>
<p />
<FragmentedComponent>
    <div slot="last">
        <div class="bordered">All rights reserved.</div>
        <div class="bordered">Copyright (c) 2019 Svelte Industries</div>
    </div>
</FragmentedComponent>

<style>
    h1 {
        color: var(--main-color);
        text-decoration: none;
        text-transform: uppercase;
        transition: font-size 1s ease-in-out;
    }

    .bordered {
        border: 1px solid var(--main-color);
    }
</style>
