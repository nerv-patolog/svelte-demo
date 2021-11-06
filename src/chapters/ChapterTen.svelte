<script>
    import { onMount } from 'svelte';
    import debounce from '../helpers/common';

    let canvas = null;
    let context = null;

    onMount(() => {
        canvas.setAttribute('width', canvas.clientWidth);
        canvas.setAttribute('height', document.body.clientHeight - 150);
    });

    /**
     * Custom action handler (simple lines drawing)
     *
     * @param node
     * @param param1
     *
     * @returns {void}
     */
    function customAction(node, { color, timing = 0 }) {
        const { top, left } = node.getBoundingClientRect();
        node.addEventListener('mousedown', handleStart);

        const handleProgress = debounce((e) => {
            node.dispatchEvent(
                new CustomEvent('drawing', {
                    detail: {
                        x: e.clientX - left,
                        y: e.clientY - top,
                        color,
                    },
                })
            );
        }, timing);

        function handleStart(e) {
            node.dispatchEvent(
                new CustomEvent('drawstart', {
                    detail: {
                        x: e.clientX - left,
                        y: e.clientY - top,
                        color,
                    },
                })
            );

            node.addEventListener('mousemove', handleProgress);
            document.body.addEventListener('mouseup', handleEnd);
        }

        function handleEnd() {
            node.dispatchEvent(new CustomEvent('drawend'));

            node.removeEventListener('mousemove', handleProgress);
            document.body.removeEventListener('mouseup', handleEnd);
        }
    }

    /**
     * Drawing functions
     */
    function drawStart({ detail }) {
        const { x, y, color } = detail;

        context = canvas.getContext('2d');

        context.strokeStyle = color;
        context.beginPath();
        context.moveTo(x, y);
    }
    function draw({ detail }) {
        const { x, y } = detail;

        context?.lineTo(x, y);
        context?.stroke();
    }
    function drawEnd() {
        context = null;
    }
</script>

<h1>ACTIONS</h1>
<canvas
    use:customAction={{
        color: 'blue',
        timing: 100,
    }}
    bind:this={canvas}
    on:drawstart={drawStart}
    on:drawend={drawEnd}
    on:drawing={draw}
/>

<style>
    h1 {
        color: var(--main-color);
        text-decoration: none;
    }

    canvas {
        width: 100%;
        border: 1px solid var(--main-color);
    }
</style>
