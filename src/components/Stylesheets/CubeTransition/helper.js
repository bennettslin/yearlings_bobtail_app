import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_X_AXIS_LENGTH,
} from '../../../constants/cubeIndex'
import {
    CUBE_TRANSITION_DURATION,
    CUBE_TRANSITION_DELAY_MAX,
} from '../../../constants/entrance'

const getDelayForValueFrom0To5 = value => (
    value / (CUBE_Y_AXIS_LENGTH - 1) * CUBE_TRANSITION_DELAY_MAX
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
        Math.abs((CUBE_X_AXIS_LENGTH / 2 - 0.5 - xIndex)) - 0.5,
    )

    const durationDelay = `${CUBE_TRANSITION_DURATION}s ${delay.toFixed(1)}s`

    return {
        transition: `fill ${durationDelay}, d ${durationDelay}`,
    }
}
