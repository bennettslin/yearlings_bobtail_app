import { getCharStringForNumber } from 'helpers/format'

export const getChildClassNameForCubeLogic = ({
    level,
    xIndex,
    yIndex
}) => {

    // "Child cube levelIndex, xIndex, yIndex."
    return `K${
        level[0]
    }${
        yIndex
    }${
        getCharStringForNumber(xIndex)
    }`
}

export const getChildClassNameForFaceLogic = ({
    level,
    face,
    xIndex,
    yIndex
}) => {

    // "Child face levelIndex, faceIndex, xIndex, yIndex."
    return `F${
        level[0]
    }${
        face[0].toUpperCase()
    }${
        yIndex
    }${
        getCharStringForNumber(xIndex)
    }`
}
