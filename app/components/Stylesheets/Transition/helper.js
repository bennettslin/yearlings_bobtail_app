import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_Y_INDICES
} from '../../../constants/cubeIndex'

const
    TRANSITION_DURATION = 0.25,
    TRANSITION_DELAY_INCREMENT = 0.1,
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
        transitionKey: 'path',
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: 'opacity',
        transitionDuration: 0.5
    },
    {
        transitionKey: 'top',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'top'
    },
    {
        transitionKey: 'left',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'left'
    },
    {
        transitionKey: 'right',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'left'
    }
]

export const getTransitionStyles = ({
    yIndex,
    transitionStyles,
    transitionDuration = TRANSITION_DURATION,
    getTransitionDelay
}) => (
    transitionStyles.map(transitionStyle => (
        `${transitionStyle} ${transitionDuration}s ease-out ${getTransitionDelay(yIndex)}s`
    )).join(',')
)
