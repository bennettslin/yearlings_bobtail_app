import { ADMIN_STORE } from '../../constants/store'

export const mapIsReduxAdminPage = (
    { [ADMIN_STORE]: { isReduxAdminPage } },
) => isReduxAdminPage
