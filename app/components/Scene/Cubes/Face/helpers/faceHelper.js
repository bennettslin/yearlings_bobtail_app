import { getCharStringForNumber } from '../../../../../helpers/formatHelper'

import {
    CEILING,
    FLOOR
} from '../../../constants'

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
