import { writable } from 'svelte/store';

const custom = writable(10);

export default {
    subscribe: custom.subscribe,
    increment: () => custom.update((val) => val + 1),
    decrement: () => custom.update((val) => val - 1),
    random: (v) => custom.update((val) => val + v),
    reset: () => custom.set(0),
};
