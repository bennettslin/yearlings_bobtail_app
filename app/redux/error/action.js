// Actions for error values.
import { ERROR_DEFAULTS } from './default'
import { ERROR_STORE } from '../../constants/store'

export const updateErrorMessage = (
    errorMessage = ERROR_DEFAULTS.errorMessage
) => ({
    type: ERROR_STORE,
    payload: { errorMessage },
})
