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
import { getPathname } from './app/utils/routing/path'
import './app/scss/app'
// App styles must be imported after global styles.
import {
    getWrapRootElement,
    getWrapPageElement,
} from './app/utils/gatsby'

initialiseGlobalAdminObjects()
globaliseLogs()
setGaCustomDimensions()
setAsyncGaCustomDimensions()

logBuild()
logDevice()
logGa()

const
    { pathname: rawPathname, search } = window.location,
    pathname = getPathname(rawPathname)

export const wrapRootElement = getWrapRootElement(pathname, search)
export const wrapPageElement = getWrapPageElement(pathname)
