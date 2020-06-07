// Methods to switch between a bit number and a true false object.

import { getArrayOfLength } from './general'

export const getTwoToThePowerOfN = (exponent, number = 2) => {
    /**
     * Call this method with just the exponent argument. The number argument is
     * only passed recursively.
     */

    if (exponent === 0) {
        return 1

    } else if (exponent === 1) {
        return number
    }

    return getTwoToThePowerOfN(exponent - 1, number * 2)
}

export const getBitFromObject = ({
    keysList,
    trueFalseObject
}) => {

    // If no keys array is given, assume 1-based indices.
    keysList = keysList || getArrayOfLength(
        Object.keys(trueFalseObject).length,
        1
    )

    /**
     * Allow storage helper to store object as a single number. Order of keys
     * is established through keys array.
     */
    return keysList.reduce((bit, key, index) => {
        if (trueFalseObject[key]) {
            bit += getTwoToThePowerOfN(index)
        }
        return bit
    }, 0)
}

export const getObjectFromBit = ({
    keysList,
    keysCount = 0,
    bit
}) => {

    /**
     * If no keys array is given, assume 1-based indices. In this case, keys
     * count *must* be passed.
     */
    keysList = keysList || getArrayOfLength(keysCount, 1)

    let trueFalseObject = {},
        returnObject = {}

    for (let index = keysList.length - 1; index >= 0; index--) {
        // Start from end.
        const key = keysList[index],
            powerNumber = getTwoToThePowerOfN(index),
            isTrue = bit >= powerNumber

        trueFalseObject[key] = isTrue

        if (isTrue) {
            bit -= powerNumber
        }
    }

    // Ensure that the keys are in the original order.
    keysList.forEach(key => {
        returnObject[key] = trueFalseObject[key]
    })

    return returnObject
}
