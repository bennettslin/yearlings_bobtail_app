import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_Y_INDICES
} from '../../../constants/cubeIndex'

const
    TRANSITION_DURATION = 0.275,
    TRANSITION_DELAY_INCREMENT = 0.075,
    TRANSITION_BOUNCE_ENTER = 'cubic-bezier(0.2, 0.9, 0.3, 1.1)',
    LYRIC_SCROLL_DURATION = 0.8,
    CUBES_TRANSITION_DURATION = 0.55

export const TRANSITION_STYLESHEET_CONFIGS = [
    {
        stylesheetKey: 'Exit',
        getTransitionDelay: yIndex => (LYRIC_SCROLL_DURATION + (CUBE_Y_AXIS_LENGTH - yIndex) * TRANSITION_DELAY_INCREMENT).toFixed(1)
    },
    {
        stylesheetKey: 'Enter',
        getTransitionDelay: yIndex => (CUBES_TRANSITION_DURATION + yIndex * TRANSITION_DELAY_INCREMENT).toFixed(1)
    }
]

export const PRESENCE_TRANSITION_CONFIGS = [
    {
        // For wires.
        transitionKey: 'opacity',
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: 'opacity',
        noAdditionalOpacity: true
    },
    {
        transitionKey: 'top',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'top',
        transitionEaseEnter: TRANSITION_BOUNCE_ENTER
    },
    {
        transitionKey: 'left',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'left',
        transitionEaseEnter: TRANSITION_BOUNCE_ENTER
    },
    {
        transitionKey: 'right',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'left',
        transitionEaseEnter: TRANSITION_BOUNCE_ENTER
    },
    {
        transitionKey: 'path',
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: 'opacity',
        transitionDuration: 0.5,
        noAdditionalOpacity: true
    }
]

export const getTransitionStyles = ({
    yIndex,
    transitionStyles,
    transitionEase = 'ease-out',
    transitionDuration = TRANSITION_DURATION,
    getTransitionDelay
}) => (
    transitionStyles.map(transitionStyle => (
        `${transitionStyle} ${transitionDuration}s ${transitionEase} ${getTransitionDelay(yIndex)}s`
    )).join(',')
)
