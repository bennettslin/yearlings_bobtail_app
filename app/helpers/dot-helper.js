// Check if at least one present key is an active key.
export const intersects = (presentKeys = {}, activeKeys = {}) => {

    // FIXME: Show all dots while annotations are still being written.
    return true

    return Object.keys(presentKeys).reduce((intersects, presentKey) => {
        return intersects || activeKeys[presentKey]
    }, false)
}

// Return an object that only contains keys that are both present and active.
export const getIntersection = (presentKeys, activeKeys) => {

    // FIXME: Show all dots while annotations are still being written.
    return presentKeys

    const intersectionArray = Object.keys(presentKeys).filter(presentKey => {
            return activeKeys[presentKey]
        }),
        intersectionObject = {}

    intersectionArray.forEach(key => {
        intersectionObject[key] = true
    })

    return intersectionObject
}
