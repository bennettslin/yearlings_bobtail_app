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

export const getComponentShouldUpdate = ({

    props,
    nextProps,
    updatingPropsArray

}) => {
    let counter = 0

    // Loop only until a mismatch is found.
    while (counter < updatingPropsArray.length) {
        const updatingKeyEntity = updatingPropsArray[counter]

        if (typeof updatingKeyEntity === 'string') {
            const updatingValueEntity = props[updatingKeyEntity],
                nextPropsValue = nextProps[updatingKeyEntity]

            // If object, compare first level of values.
            if (typeof updatingValueEntity === 'object') {
                return !getSetsAreSame(updatingValueEntity, nextPropsValue)

            } else {
                // Mismatch, so update!
                if (updatingValueEntity !== nextPropsValue) {
                    return true
                }
            }

        /**
         * If object, then compare mismatch only if a prop is true.
         */
        } else {
            const { staticProp,

                    // Default condition is true.
                    conditionalShouldBe = true,

                    subUpdatingKey } = updatingKeyEntity,

                // We care that a static prop happens to be a certain value.
                staticConditionalMet = staticProp &&
                    !!nextProps[staticProp] === conditionalShouldBe

            if (staticConditionalMet) {

                // Mismatch, so update!
                if (props[subUpdatingKey] !== nextProps[subUpdatingKey]) {
                    return true
                }
            }
        }

        counter++
    }

    // If loop ends with no mismatch, don't update.
    return false
}

export const getSetsAreSame = (smallerSet, largerSet) => {
    // Assume that larger set is superset of smaller set.

    // If either set is null, just return whether they are both null.
    if (smallerSet === null || largerSet === null) {
        return smallerSet === largerSet
    }

    return Object.keys(smallerSet).reduce((allSame, key) => {
        const valueIsSame = smallerSet[key] === largerSet[key] ||

            // Functions are exempt, as they constantly change through binding.
            typeof smallerSet[key] === 'function'

        // Keep for debugging purposes, for now.
        // if (!valueIsSame) {
        //     console.error('prop not same:', key, smallerSet[key], largerSet[key]);
        // }

        return allSame ? valueIsSame : allSame
    }, true)
}

export const getArrayOfLength = ({ length, indexBase = 0 }) => {
    return Array.from(
        { length },
        (nothing, i) => i + indexBase
    )
}

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

export const setNewValueInBitNumber = ({
    keysArray,
    keysCount,
    bitNumber = 0,
    updatedKey,
    newValue
}) => {
    // First convert the bit number to an object whose values true or false.
    const trueFalseObject = convertBitNumberToTrueFalseKeys({
            keysArray,
            keysCount,
            bitNumber
        })

    // Set the value in this object.
    trueFalseObject[updatedKey] = newValue

    // Convert object to new bit number, which is then returned.
    return convertTrueFalseKeysToBitNumber({
        keysArray,
        trueFalseObject
    })
}
