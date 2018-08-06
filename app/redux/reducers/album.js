// Reducers for album state.

import album from '../../server/album'

import {
    ALBUM
} from 'constants/state'

export const AlbumReducer = (state = album, action) => {
    switch (action.type) {
        case ALBUM:
            return action.payload
        default:
            return state
    }
}
