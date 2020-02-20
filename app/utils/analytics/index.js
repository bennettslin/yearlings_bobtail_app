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

if (ga) {
    console.log(`GA with property id ${GA_ACCOUNT} initialised.`)
    ga('create', GA_ACCOUNT, 'auto')

} else {
    console.log(`GA with property id ${GA_ACCOUNT} did not initialise.`)
}

const sendEvent = ({
    category = 'category',
    action = 'action',
    label,
    value

}) => {
    if (!ga) {
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
