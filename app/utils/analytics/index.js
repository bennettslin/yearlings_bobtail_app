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

if (typeof ga !== 'undefined') {
    console.log(`GA initialised with property id ${GA_ACCOUNT}.`)
    ga('create', GA_ACCOUNT, 'auto')

} else {
    console.log('GA did not initialise.')
}

const sendEvent = ({
    category = 'category',
    action = 'action',
    label,
    value

}) => {
    if (typeof ga === 'undefined') {
        return false
    }

    ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        ...label && { eventLabel: label },
        ...value && { eventValue: value }
    })

    return true
}

global.sendEvent = sendEvent

export default sendEvent
