let data = [];
const subscribers = new Map();

setInterval(() => {
    if (data.length > 10) {
        data = [];
    }
    data = [...data, Math.round(Math.random() * 100)];
    updateAll();
}, 1000);

function updateAll() {
    if (subscribers.size) {
        for (const s of subscribers.values()) {
            s(data);
        }
    }
}

export default {
    subscribe(fn) {
        if (!subscribers.get(fn)) {
            subscribers.set(fn, fn);
        }
        fn(data);

        return () => subscribers.delete(fn);
    },
    set(val) {
        data = val;
        updateAll();
    },
    update(fn) {
        data = fn(data);
        updateAll();
    },
};
