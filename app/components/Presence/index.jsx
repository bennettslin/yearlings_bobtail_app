// eslint-disable-next-line object-curly-newline
import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from '../../modules/PresenceSvg'
import { capitaliseForClassName } from '../../helpers/format'
import { getSvgMapForActor } from '../../svg/actors'
import { getSvgMapForThing } from '../../svg/things'
import { ACTOR } from '../../constants/scene'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import './style'

const Presence = ({
    cubesKey = DEFAULT_STAGE_KEY,
    presenceType,
    actorKey,
    presenceKey,
    existenceValue

}) => {
    const
        // This determines whether to transition in and out.
        [isTransitionVisible, setIsTransitionVisible] = useState(false),
        /**
         * This is a fallback, in case the transition class was added before
         * the svg was loaded and therefore present.
         */
        [isSvgLoaded, setIsSvgLoaded] = useState(false)

    const showProcessedSvg = () => {
        // This handles the possibility that an svg might be loaded late.
        if (existenceValue) {
            setIsSvgLoaded(true)
        }
    }

    useEffect(() => {
        setIsTransitionVisible(existenceValue)
    }, [])

    useEffect(() => {
        setIsTransitionVisible(existenceValue)

        if (!existenceValue) {
            setIsSvgLoaded(false)
        }

    }, [existenceValue])

    const
        presencesMap = presenceType === ACTOR ?
            getSvgMapForActor(actorKey) :
            getSvgMapForThing(presenceType),

        presenceComponent = presencesMap[presenceKey]

    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            {...{
                in: isTransitionVisible,
                timeout: 200,
                classNames: { enterDone: 'Presence__visible' }
            }}
        >
            <PresenceSvg
                {...{
                    className: cx(
                        'Presence',
                        isSvgLoaded && 'Presence__loaded',
                        capitaliseForClassName(presenceType)
                    ),
                    cubesKey,
                    presenceType,
                    actorKey,
                    presenceKey,
                    showProcessedSvg
                }}
            >
                {presenceComponent}
            </PresenceSvg>
        </CSSTransition>
    )
}

Presence.propTypes = {
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    existenceValue: PropTypes.bool.isRequired
}

export default memo(Presence)
