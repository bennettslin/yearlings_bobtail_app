// Import these here just to make them available.
import { logDevice } from './app/constants/device'
import {
    logGa,
    setAsyncGaCustomDimensions,
    setGaCustomDimensions,
} from './app/utils/analytics'
import { logBuild } from './app/utils/build'
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
logServe(`origin: ${window.location.origin}`)
logServe(`pathname: ${window.location.pathname}`)
logServe(`search: ${window.location.search}`)

// App styles must be imported after global styles.
export {
    wrapRootElement,
    wrapPageElement,
} from './app/utils/gatsby'
