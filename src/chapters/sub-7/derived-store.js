import { derived } from 'svelte/store';
import readableStore from './readable-store';

const date = Date.now();

export const readableDerived = derived(readableStore, (value) =>
    Math.round((+value - date) / 1000)
);

import writableStore from './writable-store';

export const writableDerived = derived(writableStore, (value) => value ** 2);
