export const AFTERWORD = 'afterword'
export const BACKSTORY = 'backstory'
export const NARRATIVE = 'narrative'
export const OBSERVATION = 'observation'
export const WORMHOLE = 'wormhole'
export const PUN = 'pun'
export const REFERENCE = 'reference'
export const SONGWRITING = 'songwriting'

export const INITIAL_DOTS_BIT_NUMBER = 7

// Order matters!
export const ORDERED_DOT_KEYS = [
    NARRATIVE,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    WORMHOLE,
    SONGWRITING,
    AFTERWORD
]

export const DOT_DESCRIPTIONS = {
    [NARRATIVE]: 'the story',
    [BACKSTORY]: 'backstory description',
    [OBSERVATION]: 'my two cents',
    [PUN]: 'Of both the "literary" and "bad" variety.',
    [REFERENCE]: 'wiki description',
    [WORMHOLE]: 'wormhole description',
    [SONGWRITING]: 'music description',
    [AFTERWORD]: 'after the album'
}
