import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_X_AXIS_LENGTH
} from '../constants/stage'

export const getSceneRenderObject = () => {
    // This returns the initial render object.

    const initialRenderSceneObject = {
        all: false
    }

    for (let columnIndex = 0; columnIndex < CUBE_Y_AXIS_LENGTH; columnIndex++) {
        initialRenderSceneObject[columnIndex] = {}

        for (let rowIndex = 0; rowIndex < CUBE_X_AXIS_LENGTH; rowIndex++) {
            initialRenderSceneObject[columnIndex][rowIndex] = false
        }
    }

    return initialRenderSceneObject
}

export const setSceneRenderObject = ({
    xIndex,
    yIndex,
    renderObject
}) => {
    if (isNaN(xIndex) || isNaN(yIndex)) {
        // Return an initial render object with all values as false.
        return getSceneRenderObject()
    }

    renderObject[yIndex][xIndex] = true
    return renderObject
}
