import { GA_ACCOUNT__STAGING } from '../../constants/analytics'
import {
    BROWSER_NAME, BROWSER_VERSION, ENGINE_NAME, ENGINE_VERSION, IS_TOUCH_SUPPORTED, OS_NAME, OS_VERSION, PLATFORM_TYPE, PLATFORM_VENDOR,
} from '../../constants/device'
import { IP_ADDRESS } from '../ip'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const setGaCustomDimensions = () => {
    if (isGaUndefined()) {
        return
    }

    ga('set', 'cd1', IP_ADDRESS)
    ga('set', 'cd1', BUILD_DATE_TIME)
    ga('set', 'cd2', IS_TOUCH_SUPPORTED)
    ga('set', 'cd3', BROWSER_NAME)
    ga('set', 'cd4', BROWSER_VERSION)
    ga('set', 'cd5', ENGINE_NAME)
    ga('set', 'cd6', ENGINE_VERSION)
    ga('set', 'cd7', OS_NAME)
    ga('set', 'cd8', OS_VERSION)
    ga('set', 'cd9', PLATFORM_TYPE)
    ga('set', 'cd10', PLATFORM_VENDOR)
}

export const sendToGa = ({
    category,
    action,
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

export const logGa = () => {
    let gaLog

    if (isGaUndefined()) {
        gaLog = 'GA did not initialise.'

    } else {
        if (IS_STAGING) {
            gaLog = `GA initialised with staging id ${GA_ACCOUNT__STAGING}.`
        } else {
            gaLog = 'GA initialised with production id.'
        }
    }

    logServe(gaLog)
}
