<svelte:options tag="beautiful-input" />

<script lang="ts">
    export let width;
    export let height;
    export let value;

    function search() {
        this.dispatchEvent(
            new CustomEvent('search', {
                detail: value,
                composed: true,
            })
        );
    }

    function clear() {
        value = '';
        this.dispatchEvent(
            new CustomEvent('clear', {
                composed: true,
            })
        );
    }
</script>

<div
    class="custom-component"
    style="{width ? `width: ${width}px` : ''}{height
        ? `height: ${height}px`
        : ''}"
>
    <div class="custom-component__mg" on:click={search}>
        <slot name="search"><span>&#x1f50d;</span></slot>
    </div>
    <input type="text" class="custom-component__input" bind:value />
    <div class="custom-component__clear" on:click={clear}>
        <slot name="clear"><span>&#x274c;</span></slot>
    </div>
</div>

<style type="scss">
    $mainColor: #ff3e00;
    $padding: 1rem;

    .custom-component {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;

        &__input {
            margin: 0px;
            width: 100%;
            padding: $padding / 2 $padding * 2.5;
            border: 1px solid $mainColor;
            border-radius: calc(1rem / 4);
            caret-color: $mainColor;

            &:focus-visible {
                outline-color: $mainColor;
            }
        }

        &__mg {
            position: absolute;
            cursor: pointer;
            padding-left: $padding / 2;
        }

        &__clear {
            position: absolute;
            right: 0;
            cursor: pointer;
            padding-right: $padding / 2;
        }
    }
</style>
