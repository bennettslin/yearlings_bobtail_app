import { getCharStringForNumber } from '../../../helpers/formatHelper'

export const getChildClassNameForCubeLogic = ({
    level,
    xIndex,
    yIndex
}) => {

    // "Child cube levelIndex, xIndex, yIndex."
    return `K${
        level[0]
    }${
        getCharStringForNumber(xIndex)
    }${
        yIndex
    }`
}
