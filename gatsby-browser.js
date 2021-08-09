import { logAnalytics } from './src/utils/analytics'
import { logBuild } from './src/utils/build'
import { logDevice } from './src/utils/device'
import {
    initialiseGlobalAdminObjects,
    globaliseLogs,
} from './src/utils/global'
import './src/scss/style'
import { logError } from './src/utils/logger'

initialiseGlobalAdminObjects()
globaliseLogs()

logBuild()
logDevice()
logAnalytics()

logSuccess(`Hi, I'm looking for another developer or two to help build some music-based apps. If this sounds like interesting work to you, please get in touch! Bennett`)

logError(`Hi, if you can help me figure out how to continue exporting Sass variables to JavaScript in webpack 5, I'd be super grateful! Right now, this is blocking me from upgrading to webpack 5 and gatsby 3. Bennett`)
logError(`https://github.com/bennettslin/yearlings_bobtail_app`)

export {
    wrapRootElement,
    wrapPageElement,
} from './src/utils/gatsby'
