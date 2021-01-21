import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_Y_INDICES,
} from '../../../constants/cubeIndex'
import {
    OPACITY,
    LEFT,
    RIGHT,
    PATH,
    TOP,
    EXIT,
    ENTER,
} from '../../../constants/transition'

const
    TRANSITION_DURATION = 0.275,
    TRANSITION_DELAY_INCREMENT = 0.075,
    TRANSITION_BOUNCE_ENTER = 'cubic-bezier(0.2, 0.9, 0.3, 1.1)',
    LYRIC_SCROLL_DURATION = 0.8,
    CUBES_TRANSITION_DURATION = 0.55

export const TRANSITION_STYLESHEET_CONFIGS = [
    {
        stylesheetKey: EXIT,
        getTransitionDelay: yIndex => (LYRIC_SCROLL_DURATION + (CUBE_Y_AXIS_LENGTH - yIndex) * TRANSITION_DELAY_INCREMENT).toFixed(1),
    },
    {
        stylesheetKey: ENTER,
        getTransitionDelay: yIndex => (CUBES_TRANSITION_DURATION + yIndex * TRANSITION_DELAY_INCREMENT).toFixed(1),
    },
]

export const PRESENCE_TRANSITION_CONFIGS = [
    {
        // For wires.
        transitionKey: OPACITY,
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: OPACITY,
        noAdditionalOpacity: true,
    },
    {
        transitionKey: TOP,
        indices: CUBE_Y_INDICES,
        transitionStyle: TOP,
        transitionEaseEnter: TRANSITION_BOUNCE_ENTER,
    },
    {
        transitionKey: LEFT,
        indices: CUBE_Y_INDICES,
        transitionStyle: LEFT,
        transitionEaseEnter: TRANSITION_BOUNCE_ENTER,
    },
    {
        transitionKey: RIGHT,
        indices: CUBE_Y_INDICES,
        transitionStyle: LEFT,
        transitionEaseEnter: TRANSITION_BOUNCE_ENTER,
    },
    {
        transitionKey: PATH,
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: OPACITY,
        transitionDuration: 0.5,
        noAdditionalOpacity: true,
    },
]

export const getTransitionStyles = ({
    yIndex,
    transitionStyles,
    transitionEase = 'ease-out',
    transitionDuration = TRANSITION_DURATION,
    getTransitionDelay,
}) => (
    transitionStyles.map(transitionStyle => (
        `${transitionStyle} ${transitionDuration}s ${transitionEase} ${getTransitionDelay(yIndex)}s`
    )).join(',')
)
