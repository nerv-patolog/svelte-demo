<script>
    import CustomInput from './sub-5/CustomInput.svelte';
    import Toggle from './sub-5/Toggle.svelte';

    let val = 'Max';
    let selectedOption = 1;
    let price = 0;
    let agreed = true;
    let favoriteColor = 'red';
    let favoriteChkColor = ['green'];
    let favoriteSelColor = 'blue';

    let textInput;
    let customComponent;

    $: console.dir(customComponent);

    function getText() {
        console.log(textInput.value);
    }
</script>

<h2>Binding & Forms</h2>

<CustomInput bind:val /> 👉
{val}
<p />

<Toggle bind:chosenOption={selectedOption} bind:this={customComponent} /> 👉
{selectedOption}
<p />

<input type="number" bind:value={price} /> 👉
{price}
<p />

<label for="">
    <input type="checkbox" bind:checked={agreed} />
    Agree?
</label>
👉 {agreed}

<h1 style={`color: ${favoriteColor}`}>Favorite radio color</h1>
👉 {favoriteColor}
<p />
<label for="">
    <input type="radio" name="color" value="red" bind:group={favoriteColor} />
    Red
</label>
<label for="">
    <input type="radio" name="color" value="green" bind:group={favoriteColor} />
    Green
</label>
<label for="">
    <input type="radio" name="color" value="blue" bind:group={favoriteColor} />
    Blue
</label>

<h1 style={`color: ${favoriteChkColor.length ? favoriteChkColor[0] : ''}`}>
    Favorite checked color
</h1>
👉 {favoriteChkColor}
<p />
<label for="">
    <input
        type="checkbox"
        name="color"
        value="red"
        bind:group={favoriteChkColor}
    />
    Red
</label>
<label for="">
    <input
        type="checkbox"
        name="color"
        value="green"
        bind:group={favoriteChkColor}
    />
    Green
</label>
<label for="">
    <input
        type="checkbox"
        name="color"
        value="blue"
        bind:group={favoriteChkColor}
    />
    Blue
</label>

<h1 style={`color: ${favoriteSelColor}`}>Favorite selected color</h1>

<select bind:value={favoriteSelColor}>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
</select>
👉 {favoriteSelColor}
<br />
<input type="text" bind:this={textInput} />
<button on:click={getText}>Save</button>

<style>
    h2 {
        color: #ff3e00;
        text-transform: uppercase;
    }

    label {
        display: inline-block;
    }
</style>
