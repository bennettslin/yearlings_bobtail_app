import {
    SPACE,
    ENTER,
    ARROW_UP,
    ARROW_DOWN,
    META_ARROW_UP,
    META_ARROW_DOWN,
    COMMAND,
    CONTROL,
} from '../../constants/access'

const _getIsNavKey = keyName => (
    keyName.includes('Arrow') && !keyName.includes('Meta')
)

export const getKeyName = e => {
    let keyName = e.key

    if (
        keyName === 'Alt' ||
        keyName === 'Shift' ||
        keyName === COMMAND ||
        keyName === CONTROL
    ) {
        return ''
    }

    // Make literal space a word instead.
    if (keyName === ' ') {
        keyName = SPACE
    }

    // Ensure that all single character key names are lowercase.
    if (keyName.length === 1) {
        keyName = keyName.toLowerCase()
    }

    // Handle keys with modifiers.
    if (e.metaKey) {
        if (keyName === ARROW_UP || keyName === ARROW_DOWN) {
            keyName = `Meta${keyName}`
        }
    }

    return keyName
}

export const getIsNavKeyOrEnter = keyName => {
    return _getIsNavKey(keyName) || keyName === ENTER
}

export const getShouldHandleOnKeyDown = keyName => {
    const isNavKey = _getIsNavKey(keyName)

    return (
        // By default, nav keys are handled on key down, non-nav on key up...
        isNavKey ||

        // Volume keys can only be handled on key down.
        keyName === META_ARROW_UP ||
        keyName === META_ARROW_DOWN ||

        // This is here just to prevent default.
        keyName === SPACE
    )
}
