import { SONG_INDEX } from '../../helpers/constants.js'
import SessionHelper from '../../helpers/session-helper.js'

const storedSongIndex = SessionHelper.getFromSession(SONG_INDEX)

const SongIndexReducer = (state = storedSongIndex, action) => {
    switch (action.type) {
        case SONG_INDEX:
            return action.payload
        default:
            return state
    }
}

export default SongIndexReducer
