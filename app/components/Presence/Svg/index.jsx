import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import InlineSvg from '../../../modules/InlineSvg'
import Wires from '../Wires'
import {
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames,
    capitaliseForClassName,
} from '../../../helpers/format'
import { getArrangementForPresence } from '../../../api/scene/presences'
import {
    getSharedStyleForActor,
    getSharedStyleForThing,
} from '../../../api/scene/sharedStyles'
import { getWirePlacedFront } from '../../../api/scene/wires'
import { getSvgForPresence } from '../../../api/svg'
import { getMapZIndexForPresence } from '../../../redux/presence/selector'
import { getXYForPresence } from './helpers/position'
import { getCompoundActorStyleIfNeeded } from './helpers/sharedStyle'
import {
    getSizeForPresence,
    getViewBoxSize,
} from './helpers/size'
import { setSvgTransform } from './helpers/transform'
import {
    getTransitionDelayClass,
    getTransitionDelayIndexClass,
} from './helpers/transition'
import { DEV_RENDER_ONLY_PRESENCES } from '../../../constants/dev'
import './style'

const PresenceSvg = ({
    presenceType,
    actorKey,
    presenceKey,

}) => {
    const
        [adjustedWidth, setAdjustedWidth] = useState(0),
        [adjustedHeight, setAdjustedHeight] = useState(0),
        {
            yIndex,
            xPosition,
            zIndex,
            zIndices,
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
            transitionKey,
            transitionIndex,
            hide,
            onlyOne,
        } = getArrangementForPresence({
            presenceType,
            presenceKey,
            actorKey,
        }),
        finalZIndex = useSelector(getMapZIndexForPresence(zIndex, zIndices)),
        {
            x: adjustedLeft,
            y: adjustedTop,
        } = getXYForPresence({
            xPosition,
            yIndex,
            adjustedHeight,
            zIndex: finalZIndex,
            zOffset,
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
                    presenceKey,
                })
            ) :
            getSharedStyleForThing({
                presenceType,
                presenceKey,
            }),
        placedFront = getWirePlacedFront({
            actorKey,
            presenceType,
            presenceKey,
        }),
        // If it's null, then there is no wire.
        hasWires = typeof placedFront === 'boolean'

    const setAdjustedSize = svgString => {
        try {
            const
                {
                    viewBoxWidth,
                    viewBoxHeight,
                } = getViewBoxSize(svgString),
                {
                    adjustedWidth,
                    adjustedHeight,
                } = getSizeForPresence({
                    presenceType,
                    viewBoxWidth,
                    viewBoxHeight,
                    yIndex,
                    scaleFactor,
                    trimBottom,
                })

            setAdjustedWidth(adjustedWidth)
            setAdjustedHeight(adjustedHeight)

        } catch (error) {
            logError({
                log: 'Error parsing viewBox!',
                action: 'parseSvg',
                label: actorKey ?
                    `actor: ${actorKey}, instance: ${presenceKey}` :
                    `thing: ${presenceType}, instance: ${presenceKey}`,
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
            rotateY,
        })
    }

    /**
     * This parent container exists solely to take the CSS transition
     * class names. This prevents conflict when the child tries to add
     * its own class names after svgs have loaded.
     */
    return (
        <div
            {...{
                className: cx(
                    'PresenceContainer'
                ),
            }}
        >
            {(Boolean(onlyOne) || !DEV_RENDER_ONLY_PRESENCES) && !hide && (
                <InlineSvg
                    {...{
                        className: cx(
                            'Presence',
                            capitaliseForClassName(presenceType),
                            getTransitionDelayClass({
                                transitionKey,
                                presenceType,
                                xPosition,
                                hasWires,
                            }),
                            getTransitionDelayIndexClass({
                                transitionKey,
                                transitionIndex,
                                yIndex,
                                presenceType,
                                xPosition,
                                hasWires,
                            }),
                            'presence__position',
                            !noShadow && 'presence__shadow',
                            trimBottom && 'presence__trimBottom'
                        ),
                        style: {
                            left: `${adjustedLeft.toFixed(2)}%`,
                            top: `${adjustedTop.toFixed(2)}%`,
                            width: `${adjustedWidth.toFixed(2)}%`,
                            height: `${adjustedHeight.toFixed(2)}%`,
                            ...perspective && {
                                perspective: `${perspective}em`,
                            },
                        },
                        svgClassName: cx(
                            presenceKeyClassName,
                            duplicateKeyClassName,
                            getSharedClassNames(sharedStyle)
                        ),
                        title: convertPresenceKeyToTitle(presenceKey),
                        preProcessor: preProcessSvg,
                        // onLoad,

                        ...hasWires && {
                            siblingPlacedFront: placedFront,
                            siblingComponent: (
                                <Wires
                                    {...{
                                        className: cx(
                                            getTransitionDelayClass({
                                                isWire: true,
                                            }),
                                            getTransitionDelayIndexClass({
                                                isWire: true,
                                            })
                                        ),
                                        actorKey,
                                        presenceType,
                                        presenceKey,
                                        adjustedTop,
                                        adjustedLeft,
                                        adjustedWidth,
                                        adjustedHeight,
                                    }}
                                />
                            ),
                        },
                    }}
                >
                    {getSvgForPresence({
                        actorKey,
                        presenceType,
                        presenceKey,
                    })}
                </InlineSvg>
            )}
        </div>
    )
}

PresenceSvg.propTypes = {
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
}

export default memo(PresenceSvg)
