// This grabs from app, not admin, in production.
import { GA_ACCOUNT } from 'admin/constants/analytics'

/* eslint-disable */
window.dataLayer = window.dataLayer || []
function gtag() {
    dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', GA_ACCOUNT)
/* eslint-enable */
console.log(`GA initialised with property id ${GA_ACCOUNT}.`)

let isGaTrackerCreated = false

const _canGaSendEvent = () => {
    // Not sure why isUndefined util doesn't work?
    if (typeof ga === 'undefined') {
        return false
    }

    if (!isGaTrackerCreated) {
        ga('create', GA_ACCOUNT, 'auto')
        isGaTrackerCreated = true
    }

    return true
}

const sendEvent = ({
    category = 'category',
    action = 'action',
    label,
    value

}) => {
    if (_canGaSendEvent()) {
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            ...label && { eventLabel: label },
            ...value && { eventValue: value }
        })
    }
}

global.sendEvent = sendEvent

export default sendEvent
