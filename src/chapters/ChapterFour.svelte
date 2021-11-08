<script lang="ts">
    let color = 'red';
    let shapes = [];
</script>

<section>
    <fieldset>
        <legend>Choose color:</legend>
        <label for="">Red</label><input
            type="radio"
            name="color"
            value="red"
            bind:group={color}
        />
        <label for="">Green</label><input
            type="radio"
            name="color"
            value="green"
            bind:group={color}
        />
        <label for="">Blue</label><input
            type="radio"
            name="color"
            value="blue"
            bind:group={color}
        />
    </fieldset>
    <p />
    <fieldset>
        <legend>Choose shape:</legend>
        <label for="">Roounded borders</label>
        <input
            type="checkbox"
            name="shape"
            value="rounded"
            bind:group={shapes}
        />
        <label for="">Transitioned </label>
        <input
            type="checkbox"
            name="shape"
            value="transitioned"
            bind:group={shapes}
        />
        <label for="">Centered </label>
        <input
            type="checkbox"
            name="shape"
            value="centered"
            bind:group={shapes}
        />
        <label for="">Scaled down </label>
        <input
            type="checkbox"
            name="shape"
            value="scaled"
            bind:group={shapes}
        />
    </fieldset>

    <div class="wrapper">
        <div
            class="figure"
            class:rounded={shapes.includes('rounded')}
            class:transitioned={shapes.includes('transitioned')}
            class:centered={shapes.includes('centered')}
            class:scaled={shapes.includes('scaled')}
            style="background-color: {color}"
        />
    </div>
</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    label {
        display: inline-block;
        padding: 1rem;
    }

    .wrapper {
        position: relative;
        flex-grow: 1;
    }

    .figure {
        width: 50vw;
        height: 50vh;
        border: 1px solid orange;
        opacity: 0.5;
    }

    .rounded {
        border-radius: 10%;
    }

    .transitioned {
        transition: all 0.3s ease-in-out;
    }

    .centered {
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }

    .scaled {
        transform: scale(0.5);
    }
</style>
