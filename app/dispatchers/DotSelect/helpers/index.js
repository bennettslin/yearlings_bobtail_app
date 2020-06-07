import {
    getDotKeysFromBit,
    getDotsBitFromKeys
} from '../../../helpers/dot'
import { ORDERED_DOT_KEYS } from '../../../constants/dots'

export const getValueAndDotsBitForToggledDotIndex = ({
    dotIndex,
    dotsBit

}) => {
    const
        newDotKeys = getDotKeysFromBit(dotsBit),
        dotKey = ORDERED_DOT_KEYS[dotIndex],
        newValue = !newDotKeys[dotKey]

    newDotKeys[dotKey] = newValue

    return {
        value: newValue,
        dotsBit: getDotsBitFromKeys(newDotKeys)
    }
}
