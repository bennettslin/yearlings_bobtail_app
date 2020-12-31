// Don't pass a key with no value.
export const hasKey = (value) => {
    return value !== undefined
}

export const getDefinedOnlyPayload = payload => {
    const definedOnlyPayload = {}

    for (const key in payload) {
        if (payload[key] !== undefined) {
            definedOnlyPayload[key] = payload[key]
        }
    }

    if (
        Object.keys(payload).length !==
        Object.keys(definedOnlyPayload).length
    ) {
        logError({
            log: 'Payload tried to pass undefined value!',
        })
        console.log(payload)
    }

    return definedOnlyPayload
}
