// Import these here just to make them available.
import initialiseLogger from './app/utils/logger'
import './app/scss/app'

initialiseLogger()

// App styles must be imported after global styles.
export {
    wrapRootElement,
    wrapPageElement,
} from './app/utils/gatsby'
