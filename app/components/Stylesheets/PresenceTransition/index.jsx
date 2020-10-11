import React, { Fragment, memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import { capitaliseForClassName } from '../../../helpers/format'
import { CUBE_Y_AXIS_LENGTH } from '../../../constants/cubeIndex'
import { PRESENCE_TRANSITION_CONFIGS } from './constants'

const PresenceTransitionStylesheet = () => (
    <>
        {PRESENCE_TRANSITION_CONFIGS.map(({
            presenceType,
            indices,
            transitionStyle
        }) => (
            <Fragment {...{ key: presenceType }}>
                <Stylesheet
                    {...{
                        className: `PresenceTransitionStylesheet__${presenceType}Exit`,
                        indices,
                        childPrefix: `TrW__canPresenceTransitionExit .${capitaliseForClassName(presenceType)}__transitionDelay__`,
                        getStyle: yIndex => ({
                            transition: `${transitionStyle} 0.5s ${(CUBE_Y_AXIS_LENGTH - yIndex) * 0.1}s`
                        })
                    }}
                />
                <Stylesheet
                    {...{
                        className: `PresenceTransitionStylesheet__${presenceType}Enter`,
                        indices,
                        childPrefix: `TrW__canPresenceTransitionEnter .${capitaliseForClassName(presenceType)}__transitionDelay__`,
                        getStyle: yIndex => ({
                            // 0.5s to wait for initial cubes transition.
                            transition: `${transitionStyle} 0.5s ${0.5 + yIndex * 0.1}s`
                        })
                    }}
                />
            </Fragment>
        ))}
    </>
)

export default memo(PresenceTransitionStylesheet)
