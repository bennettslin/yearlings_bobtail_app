// This grabs from app, not admin, in production.
// eslint-disable-next-line import/no-unresolved
import { GA_ACCOUNT } from 'env/constants/analytics'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

window.dataLayer = window.dataLayer || []
function gtag() {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', GA_ACCOUNT)

if (isGaUndefined()) {
    console.log('GA did not initialise.')
} else {
    console.log(`GA initialised with property id ${GA_ACCOUNT}.`)
    ga('create', GA_ACCOUNT, 'auto')
}

const sendEvent = ({
    category = 'category',
    action = 'action',
    label,
    value

}) => {
    if (isGaUndefined()) {
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

export default sendEvent
