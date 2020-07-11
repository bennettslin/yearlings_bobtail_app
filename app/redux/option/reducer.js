// Reducers for options state.
import { hasKey } from '../../helpers/action'
import { getOverviewTipsForNewSong } from '../../helpers/options'
import {
    OPTION_STORE,
    SELECTED_STORE
} from '../../constants/store'
import { OPTION_DEFAULTS, getOptionDefaults } from './default'

export default (
    state = OPTION_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case OPTION_STORE:
            return {
                ...state,
                ...payload
            }
        case SELECTED_STORE: {
            const {
                isSelectedLogue,
                selectedSongIndex,
                selectedAnnotationIndex
            } = payload

            /**
             * Show or hide overview and tips between songs, but only if not
             * from a wormhole.
             */
            if (hasKey(selectedSongIndex) && !selectedAnnotationIndex) {
                const {
                    selectedOverviewOption,
                    selectedTipsOption
                } = state

                return {
                    ...state,
                    ...getOverviewTipsForNewSong({
                        isSelectedLogue,
                        selectedOverviewOption,
                        selectedTipsOption
                    })
                }
            } else {
                return state
            }
        }
        default:
            return state
    }
}

export const getOptionReducer = songIndex => (
    state = getOptionDefaults(songIndex),
    { type, payload }
) => {
    switch (type) {
        case OPTION_STORE:
            return {
                ...state,
                ...payload
            }
        case SELECTED_STORE: {
            const {
                isSelectedLogue,
                selectedSongIndex,
                selectedAnnotationIndex
            } = payload

            /**
             * Show or hide overview and tips between songs, but only if not
             * from a wormhole.
             */
            if (hasKey(selectedSongIndex) && !selectedAnnotationIndex) {
                const {
                    selectedOverviewOption,
                    selectedTipsOption
                } = state

                return {
                    ...state,
                    ...getOverviewTipsForNewSong({
                        isSelectedLogue,
                        selectedOverviewOption,
                        selectedTipsOption
                    })
                }
            } else {
                return state
            }
        }
        default:
            return state
    }
}
