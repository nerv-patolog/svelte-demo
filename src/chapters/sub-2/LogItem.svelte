<script lang="ts">
    export let item = {
        id: 0,
        emoji: '',
        value: '',
    };

    const { emoji } = item;
</script>

<section on:click>
    <span>{item.value}</span>, looks like <span>{emoji}</span>
</section>

<style>
    section {
        padding: 1rem;
    }
</style>
