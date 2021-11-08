<script lang="ts">
    import { getContext, hasContext } from 'svelte';
    import type { ContentObject } from '../../types/common';

    let context = '';
    let context2 = '';
    if (hasContext('simple')) {
        context = getContext<ContentObject>('simple')?.content;
    }
    if (hasContext('simple2')) {
        context2 = getContext<ContentObject>('simple2')?.content;
    }
</script>

<slot><p>Simple text inside, when no data is provided</p></slot>
<p>And that's a context received: <b>{context}</b></p>
{#if context2}
    <p>And that's a context received: <b>{context}</b></p>
{:else}
    <p>No second context received</p>
{/if}

<style>
    p {
        color: var(--main-color);
    }
</style>
