// Basic helpers that only know DOM elements and JavaScript objects.

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

export const getPropsAreSame = (oldProps, newProps) => {
    // Assume that old props and new props have the same keys.

    return Object.keys(oldProps).reduce((allSame, key) => {
        const propIsSame = oldProps[key] === newProps[key] ||

            // Functions are exempt, as they constantly change through binding.
            typeof oldProps[key] === 'function'

        // Keep for debugging purposes, for now.
        // if (!propIsSame) {
        //     console.error('prop not same:', key, oldProps[key], newProps[key]);
        // }

        return allSame ? propIsSame : allSame
    }, true)
}


export const getIntegerForCharKey = (keyName) => {
    if (keyName.length > 1) {
        return -1
    }

    const charCode = keyName.charCodeAt(0)

    // Char codes for numbers are 48 to 57.
    if (charCode >= 48 && charCode <= 57) {
        return charCode - 48

    // Char codes for lowercase are 97 to 122.
    } else if (charCode >= 97 && charCode <= 122) {
        return charCode - 87

    } else {
        return -1
    }
}
