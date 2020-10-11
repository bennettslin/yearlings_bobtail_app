import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../modules/InlineSvg'
import Wires from '../Wires'
import {
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames,
    capitaliseForClassName
} from '../../../helpers/format'
import { getArrangementForPresence } from '../../../api/scene/presences'
import {
    getSharedStyleForActor,
    getSharedStyleForThing
} from '../../../api/scene/sharedStyles'
import { getWirePlacedFront } from '../../../api/scene/wires'
import { getSvgForPresence } from '../../../api/svg'
import { getXYForPresence } from './helpers/position'
import { getCompoundActorStyleIfNeeded } from './helpers/sharedStyle'
import {
    getSizeForPresence,
    getViewBoxSize
} from './helpers/size'
import { setSvgTransform } from './helpers/transform'
import {
    getTransitionDelayClass,
    getTransitionDelayIndexClass
} from './helpers/transition'
import { DEV_RENDER_ONLY_PRESENCES } from '../../../constants/dev'
import './style'

const PresenceSvg = ({
    presenceType,
    actorKey,
    presenceKey,
    zIndex

}) => {
    const
        [isLoaded, setIsLoaded] = useState(false),
        [adjustedWidth, setAdjustedWidth] = useState(0),
        [adjustedHeight, setAdjustedHeight] = useState(0),
        {
            yIndex,
            xPosition,
            zOffset,
            scaleFactor,
            trimBottom,
            flipHorizontal,
            rotate,
            skewX,
            skewY,
            rotateX,
            rotateY,
            noShadow,
            perspective,
            hide,
            onlyOne
        } = getArrangementForPresence({
            presenceType,
            presenceKey,
            actorKey
        }),
        {
            x: adjustedLeft,
            y: adjustedTop
        } = getXYForPresence({
            zIndex,
            yIndex,
            xPosition,
            zOffset
        }),
        presenceKeyClassName = convertPresenceKeyToClassName(presenceKey),
        duplicateKeyClassName =
            presenceKey !== presenceKeyClassName &&
            presenceKey,
        sharedStyle = actorKey ?
            getCompoundActorStyleIfNeeded(
                actorKey,
                getSharedStyleForActor({
                    actorKey,
                    presenceKey
                })
            ) :
            getSharedStyleForThing({
                presenceType,
                presenceKey
            }),
        placedFront = getWirePlacedFront({
            actorKey,
            presenceType,
            presenceKey
        })

    const setAdjustedSize = svgString => {
        try {
            const
                {
                    viewBoxWidth,
                    viewBoxHeight
                } = getViewBoxSize(svgString),
                {
                    adjustedWidth,
                    adjustedHeight
                } = getSizeForPresence({
                    presenceType,
                    viewBoxWidth,
                    viewBoxHeight,
                    yIndex,
                    scaleFactor,
                    trimBottom
                })

            setAdjustedWidth(adjustedWidth)
            setAdjustedHeight(adjustedHeight)

        } catch (error) {
            logError({
                log: 'Error parsing viewBox!',
                action: 'parseSvg',
                label: actorKey ?
                    `actor: ${actorKey}, instance: ${presenceKey}` :
                    `thing: ${presenceType}, instance: ${presenceKey}`
            })
        }
    }

    const preProcessSvg = (svgString) => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(() => setAdjustedSize(svgString), 0)

        // Add transform attributes.
        return setSvgTransform({
            svgString,
            flipHorizontal,
            rotate,
            skewX,
            skewY,
            rotateX,
            rotateY
        })
    }

    const onLoad = () => {
        setIsLoaded(true)
    }

    return (Boolean(onlyOne) || !DEV_RENDER_ONLY_PRESENCES) && !hide && (
        <InlineSvg
            {...{
                className: cx(
                    'Presence',
                    // TODO: No longer used.
                    isLoaded && 'Presence__loaded',
                    capitaliseForClassName(presenceType),
                    getTransitionDelayClass(presenceType),
                    getTransitionDelayIndexClass({
                        yIndex,
                        presenceType
                    }),
                    'presence__position',
                    noShadow && 'Presence__noShadow'
                ),
                style: {
                    left: `${adjustedLeft.toFixed(2)}%`,
                    top: `${adjustedTop.toFixed(2)}%`,
                    width: `${adjustedWidth.toFixed(2)}%`,
                    height: `${adjustedHeight.toFixed(2)}%`,
                    ...perspective && {
                        perspective: `${perspective}em`
                    }
                },
                svgClassName: cx(
                    presenceKeyClassName,
                    duplicateKeyClassName,
                    getSharedClassNames(sharedStyle)
                ),
                title: convertPresenceKeyToTitle(presenceKey),
                preProcessor: preProcessSvg,
                onLoad,

                // If it's null, then there is no wire.
                ...typeof placedFront === 'boolean' && {
                    siblingPlacedFront: placedFront,
                    siblingComponent: (
                        <Wires
                            {...{
                                actorKey,
                                presenceType,
                                presenceKey,
                                adjustedTop,
                                adjustedLeft,
                                adjustedWidth,
                                adjustedHeight
                            }}
                        />
                    )
                }
            }}
        >
            {getSvgForPresence({
                actorKey,
                presenceType,
                presenceKey
            })}
        </InlineSvg>
    )
}

PresenceSvg.propTypes = {
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    zIndex: PropTypes.number.isRequired
}

export default memo(PresenceSvg)
