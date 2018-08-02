import { getCharStringForNumber } from '../../../../../helpers/formatHelper'

import {
    CEILING,
    FLOOR,
    TILE
} from '../../../sceneConstants'

export const getChildClassNameForFaceLogic = ({
    face,
    isFloor,
    xIndex,
    yIndex
}) => {

    // "Child face levelIndex, faceIndex, xIndex, yIndex."
    return `F${
        isFloor ? FLOOR[0] : CEILING[0]
    }${
        face[0].toUpperCase()
    }${
        getCharStringForNumber(xIndex)
    }${
        yIndex
    }`
}

export const getChildClassNameForPixelLogic = ({
    face,
    pixelXIndex,
    pixelYIndex,
    bitmapZIndex
}) => {

    // "Child pixel faceIndex, xIndex, yIndex, bitmapZIndex."
    return `Px${
        face[0].toUpperCase()
    }${
        pixelXIndex
    }${
        pixelYIndex
    }${
        face === TILE ?
        '' :
        getCharStringForNumber(bitmapZIndex * 2)
    }`
}
