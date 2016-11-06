// Basic helpers that only know DOM elements and JavaScript objects.
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

let indexKeyIndex

/**
 * Add index key index if specified. So far, this method is only ever used with
 * adding index key index specified.
 */
export const findKeyInObject = (key, object, indexKey, reset = true) => {
    if (indexKey && reset) {
        indexKeyIndex = 1
        reset = false
    }

    if (!object) {
        return false
    } else if (Array.isArray(object)) {
        return object.reduce((keyFound, element) => {
            if (indexKey) {
                return findKeyInObject(key, element, indexKey, reset) || keyFound
            } else {
                return keyFound || findKeyInObject(key, element, indexKey, reset)
            }
        }, false)
    } else if (typeof object === 'object') {
        return Object.keys(object).reduce((keyFound, currentKey) => {
            if (indexKey && !object[indexKey] && typeof object[key] === 'string') {
                object[indexKey] = indexKeyIndex
                indexKeyIndex++
            }

            return keyFound || !!object[key] || findKeyInObject(key, object[currentKey], indexKey, reset)
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
