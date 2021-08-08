import { logAnalytics } from './src/utils/analytics'
import { logBuild } from './src/utils/build'
import { logDevice } from './src/utils/device'
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
} from './src/utils/global'
import './src/scss/style'

initialiseGlobalAdminObjects()
globaliseLogs()

logBuild()
logDevice()
logAnalytics()

export {
    wrapRootElement,
    wrapPageElement,
} from './src/utils/gatsby'
