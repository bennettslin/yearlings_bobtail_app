import { logAnalytics } from './app/utils/analytics'
import { logBuild } from './app/utils/build'
import { logDevice } from './app/utils/device'
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
} from './app/utils/global'
import './app/scss/app'

initialiseGlobalAdminObjects()
globaliseLogs()

logBuild()
logDevice()
logAnalytics()

export {
    wrapRootElement,
    wrapPageElement,
} from './app/utils/gatsby'
