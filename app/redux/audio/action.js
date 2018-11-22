// Actions for audio state.
import { IS_PLAYING } from 'constants/state'

export const setIsPlaying = (isPlaying = false) => ({
    type: IS_PLAYING,
    payload: isPlaying
})
