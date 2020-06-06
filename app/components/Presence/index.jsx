// eslint-disable-next-line object-curly-newline
import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from '../../modules/PresenceSvg'
import { capitaliseForClassName } from '../../helpers/format'
import { getSvgMapForActor } from '../../api/svg/actors'
import { getSvgMapForThing } from '../../api/svg/things'
import { mapSceneCubesKey } from '../../redux/scene/selectors'
import { ACTOR } from '../../constants/scene'
import './style'

const Presence = ({
    presenceType,
    actorKey,
    presenceKey,

    // TODO: Make this a selector.
    existenceValue

}) => {
    const
        // TODO: Get this from build.
        sceneCubesKey = useSelector(mapSceneCubesKey),

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
                in: existenceValue,
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
                    cubesKey: sceneCubesKey,
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
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    existenceValue: PropTypes.bool.isRequired
}

export default memo(Presence)
