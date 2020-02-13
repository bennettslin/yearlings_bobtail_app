let isGaTrackerCreated = false

const _canGaSendEvent = () => {
    // Not sure why isUndefined util doesn't work?
    if (typeof ga === 'undefined') {
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
    label,
    value

}) => {
    if (_canGaSendEvent()) {
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            ...label && { eventLabel: label },
            ...value && { eventValue: value }
        })
    }
}

global.sendEvent = sendEvent

export default sendEvent
