// Reducers for options state.
import { hasKey } from '../../helpers/action'
import {
    SHOWN,
    HIDDEN
} from '../../constants/options'
import {
    OPTION_STORE,
    SELECTED_STORE
} from '../../constants/store'
import { OPTION_DEFAULTS } from './default'

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
                    ...isSelectedLogue ? {
                        // If shown, hide when now in logue.
                        ...selectedOverviewOption === SHOWN && {
                            selectedOverviewOption: HIDDEN
                        },
                        ...selectedTipsOption === SHOWN && {
                            selectedTipsOption: HIDDEN
                        }
                    } : {
                        // If just hidden, show when now in new song.
                        ...selectedOverviewOption === HIDDEN && {
                            selectedOverviewOption: SHOWN
                        },
                        ...selectedTipsOption === HIDDEN && {
                            selectedTipsOption: SHOWN
                        }
                    }
                }
            } else {
                return state
            }
        }
        default:
            return state
    }
}
