<script lang="ts">
    import SumComponent, { getCurrentValue } from './sub-1/SumComponent.svelte';

    let firstComponent;
    const value1 = 0;
    let value2 = 0;

    // notice there's not necessary to use let/var
    $: doubled = value2 ** 2;
</script>

<section>
    <button on:click={() => (value1 -= 1)}>-</button><button
        on:click={() => (value1 += 1)}>+</button
    >&nbsp;&nbsp; Result: {value1}
</section>
<section>
    <input type="number" bind:value={value2} />
    <button on:click={() => (value2 = 0)}>Clear</button>&nbsp;&nbsp;{value2}
</section>
<section>
    Doubled second value: <b>{doubled}</b>
</section>
<br />
<SumComponent
    name="Fist one"
    first={value1}
    second={value2}
    bind:this={firstComponent}
/>
<SumComponent {...{ name: 'Second one', second: value2 }} />
<br />
<section>
    <button
        on:click={() => {
            console.log(getCurrentValue());
        }}>Log common variable</button
    >&nbsp;
    <button on:click={() => console.log(firstComponent)}
        >Log the instance</button
    >
</section>

<style>
    button {
        padding: 0.5rem 1rem;
        line-height: 1rem;
    }
</style>
