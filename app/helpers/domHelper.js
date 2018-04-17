// Helpers for DOM stuff.

export const getIsValidScrollingTargetCallback = (scrollParentClass) => {

    // Don't scroll any immovable parent containers.
    return (parent) => {
        const { className } = parent,
            isValidTarget =
                parent !== window
                && (
                    className
                    && new RegExp(
                            "(\\s|^)" + scrollParentClass + "(\\s|$)"
                        ).test(className)
                )

        return isValidTarget
    }
}

export const getPrefixPrependedClassNames = (classNames, prefix) => {

    if (!classNames) {
        return false;
    }

    const classNamesArray =
        Array.isArray(classNames) ?
        classNames : classNames.split(' ')

    return classNamesArray.map(name => (
        `${prefix}__${name}`
    ))
}

// Not used.
// export const hasParentWithTagName = (child, parentTagName = '') => {
//     let node = child
//     while (node !== null) {
//         if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
//             return true
//         }
//         node = node.parentNode
//     }
//     return false
// }
