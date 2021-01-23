import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_X_AXIS_LENGTH,
} from '../../../constants/cubeIndex'

const getDelayForValueFrom0To5 = value => (
    value / (CUBE_Y_AXIS_LENGTH - 1) * 0.5
)

export const getTransitionStyle = ({
    yIndex,
    xIndex,
}) => {
    let delay = 0

    // Front cubes animate first. Add 0s for yIndex 5, 0.5s for yIndex 0.
    delay += getDelayForValueFrom0To5(CUBE_Y_AXIS_LENGTH - 1 - yIndex)

    /**
     * Centre cubes animate first. Add 0s for xIndices 5 and 6, 0.5s for
     * xIndices 0 and 11.
     */
    delay += getDelayForValueFrom0To5(
        Math.abs((CUBE_X_AXIS_LENGTH / 2 - 0.5 - xIndex)) - 0.5
    )

    const durationDelay = `0.5s ${delay.toFixed(1)}s`

    return {
        transition: `fill ${durationDelay}, d ${durationDelay}`,
    }
}
