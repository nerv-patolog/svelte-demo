import { readable } from 'svelte/store';

let interval = null;

export function stop() {
    clearInterval(interval);
}

export default readable(new Date(), function start(set) {
    interval = setInterval(() => set(new Date()), 1000);

    return stop;
});
