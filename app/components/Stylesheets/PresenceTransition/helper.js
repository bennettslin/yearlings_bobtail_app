import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_Y_INDICES,
} from '../../../constants/cubeIndex'
import {
    CONVERTED_TRANSITION_DURATION_PRESENCE,
    CUBES_TRANSITIONED_DURATION,
    LYRICS_SCROLLED_DURATION,
} from '../../../constants/entrance'
import {
    OPACITY,
    LEFT,
    RIGHT,
    REALISTIC,
    TOP,
    EXIT,
    ENTER,
} from '../../../constants/transition'

const
    TRANSITION_DELAY_INCREMENT = 0.075,
    TRANSITION_BOUNCE_ENTER = 'cubic-bezier(0.2, 0.9, 0.3, 1.1)'

export const TRANSITION_STYLESHEET_CONFIGS = [
    {
        stylesheetKey: EXIT,
        getTransitionDelay: yIndex => (
            LYRICS_SCROLLED_DURATION +
            (CUBE_Y_AXIS_LENGTH - yIndex) * TRANSITION_DELAY_INCREMENT
        ).toFixed(1),
    },
    {
        stylesheetKey: ENTER,
        getTransitionDelay: yIndex => (
            CUBES_TRANSITIONED_DURATION +
            yIndex * TRANSITION_DELAY_INCREMENT
        ).toFixed(1),
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
        transitionKey: REALISTIC,
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: OPACITY,
        transitionDuration: CONVERTED_TRANSITION_DURATION_PRESENCE + 0.25,
        noAdditionalOpacity: true,
    },
]

export const getTransitionStyles = ({
    yIndex,
    transitionStyles,
    transitionEase = 'ease-out',
    transitionDuration = CONVERTED_TRANSITION_DURATION_PRESENCE,
    getTransitionDelay,
}) => (
    transitionStyles.map(transitionStyle => ([
        `${transitionStyle} ${transitionDuration}s`,
        `${transitionEase} ${getTransitionDelay(yIndex)}s`,
    ].join(' '))).join(',')
)
