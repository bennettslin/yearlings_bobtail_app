import { getAnnotation } from './album-view-helper'

// Check if at least one present key is selected.
export const intersects = (presentKeys = {}, selectedKeys = {}) => {

    const presentKeysArray = Object.keys(presentKeys)

    // If presentKeys is empty, return true.
    if (presentKeysArray.length === 0) {
        return true

    } else {
        return presentKeysArray.reduce((intersects, presentKey) => {
            return intersects || selectedKeys[presentKey]
        }, false)
    }
}

// Return an object that only contains keys that are both present and selected.
export const getIntersection = (presentKeys = {}, selectedKeys = {}) => {

    const intersectionArray = Object.keys(presentKeys).filter(presentKey => {
            return selectedKeys[presentKey]
        }),
        intersectionObject = {}

    intersectionArray.forEach(key => {
        intersectionObject[key] = true
    })

    return intersectionObject
}

export const allDotsDeselected = (props, dotKey) => {
    const { selectedDotKeys } = props,
        annotation = getAnnotation(props),
        shownDotKeys = annotation ? annotation.dotKeys : null,

        // The dotKey being deselected is still selected at this stage.
        postSelectedDotKeys = Object.assign(selectedDotKeys, { [dotKey]: false })

    return annotation && !intersects(shownDotKeys, postSelectedDotKeys)
}
