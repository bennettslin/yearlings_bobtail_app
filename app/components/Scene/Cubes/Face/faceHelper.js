import { getCharStringForNumber } from 'helpers/formatHelper'

import {
    CUBE_X_AXIS_LENGTH
} from '../cubeIndexConstants'

import {
    LEFT,
    RIGHT
} from 'components/Scene/sceneConstants'

const midXIndex = CUBE_X_AXIS_LENGTH / 2

export const getSideDirection = ({
    xIndex,
    slantDirection
}) => {

    // If slanted, then not applicable.
    if (slantDirection) {
        return ''

    } else {
        return xIndex < midXIndex ?
            LEFT : RIGHT
    }
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
        getCharStringForNumber(xIndex)
    }${
        yIndex
    }`
}
