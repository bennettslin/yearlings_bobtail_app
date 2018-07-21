// Helpers for DOM stuff.
import keys from 'lodash.keys'
import pickBy from 'lodash.pickby'

export const getPrefixPrependedClassNames = (entity, prefix) => {

    if (!entity) {
        return false;
    }

    const classNamesArray =
        typeof entity === 'object' ?
            keys(pickBy(entity)) : entity.split(' ')

    return classNamesArray.map(name => (
        `${prefix}__${name}`
    ))
}

export const getPrefixPrependedClassNamesForIndices = ({

    configs = [],
    configKey,
    prefix

}) => {

    /**
     * This method is pretty specific to units and unit cards...
     */
    const classNames = configs.map(config => {
        const { [configKey]: configIndex } = config

        return !isNaN(configIndex) ?
            `${prefix}${configIndex}` :
            null
    })

    // Include the prefix without an index.
    classNames.push(prefix)

    return classNames
}

export const getClientX = (e) => {
    const { nativeEvent } = e,
        { touches,
          clientX } = nativeEvent

    // If mouse, clientX is in native event. If touch, it's in first touch.
    return touches ? touches[0].clientX : clientX
}
