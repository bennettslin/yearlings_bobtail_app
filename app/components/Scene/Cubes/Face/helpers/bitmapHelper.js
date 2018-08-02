import { getArrayOfLength } from '../../../../../helpers/generalHelper'

import { CUBE_Z_AXIS_LENGTH } from '../../cubeIndexConstants'
import { TILE } from '../../../sceneConstants'

const MATRIX_LENGTH = 8,
    MATRIX_INDICES_ARRAY = getArrayOfLength(MATRIX_LENGTH),
    COORDINATES_ARRAY = getArrayOfLength(MATRIX_LENGTH + 1)

export const getBitmapMatrix = ({

    face,
    polygonPoints

}) => {
    const

        // This serves as the origin reference point.
        topLeft = polygonPoints[0],

        // Name other corners as well for clarity.
        topRight = polygonPoints[1],
        bottomRight = polygonPoints[2],
        bottomLeft = polygonPoints[3],

        /**
         * Face tiles do not pass a relative zIndex, since their height is
         * always static, not dynamic.
         */
        isTileFace = face === TILE,

        /**
         * Determine the number of pixels that make up the height. If it's a
         * tile face, this value is constant. If it's a front or side face,
         * then this value is determined by the maximum face height.
         */
        matrixHeight = isTileFace ?
            MATRIX_LENGTH :

            /**
             * When relative zIndex is 2, the face is close enough to a square.
             * It's not exact, but this is fine for now.
             */
            MATRIX_LENGTH * (CUBE_Z_AXIS_LENGTH / 2),

        coordinatesHeightArray = isTileFace ?
            COORDINATES_ARRAY :
            getArrayOfLength(Math.ceil(matrixHeight) + 1),

        leftmostXIncrement = (bottomLeft.x - topLeft.x) / matrixHeight,
        leftmostYIncrement = (bottomLeft.y - topLeft.y) / matrixHeight,
        rightmostXIncrement = (bottomRight.x - topRight.x) / matrixHeight,
        rightmostYIncrement = (bottomRight.y - topRight.y) / matrixHeight,

        // Establish side points.
        outermostPoints = coordinatesHeightArray.map(yIndex => {

            // Allow pixels in the last row to be incomplete squares.
            if (yIndex === coordinatesHeightArray.length - 1) {
                return {

                    /**
                     * Go from bottom to top.
                     */
                    leftmost: topLeft,
                    rightmost: topRight
                }

            } else {

                const startLeftPoint = bottomLeft,
                    startRightPoint = bottomRight,
                    multiplier = -yIndex

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

        bitmapHeightArray = isTileFace ?
            MATRIX_INDICES_ARRAY :
            getArrayOfLength(Math.ceil(matrixHeight))

    return bitmapHeightArray.map(yIndex => (
        MATRIX_INDICES_ARRAY.map(xIndex => {

            const polygonPoints = [
                coordinatesMatrix[yIndex][xIndex],
                coordinatesMatrix[yIndex][xIndex + 1],
                coordinatesMatrix[yIndex + 1][xIndex + 1],
                coordinatesMatrix[yIndex + 1][xIndex]
            ]

            return {
                polygonPoints
            }
        })
    ))
}
