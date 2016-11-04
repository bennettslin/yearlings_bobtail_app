// Basic helpers that only know DOM elements and JavaScript objects.
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

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

export const scrollElementIntoView = (className, index, duration = 100) => {
        const selector = `${className}-${index}`,
            element = document.getElementsByClassName(selector)[0]

        if (element) {
            scrollIntoViewIfNeeded(element, false, {
                duration
            })
        }
}
