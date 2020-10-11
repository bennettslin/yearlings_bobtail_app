import React, { Fragment, memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import { CUBE_Y_AXIS_LENGTH } from '../../../constants/cubeIndex'
import { PRESENCE_TRANSITION_CONFIGS } from './constants'

const
    TRANSITION_DURATION = 0.2,
    TRANSITION_DELAY_INCREMENT = 0.1,
    LYRIC_SCROLL_DURATION = 0.8,
    CUBES_TRANSITION_DURATION = 0.55

const TransitionStylesheets = () => (
    <>
        {PRESENCE_TRANSITION_CONFIGS.map(({
            presenceType,
            indices,
            transitionStyle
        }) => (
            <Fragment {...{ key: presenceType }}>
                <Stylesheet
                    {...{
                        className: `TransitionStylesheet__${presenceType}Exit`,
                        indices,
                        childPrefix: `TrW__canPresenceTransitionExit .${presenceType}__transitionIndex__`,
                        getStyle: yIndex => ({
                            transition: `${transitionStyle} ${TRANSITION_DURATION}s ease-out ${(LYRIC_SCROLL_DURATION + (CUBE_Y_AXIS_LENGTH - yIndex) * TRANSITION_DELAY_INCREMENT).toFixed(1)}s`
                        })
                    }}
                />
                <Stylesheet
                    {...{
                        className: `TransitionStylesheet__${presenceType}Enter`,
                        indices,
                        childPrefix: `TrW__canPresenceTransitionEnter .${presenceType}__transitionIndex__`,
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
