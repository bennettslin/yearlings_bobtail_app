import { ERROR_STORE } from '../../constants/store'

export const mapErrorMessage = (
    { [ERROR_STORE]: { errorMessage } }
) => errorMessage
