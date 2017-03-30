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

export const getPropsAreSame = (smallerSet, largerSet) => {
    // Assume that larger set has the same keys as smaller set.

    return Object.keys(smallerSet).reduce((allSame, key) => {
        const propIsSame = smallerSet[key] === largerSet[key] ||

            // Functions are exempt, as they constantly change through binding.
            typeof smallerSet[key] === 'function'

        // Keep for debugging purposes, for now.
        // if (!propIsSame) {
        //     console.error('prop not same:', key, smallerSet[key], largerSet[key]);
        // }

        return allSame ? propIsSame : allSame
    }, true)
}

export const getTwoToThePowerOfN = (exponent, number = 2) => {
    if (exponent === 0) {
        return 1

    } else if (exponent === 1) {
        return number
    }

    return getTwoToThePowerOfN(exponent - 1, number * 2)
}

export const convertTrueFalseKeysToBitNumber = (keysArray, trueFalseObject) => {
    // Allow session helper to store selectedDotKeys as a single number.

    return keysArray.reduce((bitNumber, key, index) => {
        if (trueFalseObject[key]) {
            bitNumber += getTwoToThePowerOfN(index)
        }
        return bitNumber
    }, 0)
}

export const convertBitNumberToTrueFalseKeys = (keysArray, bitNumber) => {
    let trueFalseObject = {}

    for (let index = keysArray.length - 1; index >= 0; index--) {
        // Start from end.
        const key = keysArray[index],
        powerNumber = getTwoToThePowerOfN(index),
        isTrue = bitNumber >= powerNumber

        trueFalseObject[key] = isTrue

        if (isTrue) {
            bitNumber -= powerNumber
        }
    }
    return trueFalseObject
}
