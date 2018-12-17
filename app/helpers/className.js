import { getCharStringForNumber } from 'helpers/format'
import { Z_INDICES_MATRIX_NAME } from 'constants/scene'

export const getParentClassNameForScene = ({
    matrixName,
    level,
    xIndex,
    yIndex,
    value
}) => {

    let formattedValue = value

    if (matrixName === Z_INDICES_MATRIX_NAME) {
        // Allow zIndex to be appended dynamically by FacePathsStylesheet.
        formattedValue = !isNaN(value) ? getCharStringForNumber(value) : ''
    }

    /**
     * "MatrixInitial, levelIndex, yIndex, xIndex, value."
     */
    return `${
        matrixName[0].toUpperCase()
    }${
        level[0]
    }${
        yIndex
    }${
        getCharStringForNumber(xIndex)
    }${
        formattedValue
    }`
}
