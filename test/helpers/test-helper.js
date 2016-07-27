/**
 * These unit tests break because the file paths need to be resolved through
 * Webpack first, and Mocha isn't presently being loaded in Webpack.
 */

import { jsdom } from 'jsdom'
global.document = jsdom('')
global.window = document.defaultView
window.localStorage = {}
global.navigator = { userAgent: 'node.js' }
