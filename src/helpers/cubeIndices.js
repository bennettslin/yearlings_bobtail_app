import { CUBE_X_AXIS_LENGTH } from '../constants/cubeIndex'

export const getNearestXIndex = xPosition => {
    let xIndex

    /**
     * Get the index and offset from the float.
     */
    if (xPosition < 0) {
        xIndex = 0

    } else if (xPosition > CUBE_X_AXIS_LENGTH - 1) {
        xIndex = CUBE_X_AXIS_LENGTH - 1

    } else {
        xIndex = Math.round(xPosition)
    }

    return xIndex
}

export const getValidYIndex = (yIndex) => {
    /**
     * Things have an extra -1 yIndex to allow them to be behind the 0 yIndex
     * cubes. For positioning and sizing, however, they will be calculated as
     * if they are 0 yIndex.
     */
    return yIndex === -1 ? 0 : yIndex
}

export const getValueInAbridgedMatrix = (matrix, yIndex, xIndex) => {
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
