import { createSelector } from "reselect"
import {
    getFirstSelectedDotKey,
    getHasSelectedDot
} from "../../helpers/dot"

export const mapSelectedDotsBit = (
    { dotsStore: { selectedDotsBit } }
) => selectedDotsBit

export const getMapFirstSelectedDotKey = dotsBit => createSelector(
    mapSelectedDotsBit,
    selectedDotsBit => getFirstSelectedDotKey(
        dotsBit,
        selectedDotsBit
    )
)

export const getMapHasSelectedDot = dotsBit => createSelector(
    mapSelectedDotsBit,
    selectedDotsBit => getHasSelectedDot(
        dotsBit,
        selectedDotsBit
    )
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
