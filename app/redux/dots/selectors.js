import { createSelector } from "reselect"
import { getDotKeysFromBit } from "../../helpers/dot"
import { ORDERED_DOT_KEYS } from "../../constants/dots"

export const mapSelectedDotsBit = (
    { dotsStore: { selectedDotsBit } }
) => selectedDotsBit

export const getMapFirstDotKey = dotsBit => createSelector(
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

export const mapReferenceDot = (
    { dotsStore: { reference } }
) => reference

export const mapWormholeDot = (
    { dotsStore: { wormhole } }
) => wormhole
