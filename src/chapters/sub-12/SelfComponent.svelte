<script lang="ts">
    export let level = 6;

    const color = (parseInt('ff3e00', 16) - level * 496).toString(16);
</script>

<div class="item" style="background-color: #{color};">
    Level: {level}
    {#if level > 0}
        <svelte:self level={level - 1} />
    {/if}
</div>

<style>
    .item {
        padding-left: 2rem;
    }
</style>
