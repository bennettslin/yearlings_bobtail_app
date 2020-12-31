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
    maxCount = Number.MAX_SAFE_INTEGER,
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
            position,
            index:
                reversePosition ?
                    // If reverse position, begin from -1 and decrement.
                    arrayOfLengths.length * -1 - 1 :
                    arrayOfLengths.length,
        })
    }

    return arrayOfLengths
}
