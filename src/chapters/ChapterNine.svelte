<script>
    import { fade, blur, fly, scale, slide } from 'svelte/transition';
    import { circOut, cubicIn, elasticInOut, quadInOut } from 'svelte/easing';
    import { flip } from 'svelte/animate';
    import DummyComponent from './sub-9/DummyComponent.svelte';

    let itemsList = [];
    let fadeTransition = false;
    let blurTransition = false;
    let flyTransition = false;
    let ssTransition = false;
    let customTransition = false;
    let textEntered = '';

    function custom(node, { delay = 0, duration = 500, x = 500, y = 10 }) {
        return {
            delay,
            duration,
            css: (t, u) =>
                `transform: translate(${u * x}px, ${elasticInOut(u) * y}px)`,
        };
    }
</script>

<h1>TRANSITIONS</h1>

<button on:click={() => (fadeTransition = !fadeTransition)}>Toggle fade</button>
{#if !fadeTransition}
    <p
        transition:fade
        on:introstart={() => console.log('On transition intro START event')}
        on:introend={() => console.log('On transition intro END event')}
    >
        <DummyComponent />
    </p>
{/if}

<button on:click={() => (blurTransition = !blurTransition)}>Toggle blur</button>
{#if !blurTransition}
    <p
        transition:blur
        on:outrostart={() => console.log('On transition outro START event')}
        on:outrostart={() => console.log('On transition outro END event')}
    >
        <DummyComponent />
    </p>
{/if}

<button on:click={() => (flyTransition = !flyTransition)}>Toggle fly</button>
{#if !flyTransition}
    <p
        transition:fly={{
            delay: 300,
            duration: 1200,
            easing: circOut,
            x: 20,
            y: 100,
        }}
    >
        <DummyComponent />
    </p>
{/if}

<button on:click={() => (ssTransition = !ssTransition)}>
    Toggle scale in/slide out
</button>
{#if !ssTransition}
    <p
        style="background-color: var(--main-color)"
        out:scale={{
            duration: 1500,
            easing: elasticInOut,
            start: 2,
        }}
        in:slide={{
            duration: 1000,
            easing: cubicIn,
        }}
    >
        <DummyComponent />
    </p>
{/if}

<button on:click={() => (customTransition = !customTransition)}>
    Toggle custom
</button>
{#if !customTransition}
    <p
        transition:custom={{
            duration: 1000,
            y: 50,
        }}
    >
        <DummyComponent />
    </p>
{/if}

<p />
<section>
    <input
        type="text"
        readonly={false}
        bind:value={textEntered}
        on:keypress={(ev) => {
            if (ev.keyCode === 13) {
                if (textEntered) {
                    itemsList = [
                        ...itemsList,
                        { id: Date.now(), value: textEntered },
                    ];
                    textEntered = '';
                }
            }
        }}
    />
</section>
{#each itemsList as item (item.id)}
    <p
        animate:flip={{
            delay: 300,
            duration: 1000,
            easing: quadInOut,
        }}
        on:click={() => {
            itemsList = itemsList.filter((i) => item.id !== i.id);
        }}
    >
        {item.value}
    </p>
{/each}

<style>
    h1 {
        color: var(--main-color);
        text-decoration: none;
    }
</style>
