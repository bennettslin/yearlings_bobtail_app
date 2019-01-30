const sendEvent = ({
    category = 'category',
    action = 'action',
    label = 'label'

}) => {
    if (ga) {
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
