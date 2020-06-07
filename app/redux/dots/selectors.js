import { createSelector } from "reselect"
import { getDotKeysFromBit } from "../../helpers/dot"
import { ORDERED_DOT_KEYS } from "../../constants/dots"

export const mapSelectedDotsBit = (
    { dotsStore: { selectedDotsBit } }
) => selectedDotsBit

export const getMapFirstSelectedDotKey = dotsBit => createSelector(
    mapSelectedDotsBit,
    selectedDotsBit => {
        const
            dotKeys = getDotKeysFromBit(dotsBit),
            selectedDotKeys = getDotKeysFromBit(selectedDotsBit)

        return ORDERED_DOT_KEYS.find(dotKey => (
            dotKeys[dotKey] &&
            selectedDotKeys[dotKey]
        ))
    }
)

export const getMapHasSelectedDot = (dotsBit = 0) => createSelector(
    getMapFirstSelectedDotKey(dotsBit),
    firstDotKey => Boolean(firstDotKey)
)

export const getMapIsSelectedDot = dotKey => (
    { dotsStore: { [dotKey]: value } }
) => value

export const mapReferenceDot = (
    { dotsStore: { reference } }
) => reference

export const mapWormholeDot = (
    { dotsStore: { wormhole } }
) => wormhole
