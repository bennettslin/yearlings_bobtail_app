// Check if at least one present key is selected.
import keys from 'lodash/keys'
import pickBy from 'lodash/pickby'

import { getObjectFromBitNumber } from './bit'
import { ORDERED_DOT_KEYS } from '../constants/dots'

export const intersects = (presentKeys = {}, selectedKeys = {}) => {

    const presentKeysArray = keys(presentKeys)

    // If presentKeys is empty, return true.
    if (presentKeysArray.length === 0) {
        return true

    } else {
        return presentKeysArray.reduce((intersects, presentKey) => {
            return intersects || selectedKeys[presentKey]
        }, false)
    }
}

export const getDotKeysFromBitNumber = (bitNumber) => {
    return getObjectFromBitNumber({
        keysArray: ORDERED_DOT_KEYS,
        bitNumber
    })
}

export const getPrefixedDotLetterClassNames = (entity, prefix) => {

    if (!entity) {
        return false
    }

    const classNamesArray =
        typeof entity === 'object' ?
            keys(pickBy(entity)) : entity.split(' ')

    return classNamesArray.map(name => (
        `${prefix}${name[0]}`
    ))
}
