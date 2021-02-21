// Import these here just to make them available.
import { logDevice } from './app/constants/device'
import {
    logGa,
    setGaCustomDimensions,
} from './app/utils/analytics'
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
    logBuild,
} from './app/utils/global'
import './app/scss/app'
import { IP_ADDRESS } from './app/utils/ip'

initialiseGlobalAdminObjects()
setGaCustomDimensions()
globaliseLogs()

logBuild()
logDevice()
logGa()
logServe(IP_ADDRESS)

// App styles must be imported after global styles.
export {
    wrapRootElement,
    wrapPageElement,
} from './app/utils/gatsby'
