import React, { Fragment as ___, PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from 'modules/InlineSvg'

import {
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames
} from 'helpers/format'
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
import { getWires } from './helper/wire'

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
                presenceType,
                presenceKey,
                children
            } = this.props,
            {
                noShadow,
                perspective,
                wire
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
            sharedStyle = this.getSharedStyle(),
            presenceKeyClassName = convertPresenceKeyToClassName(presenceKey),
            duplicateKeyClassName = presenceKey !== presenceKeyClassName && presenceKey,
            wires = getWires({ presenceType, wire })

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
                    siblingComponent: wires && (
                        <___>
                            {wires.map((config, index) => {
                                const { x = 0.5, y = 0.5 } = config,
                                    left =
                                        adjustedLeft +
                                        // 0.5 is centre.
                                        adjustedWidth * (x - 0.5),
                                    top =
                                        adjustedTop -
                                        // 0 is very bottom, 1 is very top.
                                        adjustedHeight * y

                                return (
                                    <div
                                        {...{
                                            key: index,
                                            className: cx(
                                                'PresenceSvg__highWire',
                                                'PresenceSvg__position'
                                            ),
                                            style: {
                                                left: `${left.toFixed(2)}%`,
                                                top: `${top.toFixed(2)}%`
                                            }
                                        }}
                                    />
                                )
                            })}
                        </___>
                    )
                }}
            >
                {children}
            </InlineSvg>
        )
    }
}

PresenceSvg.propTypes = propTypes

export default PresenceSvg
