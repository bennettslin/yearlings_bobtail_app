import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReactInlineSvg from 'react-inlinesvg'

import { getAdjustedSize, getViewBoxSize } from './helper'

class PresenceSvg extends Component {

    static defaultProps = {
        scaleFactor: 1
    }

    static propTypes = {
        className: PropTypes.string,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        scaleFactor: PropTypes.number,
        flipHorizontal: PropTypes.bool,
        children: PropTypes.node
    }

    state = {
        viewBoxWidth: 0,
        viewBoxHeight: 0
    }

    processSvg = (svgString) => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(this.trySetViewBoxSize.bind(null, svgString), 0)
        return svgString
    }

    trySetViewBoxSize = (svgString) => {
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
                this.setState({
                    viewBoxWidth,
                    viewBoxHeight
                })
            }

        } catch (error) {
            logError('Error parsing viewBox!')
        }
    }

    render() {
        const {
                className,
                x,
                y,
                yIndex,
                scaleFactor,
                flipHorizontal,
                children
            } = this.props,
            {
                viewBoxWidth,
                viewBoxHeight
            } = this.state,
            {
                adjustedWidth,
                adjustedHeight
            } = getAdjustedSize({
                viewBoxWidth,
                viewBoxHeight,
                yIndex,
                scaleFactor
            })

        return (
            <ReactInlineSvg
                {...{
                    className: cx(
                        'PresenceSvg',
                        flipHorizontal && 'PresenceSvg__flipHorizontal',
                        className
                    ),
                    processSVG: this.processSvg,
                    src: children,
                    style: {
                        left: `${x.toFixed(2)}%`,
                        top: `${y.toFixed(2)}%`,
                        width: `${adjustedWidth.toFixed(2)}%`,
                        height: `${adjustedHeight.toFixed(2)}%`
                    },
                    wrapper: React.createFactory('div')
                }}
            />
        )
    }
}

export default PresenceSvg
