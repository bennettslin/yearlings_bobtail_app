const populateDispatch = (componentThis, payload) => {
    for (const key in payload) {
        componentThis[key] = payload[key]
    }
}

export {
    populateDispatch
}
