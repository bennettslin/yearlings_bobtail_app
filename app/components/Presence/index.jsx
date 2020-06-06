// eslint-disable-next-line object-curly-newline
import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from '../../modules/PresenceSvg'
import { capitaliseForClassName } from '../../helpers/format'
import { getSvgForPresence } from '../../api/svg'
import { mapSceneCubesKey } from '../../redux/scene/selectors'
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
        [isSvgLoaded, setIsSvgLoaded] = useState(false),

        presenceSvg = getSvgForPresence({
            actorKey,
            presenceType,
            presenceKey
        })

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
                {presenceSvg}
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
