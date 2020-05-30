import {
    getDotKeysFromBitNumber,
    getBitNumberFromDotKeys
} from '../../../helpers/dot'
import { ORDERED_DOT_KEYS } from '../../../constants/dots'

export const getValueAndDotsBitNumberForToggledDotIndex = ({
    dotIndex,
    bitNumber

}) => {
    const
        newDotKeys = getDotKeysFromBitNumber(bitNumber),
        dotKey = ORDERED_DOT_KEYS[dotIndex],
        newValue = !newDotKeys[dotKey]

    newDotKeys[dotKey] = newValue

    return {
        value: newValue,
        bitNumber: getBitNumberFromDotKeys(newDotKeys)
    }
}
