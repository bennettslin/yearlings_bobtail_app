import isUndefined from 'lodash/isUndefined'
import keys from 'lodash/keys'

// Don't pass a key with no value.
export const hasKey = (value) => {
    return !isUndefined(value)
}

export const getDefinedOnlyPayload = (payload) => {
    const definedOnlyPayload = {}

    for (const key in payload) {
        if (!isUndefined(payload[key])) {
            definedOnlyPayload[key] = payload[key]
        }
    }

    if (
        keys(payload).length !== keys(definedOnlyPayload).length
    ) {
        /**
         * TODO: Eventually get rid of getDefinedOnlyPayload if it's not
         * passing any more undefined values.
         */
        logError({
            log: 'Payload tried to pass undefined value!'
        })
    }

    return definedOnlyPayload
}
