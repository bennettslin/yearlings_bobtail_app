// Basic helpers that only know math and pure JavaScript.

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_flatten
export const flatten = array => (
    [].concat(...array)
)

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isString
export const isString = (string) => (
    string && typeof string.valueOf() === "string"
)

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_pickby
export const pickBy = object => {
    const newObject = {}
    for (const key in object) {
        if (object[key]) {
            newObject[key] = object[key]
        }
    }
    return newObject
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

// TODO: Get rid of this. Just used by Button now.
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

export const getValidYIndex = (yIndex) => {
    /**
     * Things have an extra -1 yIndex to allow them to be behind the 0 yIndex
     * cubes. For positioning and sizing, however, they will be calculated as
     * if they are 0 yIndex.
     */
    return yIndex === -1 ? 0 : yIndex
}

export const getValueInAbridgedMatrix = ({
    matrix,
    xIndex,
    yIndex
}) => {
    // Assume that matrix is an array of arrays.

    const
        validYIndex = getValidYIndex(yIndex),

        // Use previous row array if no row array for this y-index.
        rowArray = matrix.length > validYIndex ?
            matrix[validYIndex] :
            matrix[matrix.length - 1],

        // Use previous entry if no entry for this x-index.
        value = rowArray.length > xIndex ?
            rowArray[xIndex] :
            rowArray[rowArray.length - 1]

    return value
}
