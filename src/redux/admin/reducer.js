// Reducers for admin state.
import { ADMIN_STORE } from '../../constants/store'
import { getAdminDefaults } from './default'

export const getAdminReducer = (isReduxAdminPage = false) => (
    state = getAdminDefaults({ isReduxAdminPage }),
    { type, payload },
) => {
    switch (type) {
        case ADMIN_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
