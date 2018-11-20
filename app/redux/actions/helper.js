// Don't pass a key with no value.
export const hasKey = (value) => {
    return typeof value !== 'undefined'
}

export const getDefinedOnlyPayload = (payload) => {
    const definedOnlyPayload = {}

    for (const key in payload) {
        if (typeof payload[key] !== 'undefined') {
            definedOnlyPayload[key] = payload[key]
        }
    }

    return definedOnlyPayload
}
