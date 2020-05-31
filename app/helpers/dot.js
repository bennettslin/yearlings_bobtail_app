// Check if at least one present key is selected.
import {
    getObjectFromBitNumber,
    getBitNumberFromObject
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

export const getDotKeysFromBitNumber = bitNumber => (
    getObjectFromBitNumber({
        keysArray: ORDERED_DOT_KEYS,
        bitNumber
    })
)
export const getBitNumberFromDotKeys = dotKeys => (
    dotKeys ? getBitNumberFromObject({
        keysArray: ORDERED_DOT_KEYS,
        trueFalseObject: dotKeys
    }) : null
)

export const getPrefixedDotLetterClassNames = (dotBit, prefix) => {
    const dotKeys = getDotKeysFromBitNumber(dotBit)

    return Object.keys(pickBy(dotKeys)).map(name => (
        `${prefix}${name[0]}`
    ))
}
