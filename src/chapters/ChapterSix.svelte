<script>
    import {
        afterUpdate,
        beforeUpdate,
        onDestroy,
        onMount,
        tick,
    } from 'svelte';

    let counter = 0;
    let messages = [];
    let txtArea;
    let txtAreaText = '';

    onMount(() => addMessage('<i><u>onMount</u></i> life cycle hook'));

    beforeUpdate(() =>
        addMessage('<i><u>beforeUpdate</u></i> life cycle hook')
    );

    afterUpdate(() => addMessage('<i><u>afterUpdate</u></i> life cycle hook'));

    onDestroy(() => {
        addMessage('<i><u>onDestroy</u></i> life cycle hook');
        console.log(messages);
    });

    function addMessage(msg) {
        // console.log(msg);
        messages = [
            ...messages,
            {
                id: Math.random(),
                msg,
            },
        ];
    }

    addMessage('<i><u>Setup</u></i> life cycle hook');

    $: console.log(messages);

    function thickExample(e) {
        if (e.keyCode === 13) {
            e.preventDefault();

            const { selectionEnd, selectionStart } = this;

            const uppercased = this.value
                .slice(selectionStart, selectionEnd)
                .toUpperCase();

            txtAreaText = `${this.value.slice(
                0,
                selectionStart
            )}${uppercased}${this.value.slice(selectionEnd)}`;
            /* 
            tick().then(() => {
                this.selectionStart = selectionStart;
                this.selectionEnd = selectionEnd;
            }); */
        }
    }
</script>

<section>
    <h1>Life cycle hooks 😉</h1>
    <input type="number" bind:value={counter} />

    <h3>Type in, select some text and press enter 😏</h3>
    <textarea
        bind:this={txtArea}
        bind:value={txtAreaText}
        on:keydown={thickExample}
    />

    <div class="messages-container">
        {#each messages as message, index (message.id)}
            <span class="message">#{index + 1} {@html message.msg}</span>
        {/each}
    </div>
</section>

<style>
    h1 {
        color: var(--main-color);
        text-transform: uppercase;
    }

    h3 {
        color: rgba(255, 64, 0, 0.651);
        text-transform: uppercase;
    }

    section {
        position: relative;
    }

    .messages-container {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        min-width: clamp(100px, 10vw, 40vw);
    }

    .message {
        font-weight: bolder;
        text-align: center;
        padding: 0.5rem;
        margin: 0.2rem;
        border-radius: 4px;
        min-width: clamp(100px, 10vw, 40vw);
        cursor: pointer;
        color: var(--main-color);
        background-color: #ff3e001c;
    }

    textarea {
        width: 30vw;
        height: 5rem;
        border-color: var(--main-color);
        resize: none;
    }
</style>
