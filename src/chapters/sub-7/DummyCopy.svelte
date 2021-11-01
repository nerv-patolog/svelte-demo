<script>
    import customStore from './custom-store';

    function getRandom() {
        const rand = Math.round(Math.random() * 10);
        return customStore.random((rand % 2 ? -1 : 1) * rand * 10);
    }
</script>

<section>
    <span>{$customStore}</span>
    <button on:click={() => customStore.decrement()}>-</button>
    <button on:click={() => customStore.increment()}>+</button>
    <button on:click={() => customStore.reset()}>Reset</button>
    <button on:click={() => getRandom()}>Random</button>
</section>

<style>
    span,
    button {
        padding: 0.5rem 1rem;
    }
</style>
