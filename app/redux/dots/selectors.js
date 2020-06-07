import { createSelector } from "reselect"
import { getDotKeysFromBitNumber } from "../../helpers/dot"
import { ORDERED_DOT_KEYS } from "../../constants/dots"

export const mapDotsBitNumber = (
    { dotsStore: { dotsBitNumber } }
) => dotsBitNumber

export const getMapFirstAnchorDot = anchorDotsBit => createSelector(
    mapDotsBitNumber,
    dotsBitNumber => {
        const
            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),
            anchorDotKeys = getDotKeysFromBitNumber(anchorDotsBit)

        return ORDERED_DOT_KEYS.find(dotKey => (
            anchorDotKeys[dotKey] &&
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
