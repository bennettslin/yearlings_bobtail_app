import { GA_ACCOUNT__STAGING } from '../../constants/analytics'
import { IS_TOUCH_SUPPORTED, IS_USER_AGENT_DESKTOP } from '../../constants/device'
import {
    BROWSER_NAME, BROWSER_VERSION, ENGINE_NAME, ENGINE_VERSION, OS_NAME, OS_VERSION, PLATFORM_TYPE, PLATFORM_VENDOR,
} from '../device'
import { getDateTimeForGa } from '../build'
import { getPublicIp } from '../ip'

/**
 * NOTE: This is kind of a quick workaround for now, to delay the initial GA
 * calls until the async custom dimensions are ready. I may want to make this
 * logic more robust in the future.
 */
let isAsyncPromiseComplete = false

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const setCustomDimensions = async () => {
    if (isGaUndefined()) {
        return
    }

    /**
     * Ensure proper order of custom dimensions. The ones set asynchronously
     * just have placeholders for now.
     */
    ga('set', 'dimension1', 0)
    ga('set', 'dimension2', getDateTimeForGa(BUILD_DATE_TIME))
    ga('set', 'dimension3', BROWSER_NAME)
    ga('set', 'dimension4', BROWSER_VERSION)
    ga('set', 'dimension5', ENGINE_NAME)
    ga('set', 'dimension6', ENGINE_VERSION)
    ga('set', 'dimension7', OS_NAME)
    ga('set', 'dimension8', OS_VERSION)
    ga('set', 'dimension9', PLATFORM_TYPE)
    ga('set', 'dimension10', PLATFORM_VENDOR)
    ga('set', 'dimension11', IS_USER_AGENT_DESKTOP)
    ga('set', 'dimension12', IS_TOUCH_SUPPORTED)

    // Set asynchronous custom dimensions.
    const ip = await getPublicIp()
    ga('set', 'dimension1', ip)
    isAsyncPromiseComplete = true

    logServe(
        IS_PRODUCTION ?
            `Asynchronous promises complete for custom dimensions.` :
            `Public IP address is ${ip}.`,
        {
            action: 'ip',
            label: ip,
        }
    )
}

export const sendToGa = ({
    category,
    action,
    label,
    value,
    count = 0,

}) => {
    if (isGaUndefined()) {
        return 'failure'
    }

    /**
     * If after five seconds the promise hasn't completed, just go ahead and
     * send the GA event without the async custom dimensions.
     */
    if (!isAsyncPromiseComplete && count <= 50) {
        setTimeout(
            () => {
                sendToGa({
                    category,
                    action,
                    label,
                    value,
                    count: count + 1,
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
    if (isGaUndefined()) {
        logServe('GA did not initialise.')

    } else {
        logServe(
            IS_PRODUCTION ?
                'GA initialised with production id.' :
                `GA initialised with staging id ${GA_ACCOUNT__STAGING}.`,
            {
                action: 'ga',
            }
        )
    }
}
