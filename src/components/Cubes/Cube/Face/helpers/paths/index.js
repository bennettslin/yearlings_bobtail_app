import { getFacePaths } from '../../../../../../endpoint/builds'

export const getSvgDataPathForFace = ({
    slantDirection,
    level,
    yIndex,
    xIndex,
    zIndex,
    face,
}) => (
    getFacePaths()[slantDirection][level][yIndex][xIndex][zIndex][face]
)
