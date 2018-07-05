import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_X_AXIS_LENGTH
} from '../constants/stage'

export const getSceneRenderState = () => {
    // This returns the initial render object.

    const renderState = {
        all: false
    }

    for (let yIndex = 0; yIndex < CUBE_Y_AXIS_LENGTH; yIndex++) {
        renderState[yIndex] = {}

        for (let xIndex = 0; xIndex < CUBE_X_AXIS_LENGTH; xIndex++) {
            /**
             * Set the first entity in the first row to true. Set all others to
             * false.
             */
            const value = !(xIndex || yIndex)

            renderState[yIndex][xIndex] = value
        }
    }

    return renderState
}

export const setSceneRenderState = (payload) => {
    // If no payload is passed, return the initial render state.
    return payload || getSceneRenderState()
}
