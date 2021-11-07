<script>
    export let level = 6;

    const color = (parseInt('ff3e00', 16) - level * 255).toString(16);
</script>

<div class="item" style="background-color: #{color};">
    Level: {level}
</div>

<style>
    .item {
        padding-left: 2rem;
    }
</style>
