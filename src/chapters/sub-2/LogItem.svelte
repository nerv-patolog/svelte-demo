<script>
    export let item = 0;

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
