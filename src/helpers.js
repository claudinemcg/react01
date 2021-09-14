function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
            //            from 0 - i (not including i) ... one after i to end
        }
    }
}

export { choice, remove };