import React, { Fragment, memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import { CUBE_Y_AXIS_LENGTH } from '../../../constants/cubeIndex'
import { PRESENCE_TRANSITION_CONFIGS } from './constants'

const
    TRANSITION_DURATION = 0.25,
    TRANSITION_DELAY_INCREMENT = 0.1,
    LYRIC_SCROLL_DURATION = 0.8,
    CUBES_TRANSITION_DURATION = 0.55

const TransitionStylesheets = () => (
    <>
        {PRESENCE_TRANSITION_CONFIGS.map(({
            transitionKey,
            indices,
            transitionStyle
        }) => (
            <Fragment {...{ key: transitionKey }}>
                <Stylesheet
                    {...{
                        className: `TransitionStylesheet__${transitionKey}Exit`,
                        indices,
                        childPrefix: `TrW__canPresenceTransitionExit .${transitionKey}__transitionIndex__`,
                        getStyle: yIndex => ({
                            transition: `${transitionStyle} ${TRANSITION_DURATION}s ease-out ${(LYRIC_SCROLL_DURATION + (CUBE_Y_AXIS_LENGTH - yIndex) * TRANSITION_DELAY_INCREMENT).toFixed(1)}s`
                        })
                    }}
                />
                <Stylesheet
                    {...{
                        className: `TransitionStylesheet__${transitionKey}Enter`,
                        indices,
                        childPrefix: `TrW__canPresenceTransitionEnter .${transitionKey}__transitionIndex__`,
                        getStyle: yIndex => ({
                            // Entrance waits for initial cubes transition.
                            transition: `${transitionStyle} ${TRANSITION_DURATION}s ease-out ${(CUBES_TRANSITION_DURATION + yIndex * TRANSITION_DELAY_INCREMENT).toFixed(1)}s`
                        })
                    }}
                />
            </Fragment>
        ))}
    </>
)

export default memo(TransitionStylesheets)
