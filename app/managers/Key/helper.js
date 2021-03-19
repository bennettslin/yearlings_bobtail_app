import {
    SPACE,
    ENTER,
    PREVIOUS_VERSE_KEY,
    NEXT_VERSE_KEY,
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY,
} from '../../constants/access'

export const getKeyName = e => {
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

const _getIsNavKey = keyName => (
    keyName.includes('Arrow')
)

export const getIsNavKeyOrEnter = keyName => {
    return _getIsNavKey(keyName) || keyName === ENTER
}

export const getShouldHandleOnKeyDown = keyName => {
    const isNavKey = _getIsNavKey(keyName)

    return (
        // By default, nav keys are handled on key down, non-nav on key up...
        isNavKey ||

        // But these are not nav keys, and they are handled on key down.
        keyName === PREVIOUS_VERSE_KEY ||
        keyName === NEXT_VERSE_KEY ||
        keyName === PREVIOUS_SCENE_KEY ||
        keyName === NEXT_SCENE_KEY ||

        // This is here just to prevent default.
        keyName === SPACE
    )
}
