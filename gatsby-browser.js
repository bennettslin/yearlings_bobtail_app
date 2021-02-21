// Import these here just to make them available.
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
    logInitialLogs,
} from './app/utils/global'
import './app/scss/app'

initialiseGlobalAdminObjects()
globaliseLogs()
logInitialLogs()

// App styles must be imported after global styles.
export {
    wrapRootElement,
    wrapPageElement,
} from './app/utils/gatsby'
