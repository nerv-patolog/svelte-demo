import { readable } from 'svelte/store';

const chapters = [
    {
        id: 0,
        name: 'Hello Svelte',
    },
    {
        id: 1,
        name: 'Svelte variables',
    },
    {
        id: 2,
        name: 'Svelte conditions',
    },
    {
        id: 3,
        name: 'Svelte events',
    },
    {
        id: 4,
        name: 'Svelte classes',
    },
    {
        id: 5,
        name: 'Svelte forms',
    },
    {
        id: 6,
        name: 'Svelte life cycles',
    },
    {
        id: 7,
        name: 'Svelte stores',
    },
    {
        id: 8,
        name: 'Svelte motions',
    },
    {
        id: 9,
        name: 'Svelte transitions',
    },
    {
        id: 10,
        name: 'Svelte actions',
    },
    {
        id: 11,
        name: 'Svelte slots & contexts',
    },
    {
        id: 12,
        name: 'Svelte special',
    },
    {
        id: 13,
        name: 'Svelte custom elements',
    },
];

let counter = 0;

export default readable([], function start(set) {
    const interval = setInterval(() => {
        if (counter <= chapters.length) {
            set(chapters.slice(0, counter));
            counter++;
        } else {
            clearInterval(interval);
        }
    }, 100);

    return function stop() {
        clearInterval(interval);
    };
});
