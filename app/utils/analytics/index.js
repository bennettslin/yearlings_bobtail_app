import {
    GA_ACCOUNT__STAGING,
    GA_ACCOUNT__PRODUCTION
} from '../../constants/analytics'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const getInitialGaLog = () => {
    const gaAccount = IS_STAGING ?
        GA_ACCOUNT__STAGING :
        GA_ACCOUNT__PRODUCTION

    if (isGaUndefined()) {
        return 'GA did not initialise.'
    } else {
        return `GA initialised with property id ${gaAccount}.`
    }
}

export const sendToGa = ({
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
