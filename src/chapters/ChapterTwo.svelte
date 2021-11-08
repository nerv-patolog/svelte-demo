<script lang="ts">
    import LogItem from './sub-2/LogItem.svelte';

    let number: number = 0;
    let promise = null;
    let logs = [];

    function addLog(value) {
        logs = [
            ...logs,
            {
                id: Date.now(),
                value,
                emoji: getEmoji(value),
            },
        ];
    }

    function getEmoji(num) {
        if (num % 2 === 0) {
            return '💪';
        } else if (num % 3 === 0) {
            return '🤡';
        } else {
            return '😐';
        }
    }

    function deleteItem(id) {
        logs = logs.filter((i) => i.id !== id);
    }

    async function generateNumber() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                const val = Math.round(Math.random() * 100);

                if (val % 4 === 0) {
                    rej('Attention!11');
                }
                res(val);
            }, 2000);
        });
    }

    function onInput({ target }) {
        addLog((target as HTMLInputElement).value);
    }
</script>

<div class="wrapper">
    <div>
        <section>
            <label
                >Type any number: <input
                    type="number"
                    bind:value={number}
                    on:input={onInput}
                />
            </label>

            <div>
                {#if number % 2 === 0}
                    <span class="cool">{number} is really cool number</span>
                {:else if number % 3 === 0}
                    <span class="poor">{number} is really bad number</span>
                {:else}
                    <span class="average"
                        >{number} is just an average number</span
                    >
                {/if}
            </div>
        </section>
        <section>
            <h3>History</h3>
            {#each logs as log}
                <LogItem item={log} on:click={deleteItem.bind(null, log.id)} />
            {/each}
        </section>
    </div>
    <div>
        <button
            on:click={() => {
                promise = generateNumber();
            }}>Generate!</button
        >
        {#await promise}
            <span style="color: orange;">Generating ...</span>
        {:then value}
            {#if value}
                <span class="success">Got it! {value}</span>
            {/if}
        {:catch}
            <span class="error">Something went wrong!</span>
        {/await}
    </div>
</div>

<style>
    .error {
        color: red;
    }

    .success {
        color: green;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .cool {
        text-transform: uppercase;
        color: green;
    }

    .cool:after {
        content: ' 💪';
    }

    .poor {
        text-transform: lowercase;
        color: black;
    }

    .poor:after {
        content: ' 🤡';
    }

    .average {
        text-transform: capitalize;
        color: orange;
    }

    .average:after {
        content: ' 😐';
    }

    .cool:after,
    .poor:after,
    .average:after {
        padding-left: 1rem;
    }

    h3 {
        color: olivedrab;
    }
</style>
