// Import these here just to make them available.
import { logDevice } from './app/constants/device'
import {
    logGa,
    setAsyncGaCustomDimensions,
    setGaCustomDimensions,
} from './app/utils/analytics'
import { logBuild } from './app/utils/build'
import { getWrapRootElement } from './app/utils/gatsby'
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
} from './app/utils/global'
import './app/scss/app'

initialiseGlobalAdminObjects()
globaliseLogs()
setGaCustomDimensions()
setAsyncGaCustomDimensions()

logBuild()
logDevice()
logGa()

logAdmin(`pathname: ${window.location.pathname}`)
logAdmin(`search: ${window.location.search}`)

// App styles must be imported after global styles.
export const wrapRootElement = getWrapRootElement(
    window.location.pathname,
    window.location.search,
)
export { wrapPageElement } from './app/utils/gatsby'
