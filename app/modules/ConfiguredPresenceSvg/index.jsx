import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReactInlineSvg from 'react-inlinesvg'

import { getArrangementForPresence } from 'components/Presence/helper'
import { getXYForPresence } from './helper/position'
import { getSizeForPresence, getViewBoxSize } from './helper/size'
import {
    setSvgTransformForPresence,
    getSvgContainerTransformForPresence
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

class ConfiguredPresenceSvg extends PureComponent {
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
        const {
            yIndex,
            scaleFactor
        } = this.getArrangement()

        return getSizeForPresence({
            viewBoxWidth,
            viewBoxHeight,
            yIndex,
            scaleFactor
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

    getSvgContainerTransform() {
        const {
            alignLeft,
            alignRight
        } = this.getArrangement()

        return getSvgContainerTransformForPresence({
            alignLeft,
            alignRight
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
            logError('Error parsing viewBox!')
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

        return setSvgTransformForPresence({
            svgString,
            flipHorizontal,
            rotate,
            skewX,
            skewY,
            rotateX,
            rotateY
        })
    }

    render() {
        const {
                className,
                children
            } = this.props,
            {
                noShadow,
                perspective,
                sharedStyle
            } = this.getArrangement(),
            {
                x: adjustedLeft,
                y: adjustedTop
            } = this.getXY(),
            {
                adjustedWidth,
                adjustedHeight
            } = this.state,
            containerTransform = this.getSvgContainerTransform()

        return (
            <ReactInlineSvg
                {...{
                    className: cx(
                        'ConfiguredPresenceSvg',
                        noShadow && 'Presence__noShadow',
                        sharedStyle,
                        'abF',
                        className
                    ),
                    preProcessor: this.preProcessSvg,
                    onLoad: this.postProcessSvg,
                    src: children,
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
                    }
                }}
            />
        )
    }
}

ConfiguredPresenceSvg.propTypes = propTypes

export default ConfiguredPresenceSvg
