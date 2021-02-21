// Don't pass a key with no value.
export const hasKey = (value) => {
    return value !== undefined
}

export const getDefinedOnlyPayload = (payload, storeName) => {
    const definedOnlyPayload = {}

    for (const key in payload) {
        if (payload[key] !== undefined) {
            definedOnlyPayload[key] = payload[key]
        } else {
            logError(
                'Payload tried to pass undefined value!',
                {
                    action: `undefinedPayloadValue`,
                    label: `store: ${storeName}, key: ${key}`,
                },
            )
        }
    }

    return definedOnlyPayload
}
