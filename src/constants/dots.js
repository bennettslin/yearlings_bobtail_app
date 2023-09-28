import {
    getObjectFromBit,
    getTwoToThePowerOfN,
} from '../helpers/bit'

export const AFTERWORD = 'afterword'
export const BACKSTORY = 'backstory'
export const NARRATIVE = 'narrative'
export const OBSERVATION = 'observation'
export const WORMHOLE = 'wormhole'
export const PUN = 'pun'
export const REFERENCE = 'reference'
export const SONGCRAFT = 'songcraft'

// Order matters!
export const ORDERED_DOT_KEYS = [
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
    WORMHOLE,
    AFTERWORD,
]

export const DOT_KEYS_COUNT = ORDERED_DOT_KEYS.length

export const DOT_DESCRIPTIONS = {
    [BACKSTORY]: `What actually happened in the past.`,
    [NARRATIVE]: `The story told by the music, with artistic license.`,
    [OBSERVATION]: `Just my two cents.`,
    [PUN]: `Both the "literary" and "bad" variety.`,
    [REFERENCE]: `Link to a Wikipedia page.`,
    [SONGCRAFT]: `How I wrote and recorded the music.`,
    [WORMHOLE]: `Portal to another song.`,
    [AFTERWORD]: `Where things are now, for anyone interested.`,
}

export const EMPTY_DOT_KEYS = getObjectFromBit({
    keysList: ORDERED_DOT_KEYS,
    bit: 0,
})

export const FULL_DOTS_BIT = getTwoToThePowerOfN(
    ORDERED_DOT_KEYS.length,
) - 1
