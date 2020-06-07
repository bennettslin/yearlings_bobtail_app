// Check if at least one present key is selected.
import {
    getObjectFromBit,
    getBitFromObject
} from './bit'
import { pickBy } from '../helpers/general'
import { ORDERED_DOT_KEYS } from '../constants/dots'

export const intersects = (presentKeys = {}, selectedKeys = {}) => {
    const presentKeysArray = Object.keys(presentKeys)

    // If presentKeys is empty, return true.
    if (presentKeysArray.length === 0) {
        return true

    } else {
        return presentKeysArray.reduce((intersects, presentKey) => {
            return intersects || selectedKeys[presentKey]
        }, false)
    }
}

export const getDotKeysFromBit = bit => (
    getObjectFromBit({
        keysList: ORDERED_DOT_KEYS,
        bit
    })
)
export const getDotsBitFromKeys = dotKeys => (
    dotKeys ? getBitFromObject({
        keysList: ORDERED_DOT_KEYS,
        trueFalseObject: dotKeys
    }) : null
)

export const getPrefixedDotLetterClassNames = (dotsBit, prefix) => {
    const dotKeys = getDotKeysFromBit(dotsBit)

    return Object.keys(pickBy(dotKeys)).map(name => (
        `${prefix}${name[0]}`
    ))
}
