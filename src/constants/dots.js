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
    [BACKSTORY]: 'What took place before.',
    [NARRATIVE]: 'The story as it happens.',
    [OBSERVATION]: 'Just my two cents.',
    [PUN]: 'Both the "literary" and "bad" variety.',
    [REFERENCE]: 'Link to a Wikipedia page.',
    [SONGCRAFT]: 'How the music was made.',
    [WORMHOLE]: 'Portal to another song.',
    [AFTERWORD]: 'My life since then.',
}

export const EMPTY_DOT_KEYS = getObjectFromBit({
    keysList: ORDERED_DOT_KEYS,
    bit: 0,
})

export const FULL_DOTS_BIT = getTwoToThePowerOfN(
    ORDERED_DOT_KEYS.length,
) - 1
