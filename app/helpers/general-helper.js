// Basic helpers that only know DOM elements and JavaScript objects.

export const findKeyInObject = (key, object) => {
    if (!object) {
        return false
    } else if (Array.isArray(object)) {
        return object.reduce((keyFound, element) => {
            return keyFound || findKeyInObject(key, element)
        }, false)
    } else if (typeof object === 'object') {
        return Object.keys(object).reduce((keyFound, currentKey) => {
            return keyFound || !!object[key] || findKeyInObject(key, object[currentKey])
        }, false)
    } else {
        return false
    }
}

export const hasParentWithTagName = (child, parentTagName = '') => {
     let node = child
     while (node !== null) {
         if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
             return true
         }
         node = node.parentNode
     }
     return false
}
