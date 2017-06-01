// Actions for audio state.
import { IS_PLAYING,
         UPDATED_TIME_PLAYED } from '../../constants/state'

export const setIsPlaying = (isPlaying = false) => (
    { type: IS_PLAYING,
      payload: isPlaying }
)

export const setUpdatedTimePlayed = (updatedTimePlayed = null) => (
    { type: UPDATED_TIME_PLAYED,
      payload: updatedTimePlayed }
)
