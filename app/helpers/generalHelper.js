// Basic helpers that only know math and pure JavaScript.

const getPower = (base, exponent) => {
    if (exponent === 0) {
        return 1
    } else {
        return base * getPower(base, exponent - 1)
    }
}

export const getExponentFactorialSum = (base, exponent) => {
    let sum = 0

    while (exponent > -1) {
        sum += getPower(base, exponent)
        exponent--
    }

    return sum
}

export const getArrayOfIncreasingSums = (base, exponent, constant) => {
    const arrayOfIncreasingSums = [0]

    let mutableExponent = exponent,
        currentSum = 0

    while (mutableExponent > -1) {
        const currentPower = getPower(base, mutableExponent) * constant

        currentSum += currentPower

        arrayOfIncreasingSums.push(currentSum)

        mutableExponent--
    }

    return arrayOfIncreasingSums
}

export const roundPercentage = (rawPercentage) => {
    return Math.round(rawPercentage * 100) / 100
}

export const getPropsAreShallowEqual = ({
    props = {},
    nextProps = {},

    // This is an object of keys to never check.
    alwaysBypassCheck = {},

    // This is an object of keys to be checked...
    checkIsShallowEqual = {},

    // ... only if this conditional is true.
    onlyOnCondition
}) => {
    for (const key in props) {

        // Do check if...
        const doCheck =

            // ... it's not being bypassed, and...
            !alwaysBypassCheck[key] && (

                // ... if this isn't a key affected by the conditional, or...
                !checkIsShallowEqual[key] ||

                // ... if it is, and the conditional has been met.
                (checkIsShallowEqual[key] && onlyOnCondition)
            ),

            type = typeof props[key]

        // Exclude functions, objects, and arrays.
        if (doCheck && type !== 'function' && type !== 'object') {

            // If there is a single mismatch, return false.
            if (props[key] !== nextProps[key]) {
                return false
            }
        }
    }
    return true
}

export const getArrayOfLength = (

    length,
    indexBase = 0

) => {
    return Array.from(
        { length },
        (nothing, i) => i + indexBase
    )
}

export const getArrayOfCoordinatesForFactoredLengths = ({
    minLength,
    firstLength,
    multiplyFactor = 1,

    bunchFactor = 1,

    // The ratio of the *previous* length that gets overlapped.
    overlapRatio = 0,

    // Add this constant to each position.
    positionOffset = 0,

    // Position assumes start from right and go to left.
    reversePosition = false,

    // Array count should not exceed this value.
    maxCount = Number.MAX_SAFE_INTEGER
}) => {
    /**
     * Get an array of lengths where each subsequent length is a multiple of the
     * previous one by the given factor. The total number of these lengths is the minimum needed for their sum to exceed the given minimum length.
     */

    const arrayOfLengths = []
    let totalLength = 0

    while (
        minLength &&
        totalLength < minLength &&
        arrayOfLengths.length < maxCount
    ) {

        // Current position is total length as of previous length.
        let position = totalLength,

            currentLength

        // If this is the first length, just set to given first length.
        if (!arrayOfLengths.length) {
            currentLength = firstLength

        } else {
            /**
             * Get the current length by multiplying the previous one by the
             * specified factor.
             */
            currentLength =
                arrayOfLengths[arrayOfLengths.length - 1].length * multiplyFactor
        }

        // Ensure that overlapped areas are included right up to the end.
        totalLength += (
            currentLength
            * (1 - overlapRatio)
            * Math.pow(bunchFactor, arrayOfLengths.length - 1)
        )

        if (reversePosition) {
            position = minLength - currentLength - position

        } else {
            position += positionOffset
        }

        arrayOfLengths.push({
            length: currentLength,
            position
        })
    }

    return reversePosition ? arrayOfLengths.reverse() : arrayOfLengths
}

export const getValueInAbridgedMatrix = (matrix, xIndex, yIndex) => {
    // Assume that matrix is an array of arrays.

    const
        // Use previous row array if no row array for this y-index.
        rowArray = matrix.length > yIndex ?
            matrix[yIndex] :
            matrix[matrix.length - 1],

        // Use previous entry if no entry for this x-index.
        value = rowArray.length > xIndex ?
            rowArray[xIndex] :
            rowArray[rowArray.length - 1]

    return value
}
