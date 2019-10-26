import isUndefined from 'lodash/isundefined'

let isGaTrackerCreated = false

const canGaSendEvent = () => {

    if (isUndefined(ga)) {
        return false
    }

    if (!isGaTrackerCreated) {
        ga('create', 'UA-133481555-1', 'auto')
        isGaTrackerCreated = true
    }

    return true
}

const sendEvent = ({
    category = 'category',
    action = 'action',
    label = 'label'

}) => {
    if (canGaSendEvent()) {
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label
        })

        logAnalytics({
            category,
            action,
            label
        })
    }
}

global.sendEvent = sendEvent

export default sendEvent
