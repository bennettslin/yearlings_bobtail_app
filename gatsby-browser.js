import {
    logGa,
    setCustomDimensions,
} from './app/utils/analytics'
import { logBuild } from './app/utils/build'
import { logDevice } from './app/utils/device'
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
} from './app/utils/global'
import './app/scss/app'
// App styles must be imported after global styles.
import {
    getWrapRootElement,
    getWrapPageElement,
} from './app/utils/gatsby'

initialiseGlobalAdminObjects()
globaliseLogs()
setCustomDimensions()

logBuild()
logDevice()
logGa()

export const wrapRootElement = getWrapRootElement(window)
export const wrapPageElement = getWrapPageElement(window)
