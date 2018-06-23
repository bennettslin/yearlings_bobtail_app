// Helpers for DOM stuff.
import keys from 'lodash.keys'
import pickBy from 'lodash.pickby'

export const getPrefixPrependedClassNames = (classNames, prefix) => {

    if (!classNames) {
        return false;
    }

    const classNamesArray =
        typeof classNames === 'object' ?
            keys(pickBy(classNames)) : classNames.split(' ')

    return classNamesArray.map(name => (
        `${prefix}__${name}`
    ))
}

export const getClientX = (e) => {
    const { nativeEvent } = e,
        { touches,
          clientX } = nativeEvent

    // If mouse, clientX is in native event. If touch, it's in first touch.
    return touches ? touches[0].clientX : clientX
}
