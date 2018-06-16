import { getArrayOfLength } from '../../../../helpers/generalHelper'

const MATRIX_LENGTH = 8,
    MATRIX_INDICES_ARRAY = getArrayOfLength({ length: MATRIX_LENGTH }),
    COORDINATES_ARRAY = getArrayOfLength({ length: MATRIX_LENGTH + 1 })

export const getBitmapMatrixForFace = ({

    bitmap,
    polygonPoints,
    maxFaceHeight,
    isFloor

}) => {
    const

        // This serves as the origin reference point.
        topLeft = polygonPoints[0],

        // Name other corners as well for clarity.
        topRight = polygonPoints[1],
        bottomRight = polygonPoints[2],
        bottomLeft = polygonPoints[3],

        // Determine dynamic height of front and side faces.
        isStaticHeight = isNaN(maxFaceHeight),

        /**
         * Determine the number of pixels that make up the height. If it's a
         * tile face, this value is constant. If it's a front or side face,
         * then this value is determined by the maximum face height.
         */
        matrixHeightLength = isStaticHeight ?
            MATRIX_LENGTH :

            /**
             * When maximum face height is 3, face is close enough to a square.
             * It's not exact, but this is fine for now.
             */
            MATRIX_LENGTH * (maxFaceHeight / 3),

        // Establish values to increment side points.
        leftmostXIncrement = (bottomLeft.x - topLeft.x) / matrixHeightLength,
        leftmostYIncrement = (bottomLeft.y - topLeft.y) / matrixHeightLength,
        rightmostXIncrement = (bottomRight.x - topRight.x) / matrixHeightLength,
        rightmostYIncrement = (bottomRight.y - topRight.y) / matrixHeightLength,

        coordinatesHeightArray = isStaticHeight ?
            COORDINATES_ARRAY :
            getArrayOfLength({ length: Math.ceil(matrixHeightLength) + 1 }),

        // Establish side points.
        outermostPoints = coordinatesHeightArray.map(yIndex => {

            // Allow pixels in the last row to be incomplete squares.
            if (yIndex === coordinatesHeightArray.length - 1) {
                return {

                    /**
                     * Floor cubes go from top to bottom, ceiling cubes go from
                     * bottom to top.
                     */
                    leftmost: isFloor ? bottomLeft : topLeft,
                    rightmost: isFloor ? bottomRight : topRight
                }

            } else {

                // Again, floor and ceiling cubes go in reverse directions.
                const startLeftPoint = isFloor ? topLeft : bottomLeft,
                    startRightPoint = isFloor ? topRight : bottomRight,
                    multiplier = isFloor ? yIndex : -yIndex

                return {
                    leftmost: {
                        x: startLeftPoint.x + multiplier * leftmostXIncrement,
                        y: startLeftPoint.y + multiplier * leftmostYIncrement
                    },
                    rightmost: {
                        x: startRightPoint.x + multiplier * rightmostXIncrement,
                        y: startRightPoint.y + multiplier * rightmostYIncrement
                    }
                }
            }
        }),

        // Create matrix of all points.
        coordinatesMatrix = coordinatesHeightArray.map(yIndex => {

            // Name left point and right points for clarity.
            const
                leftPoint = outermostPoints[yIndex].leftmost,
                rightPoint = outermostPoints[yIndex].rightmost,

                xIncrement = (rightPoint.x - leftPoint.x) / MATRIX_LENGTH,
                yIncrement = (rightPoint.y - leftPoint.y) / MATRIX_LENGTH

            return COORDINATES_ARRAY.map(xIndex => ({
                /**
                 * Since these values are relative to the origin, we'll add the
                 * origin back here.
                 */
                x: leftPoint.x + xIndex * xIncrement,
                y: leftPoint.y + xIndex * yIncrement
            }))
        }),

        bitmapHeightArray = isStaticHeight ?
            MATRIX_INDICES_ARRAY :
            getArrayOfLength({ length: Math.ceil(matrixHeightLength) })

    return bitmapHeightArray.map(yIndex => (
        MATRIX_INDICES_ARRAY.map(xIndex => {

            // Ceilings will fill pixels from bottom up.
            const moduloYIndex = isFloor ?
                    yIndex % MATRIX_LENGTH :
                    MATRIX_LENGTH - yIndex % MATRIX_LENGTH - 1,

                fill = bitmap.pixels[moduloYIndex][xIndex]

            if (fill === null) {
                // This pixel location will just show the base colour.
                return null
            }

            const polygonPoints = [
                coordinatesMatrix[yIndex][xIndex],
                coordinatesMatrix[yIndex][xIndex + 1],
                coordinatesMatrix[yIndex + 1][xIndex + 1],
                coordinatesMatrix[yIndex + 1][xIndex]
            ]

            return {
                fill,
                polygonPoints
            }
        })
    ))
}
