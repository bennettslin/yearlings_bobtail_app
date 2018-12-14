const populateDispatch = (componentThis, payload) => {
    if (!componentThis.dispatch) {
        componentThis.dispatch = {}
    }

    for (const key in payload) {
        componentThis.dispatch[key] = payload[key]
    }
}

export {
    populateDispatch
}
