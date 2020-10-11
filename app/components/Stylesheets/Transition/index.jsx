import React, { Fragment, memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import {
    TRANSITION_STYLESHEET_CONFIGS,
    PRESENCE_TRANSITION_CONFIGS,
    getTransitionStyles
} from './helper'

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
                            key: stylesheetKey,
                            className: `TransitionStylesheet__${transitionKey}${stylesheetKey}`,
                            indices,
                            childPrefix: `TrW__canPresenceTransition${stylesheetKey} .${transitionKey}__transitionIndex__`,
                            getStyle: yIndex => ({
                                transition: getTransitionStyles({
                                    yIndex,
                                    transitionStyles:
                                        /**
                                         * Add opacity to all but vivus
                                         * transitions.
                                         */
                                        transitionKey === 'vivus' ?
                                            [transitionStyle] :
                                            ['opacity', transitionStyle],
                                    getTransitionDelay
                                })
                            })
                        }}
                    />
                ))}
            </Fragment>
        ))}
    </>
)

export default memo(TransitionStylesheets)
