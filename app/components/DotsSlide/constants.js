import { ALL_DOT_KEYS } from 'constants/dots'

const HALF_LENGTH = ALL_DOT_KEYS.length / 2

export const DOT_KEYS_ARRAY_CONFIGS = [
    {
        dotKeysArray: ALL_DOT_KEYS.slice(0, HALF_LENGTH),
        startingIndex: 0
    },
    {
        dotKeysArray: ALL_DOT_KEYS.slice(HALF_LENGTH),
        startingIndex: HALF_LENGTH
    }
]
