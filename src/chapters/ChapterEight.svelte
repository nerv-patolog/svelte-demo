<script lang="ts">
    import { spring, tweened } from 'svelte/motion';
    import { backInOut } from 'svelte/easing';

    import debounce from '../helpers/common';

    // tweened part
    let noTweenedParent = null;
    let tweenedParent = null;

    let width = 0;
    let tweenedWidth = tweened(0, {
        delay: 300,
        duration: 2000,
        easing: backInOut,
    });

    // spring part
    let coords = spring(
        { x: 50, y: 50 },
        {
            stiffness: 0.1,
            damping: 0.25,
        }
    );

    let size = spring(10);
    let svg = null;

    function updateWidth({ clientX }) {
        const { left } = noTweenedParent.getBoundingClientRect();
        width = clientX - left;
    }

    function updateTweenedWidth({ clientX }) {
        const { left } = tweenedParent.getBoundingClientRect();
        $tweenedWidth = clientX - left;
    }
</script>

<h1>MOTIONS</h1>

<span>No tweened</span>
<div
    class="tweened"
    bind:this={noTweenedParent}
    on:mousemove={debounce(updateWidth, 100)}
>
    <div class="tweened__child" style="width: {width}px;" />
</div>
<p />
<span>Tweened</span>
<div
    class="tweened"
    bind:this={tweenedParent}
    on:mousemove={debounce(updateTweenedWidth, 100)}
>
    <div class="tweened__child" style="width: {$tweenedWidth}px;" />
</div>
<p />
<hr />
<p>Spring</p>
<section class="spring">
    <svg
        bind:this={svg}
        on:mousemove={(e) => {
            const { top, left } = svg.getBoundingClientRect();
            coords.set({ x: e.clientX - left, y: e.clientY - top });
        }}
        on:mousedown={() => size.set(30)}
        on:mouseup={() => size.set(10)}
    >
        <circle cx={$coords.x} cy={$coords.y} r={$size} />
    </svg>
    <aside>
        <div>
            <label>
                <h3>stiffness ({coords.stiffness})</h3>
                <input
                    bind:value={coords.stiffness}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                />
            </label>

            <label>
                <h3>damping ({coords.damping})</h3>
                <input
                    bind:value={coords.damping}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                />
            </label>
        </div>
    </aside>
</section>

<style>
    h1 {
        color: var(--main-color);
        text-decoration: none;
    }

    .tweened {
        width: 100%;
        height: 1rem;
        border: 1px solid var(--main-color);
        cursor: pointer;
    }

    .tweened__child {
        height: 100%;
        background-color: var(--main-color);
    }

    span,
    p {
        font-style: italic;
        color: var(--main-color);
    }

    .spring {
        display: flex;
    }

    svg {
        width: 100%;
        height: 100%;
    }
    circle {
        fill: var(--main-color);
    }
</style>
