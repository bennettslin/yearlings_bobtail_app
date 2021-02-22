import { GA_ACCOUNT__STAGING } from '../../constants/analytics'
import {
    BROWSER_NAME, BROWSER_VERSION, ENGINE_NAME, ENGINE_VERSION, IS_TOUCH_SUPPORTED, IS_USER_AGENT_DESKTOP, OS_NAME, OS_VERSION, PLATFORM_TYPE, PLATFORM_VENDOR,
} from '../../constants/device'
import { getPublicIp } from '../ip'

let isIpReady = false

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const setGaCustomDimensions = () => {
    if (isGaUndefined()) {
        return
    }
    ga('set', 'dimension1', BUILD_DATE_TIME)
    ga('set', 'dimension2', IS_USER_AGENT_DESKTOP)
    ga('set', 'dimension3', IS_TOUCH_SUPPORTED)
    ga('set', 'dimension4', BROWSER_NAME)
    ga('set', 'dimension5', BROWSER_VERSION)
    ga('set', 'dimension6', ENGINE_NAME)
    ga('set', 'dimension7', ENGINE_VERSION)
    ga('set', 'dimension8', OS_NAME)
    ga('set', 'dimension9', OS_VERSION)
    ga('set', 'dimension10', PLATFORM_TYPE)
    ga('set', 'dimension11', PLATFORM_VENDOR)
}

export const setAsyncGaCustomDimensions = async () => {
    if (isGaUndefined()) {
        return
    }
    ga('set', 'dimension12', await getPublicIp())
    isIpReady = true
}

export const sendToGa = ({
    category,
    action,
    label,
    value,

}) => {
    if (isGaUndefined()) {
        return 'failure'
    }

    if (!isIpReady) {
        setTimeout(
            () => {
                sendToGa({
                    category,
                    action,
                    label,
                    value,
                })
            }, 100
        )

        return 'pending'
    }

    ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        ...label && { eventLabel: label },
        ...value && { eventValue: value },
    })

    return 'success'
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
