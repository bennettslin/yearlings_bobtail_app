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
