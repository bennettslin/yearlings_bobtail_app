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
    [WORMHOLE]: 'Portal to another song.',
    [SONGCRAFT]: 'How the music was made.',
    [AFTERWORD]: 'My life since then.',
}

// Hard-coded because it fails staging otherwise. Haven't investigated why.
export const INITIAL_DOTS_BIT = 7
export const REFERENCE_BIT = 16
export const WORMHOLE_BIT = 32

export const EMPTY_DOT_KEYS = getObjectFromBit({
    keysList: ORDERED_DOT_KEYS,
    bit: 0,
})

export const FULL_DOTS_BIT = getTwoToThePowerOfN(
    ORDERED_DOT_KEYS.length
) - 1
