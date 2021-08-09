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

logSuccess(`Hi, I'm looking for another developer or two to help build some music-based apps. If this sounds like interesting work to you, please get in touch! Bennett`)

export {
    wrapRootElement,
    wrapPageElement,
} from './src/utils/gatsby'
