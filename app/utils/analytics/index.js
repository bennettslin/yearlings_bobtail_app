import { GA_ACCOUNT__STAGING } from '../../constants/analytics'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const getInitialGaLog = () => {
    if (isGaUndefined()) {
        return 'GA did not initialise.'
    } else {
        if (IS_STAGING) {
            return `GA initialised with staging id ${GA_ACCOUNT__STAGING}.`
        } else {
            return 'GA initialised with production id.'
        }
    }
}

export const sendToGa = ({
    category = 'category',
    action = 'action',
    label,
    value,

}) => {
    if (isGaUndefined()) {
        return false
    }

    ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        ...label && { eventLabel: label },
        ...value && { eventValue: value },
    })

    return true
}
