<script>
    import readableStore, { stop } from './sub-7/readable-store';
    import { readableDerived } from './sub-7/derived-store';
    import writableStore from './sub-7/writable-store';
    import Reset from './sub-7/Reset.svelte';
    import DummyCopy from './sub-7/DummyCopy.svelte';
    import '../styles/common.css';

    let formattedDate;

    $: {
        formattedDate = new Intl.DateTimeFormat('ru-RU', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
        }).format($readableStore);
    }

    function change(val) {
        $writableStore += val;
    }
</script>

<div class="wrapper">
    <section>
        <h1 style="display: inline-block;">{formattedDate}</h1>
        <button on:click={() => stop()}>Stop</button>
    </section>
    <section>
        <h1>
            {$readableDerived} second{$readableDerived === 1 ? '' : 's'} left
        </h1>
    </section>
</div>
<div class="wrapper">
    <section>
        <span>{$writableStore}</span>
        <button on:click={() => change(-1)}>-</button>
        <button on:click={() => change(1)}>+</button>
    </section>
    <section><Reset /></section>
</div>
<p />
<div><DummyCopy /></div>

<style>
    /* @import '../styles/common.css'; */

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    span,
    button {
        padding: 0.5rem 1rem;
    }
</style>
