// Methods to switch between a bit number and a true false object.
import { getArrayOfLength } from './general-helper'

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

export const convertTrueFalseKeysToBitNumber = ({
    keysArray,
    trueFalseObject
}) => {

    // If no keys array is given, assume 1-based indices.
    keysArray = keysArray || getArrayOfLength({
        length: Object.keys(trueFalseObject).length,
        indexBase: 1
    })

    /**
     * Allow storage helper to store object as a single number. Order of keys
     * is established through keys array.
     */
    return keysArray.reduce((bitNumber, key, index) => {
        if (trueFalseObject[key]) {
            bitNumber += getTwoToThePowerOfN(index)
        }
        return bitNumber
    }, 0)
}

export const convertBitNumberToTrueFalseKeys = ({
    keysArray,
    keysCount = 0,
    bitNumber
}) => {

    /**
     * If no keys array is given, assume 1-based indices. In this case, keys
     * count *must* be passed.
     */
    keysArray = keysArray || getArrayOfLength({
        length: keysCount,
        indexBase: 1
    })

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

export const getValueInBitNumber = ({
    keysArray,
    keysCount,
    bitNumber = 0,
    key
}) => {
    // Convert the bit number to an object whose values are true or false.
    const trueFalseObject = convertBitNumberToTrueFalseKeys({
            keysArray,
            keysCount,
            bitNumber
        })

    return trueFalseObject[key]
}

export const setNewValueInBitNumber = ({
    keysArray,
    keysCount,
    bitNumber = 0,
    key,
    value
}) => {
    // First convert the bit number to an object whose values true or false.
    const trueFalseObject = convertBitNumberToTrueFalseKeys({
            keysArray,
            keysCount,
            bitNumber
        })

    // Set the value in this object.
    trueFalseObject[key] = value

    // Convert object to new bit number, which is then returned.
    return convertTrueFalseKeysToBitNumber({
        keysArray,
        trueFalseObject
    })
}
