import {
    GA_ACCOUNT__DELIVERY,
    GA_ACCOUNT__PRODUCTION
} from '../../constants/analytics'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

const createGa = () => {
    const gaAccount = SHOW_ADMIN ?
        GA_ACCOUNT__DELIVERY :
        GA_ACCOUNT__PRODUCTION

    window.dataLayer = window.dataLayer || []
    function gtag() {
        // eslint-disable-next-line prefer-rest-params
        dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', gaAccount)

    if (isGaUndefined()) {
        console.log('GA did not initialise.')
    } else {
        console.log(`GA initialised with property id ${gaAccount}.`)
        ga('create', gaAccount, 'auto')
    }
}

createGa()

const sendToGa = ({
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

export default sendToGa
