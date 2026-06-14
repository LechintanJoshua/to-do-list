export function addElAttr(type, obj) {
    const el = document.createElement(type);
    
    for (let [key, value] of Object.entries(obj)) {
        el.setAttribute(key, value);
    }

    return el;
}   