// Reducers for song and player state.
import { SELECTED_STORE } from '../../constants/store'
import { getSelectedDefaults } from './default'

export const getSelectedReducer = ({
    initialSongIndex,
    initialVerseIndex,
    initialAnnotationIndex,
    isPromoPage,
}) => (
    state = getSelectedDefaults({
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex,
        isPromoPage,
    }),
    { type, payload },
) => {
    switch (type) {
        case SELECTED_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
