// Import these here just to make them available.
import { logDevice } from './app/constants/device'
import {
    logGa,
    setAsyncGaCustomDimensions,
    setGaCustomDimensions,
} from './app/utils/analytics'
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
    logBuild,
} from './app/utils/global'
import './app/scss/app'

initialiseGlobalAdminObjects()
globaliseLogs()
setGaCustomDimensions()
setAsyncGaCustomDimensions()

logBuild()
logDevice()
logGa()

// App styles must be imported after global styles.
export {
    wrapRootElement,
    wrapPageElement,
} from './app/utils/gatsby'
