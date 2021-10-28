<script context="module">
    let totalCalculations = 0;

    export function getCurrentValue() {
        return totalCalculations;
    }
</script>

<script>
    import { afterUpdate } from 'svelte';

    export let first = 10;
    export let second;

    export let name;

    afterUpdate(() => {
        totalCalculations++;

        if (totalCalculations % 10 === 0) {
            alert('Another 10 changes made');
        }
    });
</script>

<section>
    Summed up result for the <u>'{name}'</u>: <b>{first + second}</b>
</section>

<style>
    section {
        text-transform: uppercase;
        color: green;
    }
</style>
