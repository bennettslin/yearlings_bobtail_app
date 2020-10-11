import React, { Fragment, memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import { CUBE_Y_AXIS_LENGTH } from '../../../constants/cubeIndex'
import { PRESENCE_TRANSITION_CONFIGS } from './constants'

const
    TRANSITION_DURATION = 0.25,
    TRANSITION_DELAY_INCREMENT = 0.1,
    LYRIC_SCROLL_DURATION = 0.8,
    CUBES_TRANSITION_DURATION = 0.55

const TRANSITION_STYLESHEET_CONFIGS = [
    {
        stylesheetKey: 'Exit',
        getTransitionDelay: yIndex => (LYRIC_SCROLL_DURATION + (CUBE_Y_AXIS_LENGTH - yIndex) * TRANSITION_DELAY_INCREMENT).toFixed(1)
    },
    {
        stylesheetKey: 'Enter',
        getTransitionDelay: yIndex => (CUBES_TRANSITION_DURATION + yIndex * TRANSITION_DELAY_INCREMENT).toFixed(1)
    }
]

const TransitionStylesheets = () => (
    <>
        {PRESENCE_TRANSITION_CONFIGS.map(({
            transitionKey,
            indices,
            transitionStyle
        }) => (
            <Fragment {...{ key: transitionKey }}>
                {TRANSITION_STYLESHEET_CONFIGS.map(({
                    stylesheetKey,
                    getTransitionDelay
                }) => (
                    <Stylesheet
                        {...{
                            className: `TransitionStylesheet__${transitionKey}${stylesheetKey}`,
                            indices,
                            childPrefix: `TrW__canPresenceTransition${stylesheetKey} .${transitionKey}__transitionIndex__`,
                            getStyle: yIndex => ({
                                transition: `${transitionStyle} ${TRANSITION_DURATION}s ease-out ${getTransitionDelay(yIndex)}s`
                            })
                        }}
                    />
                ))}
            </Fragment>
        ))}
    </>
)

export default memo(TransitionStylesheets)
