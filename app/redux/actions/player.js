// Actions for player state.
import { CAN_PLAY_THROUGHS } from '../../constants/state'

export const selectDotKey = (playerSongIndex, canPlayThrough = false) => {
    setDotInStorage(playerSongIndex, canPlayThrough)
    return { type: CAN_PLAY_THROUGHS,
             payload: { playerSongIndex,
                        canPlayThrough }
    }
}
