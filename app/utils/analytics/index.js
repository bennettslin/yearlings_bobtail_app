import { GA_ACCOUNT__STAGING } from '../../constants/analytics'
import {
    BROWSER_NAME, BROWSER_VERSION, ENGINE_NAME, ENGINE_VERSION, IS_TOUCH_SUPPORTED, IS_USER_AGENT_DESKTOP, OS_NAME, OS_VERSION, PLATFORM_TYPE, PLATFORM_VENDOR,
} from '../../constants/device'
import { getPublicIp } from '../ip'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const setAsyncGaCustomDimensions = async () => {
    if (isGaUndefined()) {
        return
    }
    const ip = await getPublicIp()
    ga('set', 'cd1', ip)
}

export const setGaCustomDimensions = () => {
    if (isGaUndefined()) {
        return
    }
    ga('set', 'cd2', BUILD_DATE_TIME)
    ga('set', 'cd3', IS_USER_AGENT_DESKTOP)
    ga('set', 'cd4', IS_TOUCH_SUPPORTED)
    ga('set', 'cd5', BROWSER_NAME)
    ga('set', 'cd6', BROWSER_VERSION)
    ga('set', 'cd7', ENGINE_NAME)
    ga('set', 'cd8', ENGINE_VERSION)
    ga('set', 'cd9', OS_NAME)
    ga('set', 'cd10', OS_VERSION)
    ga('set', 'cd11', PLATFORM_TYPE)
    ga('set', 'cd12', PLATFORM_VENDOR)
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
