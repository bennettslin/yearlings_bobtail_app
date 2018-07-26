import {
    SPACE,
    ENTER,
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY
} from '../constants/access'

export const getKeyName = (e) => {
    // Do not handle at all if any modifier keys are present.
    if (
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
    ) {
        return ''
    }

    let keyName = e.key

    // Workaround for Safari, which doesn't recognise key on event.
    if (keyName === 'Unidentified') {
        keyName = String.fromCharCode(e.keyCode)

    // Make literal space a word instead.""
    } else if (keyName === ' ') {
        keyName = SPACE
    }

    // Ensure that all single character key names are lowercase.
    if (keyName.length === 1) {
        keyName = keyName.toLowerCase()
    }

    return keyName
}

export const getIsNavKey = (keyName) => {
    return (
        keyName.indexOf('Arrow') > -1 ||
        keyName === AUDIO_REWIND_KEY ||
        keyName === AUDIO_FAST_FORWARD_KEY ||
        keyName === ENTER
    )
}
