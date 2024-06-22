import { createSelector } from 'reselect'
import {
    getFirstSelectedDotKey,
    getHasSelectedDot,
} from '../../helpers/dot'
import { DOTS_STORE } from '../../constants/store'

export const mapSelectedDotsBit = (
    { [DOTS_STORE]: { selectedDotsBit } = {} },
) => selectedDotsBit

export const getMapFirstSelectedDotKey = dotsBit => createSelector(
    mapSelectedDotsBit,
    selectedDotsBit => getFirstSelectedDotKey(
        dotsBit,
        selectedDotsBit,
    ),
)

export const getMapHasSelectedDot = dotsBit => createSelector(
    mapSelectedDotsBit,
    selectedDotsBit => getHasSelectedDot(
        dotsBit,
        selectedDotsBit,
    ),
)

export const mapBackstoryDot = (
    { [DOTS_STORE]: { backstory } },
) => backstory

export const mapReferenceDot = (
    { [DOTS_STORE]: { reference } },
) => reference

export const mapWormholeDot = (
    { [DOTS_STORE]: { wormhole } },
) => wormhole
