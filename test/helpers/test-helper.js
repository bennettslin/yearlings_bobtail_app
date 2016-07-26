import { jsdom } from 'jsdom'
global.document = jsdom('')
global.window = document.defaultView
window.localStorage = {}
global.navigator = { userAgent: 'node.js' }
