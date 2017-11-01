export function getDomSize(dom) {
    return dom.getBoundingClientRect;
}
export function getDocumentSize() {
    return {
        width: document.body.offsetWidth,
        Height: document.body.offsetHeight
    }
}