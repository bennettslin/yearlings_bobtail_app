import React, { memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'

import {
    CUBE_Y_AXIS_LENGTH,
    PRESENCE_Y_INDICES
} from '../../../constants/cubeIndex'

const PresenceTransitionStylesheet = () => (
    <>
        <Stylesheet
            {...{
                className: 'PresenceTransitionStylesheet__presenceExit',
                // Actors have their own index, effectively yIndex of 6.
                indices: PRESENCE_Y_INDICES,
                childPrefix: `DW__userAgentDesktop .TrW__isSongChangeDone .Presence__transitionDelay__`,
                getStyle: yIndex => ({
                    transition: `opacity 0.5s ${(CUBE_Y_AXIS_LENGTH - yIndex) * 0.1}s`
                })
            }}
        />
        <Stylesheet
            {...{
                className: 'PresenceTransitionStylesheet__presenceEnter',
                // Actors have their own index, effectively yIndex of 6.
                indices: PRESENCE_Y_INDICES,
                childPrefix: `DW__userAgentDesktop .TrW__isSongChangeDone.TrW__canTransitionAfterSceneChange .Presence__transitionDelay__`,
                getStyle: yIndex => ({
                    // 0.5s to wait for initial cubes transition.
                    transition: `opacity 0.5s ${0.5 + yIndex * 0.1}s`
                })
            }}
        />
    </>
)

export default memo(PresenceTransitionStylesheet)
