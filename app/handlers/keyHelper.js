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
        keyName === ENTER
    )
}

export const getShouldHandleOnKeyDown = (keyName) => {
    const isNavKey = getIsNavKey(keyName)

    return (
        // By default, nav keys are handled on key down, non-nav on key up...
        isNavKey ||

        // But these are not nav keys, and they are handled on key down...
        keyName === AUDIO_REWIND_KEY ||
        keyName === AUDIO_FAST_FORWARD_KEY

    // And this is a nav key, but it's handled on key up.
    ) && keyName !== ENTER
}
