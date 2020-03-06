import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from 'modules/InlineSvg'
import Wires from 'modules/Wires'

import {
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames
} from 'helpers/format'
import { getWirePlacedFront } from '../../scene/sharedConfigs'
import { getSharedStyleForActor } from '../../scene/sharedConfigs/actors'
import { getSharedStyleForThing } from '../../scene/sharedConfigs/things'
import { getArrangementForPresence } from 'components/Presence/helper'
import { getXYForPresence } from './helper/position'
import { getCompoundActorStyleIfNeeded } from './helper/sharedStyle'
import {
    getSizeForPresence,
    getViewBoxSize
} from './helper/size'
import {
    setSvgTransform,
    getPresenceTransform
} from './helper/transform'

const propTypes = {
    // From parent.
    className: PropTypes.string,
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    showProcessedSvg: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

class PresenceSvg extends PureComponent {
    state = {
        adjustedWidth: 0,
        adjustedHeight: 0
    }

    getArrangement() {
        const {
            presenceType,
            actorKey,
            presenceKey
        } = this.props

        return getArrangementForPresence({
            presenceType,
            presenceKey,
            actorKey
        })
    }

    getSize({
        viewBoxWidth,
        viewBoxHeight
    }) {
        const
            { presenceType } = this.props,
            {
                yIndex,
                scaleFactor,
                trimBottom
            } = this.getArrangement()

        return getSizeForPresence({
            presenceType,
            viewBoxWidth,
            viewBoxHeight,
            yIndex,
            scaleFactor,
            trimBottom
        })
    }

    getXY() {
        const
            { cubesKey } = this.props,
            {
                yIndex,
                xPosition,
                zOffset
            } = this.getArrangement()

        return getXYForPresence({
            cubesKey,
            yIndex,
            xPosition,
            zOffset
        })
    }

    preProcessSvg = (svgString) => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(this.setAdjustedSize.bind(null, svgString), 0)

        // Add transform attributes.
        return this.setSvgTransform(svgString)
    }

    postProcessSvg = () => {
        this.props.showProcessedSvg()
    }

    setAdjustedSize = (svgString) => {
        try {
            const
                {
                    viewBoxWidth,
                    viewBoxHeight
                } = getViewBoxSize(svgString),
                {
                    viewBoxWidth: prevViewBoxWidth,
                    viewBoxHeight: prevViewBoxHeight
                } = this.state
            if (
                viewBoxWidth !== prevViewBoxWidth ||
                viewBoxHeight !== prevViewBoxHeight
            ) {
                const
                    {
                        adjustedWidth,
                        adjustedHeight
                    } = this.getSize({
                        viewBoxWidth,
                        viewBoxHeight
                    })

                this.setState({
                    adjustedWidth,
                    adjustedHeight
                })
            }

        } catch (error) {
            const {
                presenceType,
                presenceKey,
                actorKey
            } = this.props

            logError({
                log: 'Error parsing viewBox!',
                action: 'parseSvg',
                label: actorKey ?
                    `actor: ${actorKey}, instance: ${presenceKey}` :
                    `thing: ${presenceType}, instance: ${presenceKey}`
            })
        }
    }

    setSvgTransform(svgString) {
        const {
            flipHorizontal,
            rotate,
            skewX,
            skewY,
            rotateX,
            rotateY
        } = this.getArrangement()

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

    getPresenceTransform() {
        const {
            alignLeft,
            alignRight
        } = this.getArrangement()

        return getPresenceTransform({
            alignLeft,
            alignRight
        })
    }

    getSharedStyle() {
        const {
            actorKey,
            presenceType,
            presenceKey
        } = this.props

        if (actorKey) {
            return getCompoundActorStyleIfNeeded(
                actorKey,
                getSharedStyleForActor({
                    actorKey,
                    presenceKey
                })
            )
        } else {
            return getSharedStyleForThing({
                presenceType,
                presenceKey
            })
        }
    }

    render() {
        const {
                className,
                actorKey,
                presenceType,
                presenceKey,
                children
            } = this.props,
            {
                noShadow,
                perspective
            } = this.getArrangement(),
            {
                x: adjustedLeft,
                y: adjustedTop
            } = this.getXY(),
            {
                adjustedWidth,
                adjustedHeight
            } = this.state,
            containerTransform = this.getPresenceTransform(),
            presenceKeyClassName = convertPresenceKeyToClassName(presenceKey),
            sharedStyle = this.getSharedStyle(),
            duplicateKeyClassName = presenceKey !== presenceKeyClassName && presenceKey,
            placedFront = getWirePlacedFront({
                actorKey,
                presenceType,
                presenceKey
            })

        return (
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
                        },
                        ...containerTransform && {
                            transform: containerTransform
                        }
                    },
                    svgClassName: cx(
                        presenceKeyClassName,
                        duplicateKeyClassName,
                        getSharedClassNames(sharedStyle)
                    ),
                    title: convertPresenceKeyToTitle(presenceKey),
                    preProcessor: this.preProcessSvg,
                    onLoad: this.postProcessSvg,

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
}

PresenceSvg.propTypes = propTypes

export default PresenceSvg
