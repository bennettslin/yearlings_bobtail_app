// Check if at least one present key is selected.
import {
    getObjectFromBit,
    getBitFromObject,
} from './bit'
import {
    BACKSTORY, NARRATIVE, OBSERVATION, ORDERED_DOT_KEYS, REFERENCE, WORMHOLE,
} from '../constants/dots'

export const getDotKeysFromBit = bit => (
    getObjectFromBit({
        keysList: ORDERED_DOT_KEYS,
        bit,
    })
)
export const getDotsBitFromKeys = dotKeys => (
    dotKeys ? getBitFromObject({
        keysList: ORDERED_DOT_KEYS,
        trueFalseObject: dotKeys,
    }) : null
)

export const INITIAL_DOTS_BIT = getDotsBitFromKeys({
    [BACKSTORY]: true,
    [NARRATIVE]: true,
    [OBSERVATION]: true,
})
export const REFERENCE_BIT = getDotsBitFromKeys({
    [REFERENCE]: true,
})
export const WORMHOLE_BIT = getDotsBitFromKeys({
    [WORMHOLE]: true,
})

export const getDotsBitHasKey = (dotsBit, key) => (
    Boolean(getDotKeysFromBit(dotsBit)[key])
)

export const getFirstSelectedDotKey = (dotsBit = 0, selectedDotsBit) => {
    const
        dotKeys = getDotKeysFromBit(dotsBit),
        selectedDotKeys = getDotKeysFromBit(selectedDotsBit)

    return ORDERED_DOT_KEYS.find(dotKey => (
        dotKeys[dotKey] &&
        selectedDotKeys[dotKey]
    ))
}

export const getHasSelectedDot = (dotsBit, selectedDotsBit) => (
    Boolean(getFirstSelectedDotKey(dotsBit, selectedDotsBit))
)

export const getDotsBitForToggledDotIndex = ({
    dotIndex,
    dotsBit,

}) => {
    const
        newDotKeys = getDotKeysFromBit(dotsBit),
        dotKey = ORDERED_DOT_KEYS[dotIndex],
        newValue = !newDotKeys[dotKey]

    newDotKeys[dotKey] = newValue

    return getDotsBitFromKeys(newDotKeys)
}
