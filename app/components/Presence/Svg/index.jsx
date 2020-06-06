import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../modules/InlineSvg'
import Wires from '../../../modules/Wires'
import {
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames
} from '../../../helpers/format'
import { getArrangementForPresence } from '../../../api/scene/presences'
import {
    getSharedStyleForActor,
    getSharedStyleForThing
} from '../../../api/scene/sharedStyles'
import { getWirePlacedFront } from '../../../api/scene/wires'
import { getXYForPresence } from './helpers/position'
import { getCompoundActorStyleIfNeeded } from './helpers/sharedStyle'
import {
    getSizeForPresence,
    getViewBoxSize
} from './helpers/size'
import { setSvgTransform } from './helpers/transform'
import { DEV_RENDER_ONLY_PRESENCES } from '../../../constants/dev'
import './style'

const PresenceSvg = ({
    className,
    cubesKey,
    presenceType,
    actorKey,
    presenceKey,
    showProcessedSvg,
    children

}) => {
    const
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
            cubesKey,
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
        setTimeout(setAdjustedSize.bind(null, svgString), 0)

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

    return (Boolean(onlyOne) || !DEV_RENDER_ONLY_PRESENCES) && !hide && (
        <InlineSvg
            {...{
                className: cx(
                    'PresenceSvg',
                    'PresenceSvg__position',
                    noShadow && 'Presence__noShadow',
                    className
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
                onLoad: showProcessedSvg,

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
            {children}
        </InlineSvg>
    )
}

PresenceSvg.propTypes = {
    className: PropTypes.string,
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    showProcessedSvg: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default memo(PresenceSvg)
