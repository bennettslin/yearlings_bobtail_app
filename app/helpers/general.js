// Basic helpers that only know math and pure JavaScript.

export const getPropsAreShallowEqual = ({
    props = {},
    nextProps = {}
}) => {
    for (const key in props) {

        const typeOfProp = typeof props[key]

        // Exclude functions, objects, and arrays.
        if (typeOfProp !== 'function' && typeOfProp !== 'object') {

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
) => (
    Array.from(
        { length },
        (nothing, i) => i + indexBase
    )
)

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
