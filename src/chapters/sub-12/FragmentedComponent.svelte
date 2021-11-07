<script>
</script>

<section>
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <slot name="last"><div class="item">Last item</div></slot>
</section>

<style>
    section {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .item {
        border: 1px solid var(--main-color);
    }
</style>
