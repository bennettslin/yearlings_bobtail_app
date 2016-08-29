// Check if at least one present key is an active key.
export const intersects = (presentKeys = {}, activeKeys = {}) => {
    return Object.keys(presentKeys).reduce((intersects, presentKey) => {
        return intersects || activeKeys[presentKey]
    }, false)
}

// Return an object that only contains keys that are both present and active.
export const getIntersection = (presentKeys, activeKeys) => {
    const intersectionArray = Object.keys(presentKeys).filter(presentKey => {
            return activeKeys[presentKey]
        }),
        intersectionObject = {}

    intersectionArray.forEach(key => {
        intersectionObject[key] = true
    })

    return intersectionObject
}
