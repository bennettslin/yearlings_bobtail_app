const sendEvent = ({
    category = 'category',
    action = 'action',
    label = 'label'

}) => {
    if (typeof ga === 'undefined') {
        return
    }

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

global.sendEvent = sendEvent

export default sendEvent
