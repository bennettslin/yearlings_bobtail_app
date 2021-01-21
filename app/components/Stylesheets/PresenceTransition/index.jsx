import React, { Fragment, memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import {
    TRANSITION_STYLESHEET_CONFIGS,
    PRESENCE_TRANSITION_CONFIGS,
    getTransitionStyles,
} from './helper'
import {
    OPACITY,
    ENTER,
} from '../../../constants/transition'

const PresenceTransitionStylesheets = () => (
    <>
        {PRESENCE_TRANSITION_CONFIGS.map(({
            transitionKey,
            indices,
            transitionStyle,
            transitionEaseEnter,
            transitionDuration,
            noAdditionalOpacity = false,
        }) => (
            <Fragment {...{ key: transitionKey }}>
                {TRANSITION_STYLESHEET_CONFIGS.map(({
                    stylesheetKey,
                    getTransitionDelay,
                }) => (
                    <Stylesheet
                        {...{
                            key: stylesheetKey,
                            className: `TransitionStylesheet__${transitionKey}${stylesheetKey}`,
                            indices,
                            childPrefix: `TrW__canPresenceTransition${stylesheetKey} .${transitionKey}__transitionIndex__`,
                            getStyle: yIndex => ({
                                transition: getTransitionStyles({
                                    yIndex,
                                    transitionStyles:
                                        noAdditionalOpacity ?
                                            [transitionStyle] :
                                            [OPACITY, transitionStyle],
                                    ...stylesheetKey === ENTER && {
                                        transitionEase: transitionEaseEnter,
                                    },
                                    transitionDuration,
                                    getTransitionDelay,
                                }),
                            }),
                        }}
                    />
                ))}
            </Fragment>
        ))}
    </>
)

export default memo(PresenceTransitionStylesheets)
