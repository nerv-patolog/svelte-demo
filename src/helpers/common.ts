export default function debounce(fn, time) {
    let timeout = null;
    return function (...args) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        timeout = setTimeout(() => fn(...args), time);
    };
}
